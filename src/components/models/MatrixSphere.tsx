"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Programming/math symbols
const CHARS = [
  "{", "}", "[", "]", "(", ")", "<", ">", "/", "\\", ";", ":", "=", "+", "-", "*", "/", "%", "&", "|", "^", "~", "!", "?", ".", ",", "'", '"', "`", "#", "@", "$", "_", "π", "λ", "//", "/*", "*/", "**", ":)", "XD",
];

// Texture cache to avoid creating 600+ canvases
const textureCache: { [key: string]: { bright: THREE.CanvasTexture, dim: THREE.CanvasTexture } } = {};

const getCharTexture = (char: string, bright: boolean) => {
  const cacheKey = char;
  if (!textureCache[cacheKey]) {
    const createTexture = (isBright: boolean) => {
      const c = document.createElement("canvas");
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext("2d")!;
      ctx.font = "bold 40px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (isBright) {
        ctx.shadowColor = "#00ff88";
        ctx.shadowBlur = 15;
        ctx.fillStyle = "#00ff88";
      } else {
        ctx.fillStyle = "#004422";
      }
      ctx.fillText(char, 32, 32);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      return tex;
    };
    textureCache[cacheKey] = {
      bright: createTexture(true),
      dim: createTexture(false)
    };
  }
  return bright ? textureCache[cacheKey].bright : textureCache[cacheKey].dim;
};

export default function MatrixSphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (mountRef.current) observer.observe(mountRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !mountRef.current) return;

    const mount = mountRef.current;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const COUNT = window.innerWidth < 768 ? 300 : 500;
    const group = new THREE.Group();
    scene.add(group);

    const spriteRefs: {
      sprite: THREE.Sprite;
      speed: number;
      phase: number;
      bright: boolean;
    }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < COUNT; i++) {
      const yy = 1 - (i / (COUNT - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - yy * yy));
      const theta = golden * i;

      const r = 2.5 + (Math.random() - 0.5) * 0.4;
      const x = Math.cos(theta) * radius * r;
      const y = yy * r;
      const z = Math.sin(theta) * radius * r;

      const bright = Math.random() > 0.7;
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];

      const mat = new THREE.SpriteMaterial({
        map: getCharTexture(char, bright),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: bright ? 0.9 : 0.25,
      });
      const sprite = new THREE.Sprite(mat);
      const scale = bright
        ? 0.18 + Math.random() * 0.1
        : 0.12 + Math.random() * 0.06;
      sprite.scale.set(scale, scale, 1);
      sprite.position.set(x, y, z);
      group.add(sprite);

      spriteRefs.push({
        sprite,
        speed: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        bright,
      });
    }

    // Simplified Core glow
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.03,
      }),
    );
    group.add(core);

    // Torus rings - reuse geometry
    const ringGeo = new THREE.TorusGeometry(2.5, 0.01, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.1,
    });
    
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 3;
    group.add(ring2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.1));

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    let charTimer = 0;
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.016;
      charTimer += 0.016;

      group.rotation.y += 0.002;
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, mouse.y * 0.2, 0.02);
      group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, mouse.x * 0.1, 0.02);

      // Swap chars - MUCH FASTER with texture reuse
      if (charTimer > 0.2) {
        charTimer = 0;
        for (let s = 0; s < 10; s++) {
          const idx = Math.floor(Math.random() * spriteRefs.length);
          const { sprite, bright } = spriteRefs[idx];
          const newChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          sprite.material.map = getCharTexture(newChar, bright);
        }
      }

      // Pulse opacity only for bright ones
      spriteRefs.forEach(({ sprite, phase, bright, speed }) => {
        if (bright) {
          const v = (Math.sin(t * speed + phase) + 1) / 2;
          sprite.material.opacity = 0.5 + v * 0.4;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.position.z = nw < 400 ? 7 + (400 - nw) * 0.015 : 7;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [isVisible]);

  return <div ref={mountRef} className="w-full h-full" />;
}
