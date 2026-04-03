"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Programming/math symbols
const CHARS = [
  "{",
  "}",
  "[",
  "]",
  "(",
  ")",
  "<",
  ">",
  "/",
  "\\",
  ";",
  ":",
  "=",
  "+",
  "-",
  "*",
  "/",
  "%",
  "&",
  "|",
  "^",
  "~",
  "!",
  "?",
  ".",
  ",",
  "'",
  '"',
  "`",
  "#",
  "@",
  "$",
  "_",
  "π",
  "λ",
  "//",
  "/*",
  "*/",
  "**",
  ":)",
  "XD",
];

export default function MatrixSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const makeCharTexture = (char: string, bright: boolean) => {
      const c = document.createElement("canvas");
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext("2d")!;
      ctx.clearRect(0, 0, 64, 64);
      ctx.font = "bold 40px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (bright) {
        ctx.shadowColor = "#00ff88";
        ctx.shadowBlur = 15;
        ctx.fillStyle = "#00ff88";
      } else {
        ctx.fillStyle = "#004422";
      }
      ctx.fillText(char, 32, 32);
      return new THREE.CanvasTexture(c);
    };

    const COUNT = 600;
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
        map: makeCharTexture(char, bright),
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

    // Core glow
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.03,
      }),
    );
    group.add(core);

    // Inner core
    group.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshBasicMaterial({
          color: 0x00ff88,
          transparent: true,
          opacity: 0.08,
        }),
      ),
    );

    // Equator rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.15,
    });
    group.add(
      new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.015, 8, 120), ringMat),
    );

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.01, 8, 120),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.1,
      }),
    );
    ring2.rotation.x = Math.PI / 3;
    group.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.01, 8, 120),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.08,
      }),
    );
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 5;
    group.add(ring3);

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
    const animate = () => {
      const id = requestAnimationFrame(animate);
      (animate as any)._id = id;
      t += 0.016;
      charTimer += 0.016;

      group.rotation.y += 0.003;
      group.rotation.x = THREE.MathUtils.lerp(
        group.rotation.x,
        mouse.y * 0.3,
        0.03,
      );
      group.rotation.z = THREE.MathUtils.lerp(
        group.rotation.z,
        mouse.x * 0.1,
        0.03,
      );

      // Swap chars
      if (charTimer > 0.15) {
        charTimer = 0;
        for (let s = 0; s < 15; s++) {
          const idx = Math.floor(Math.random() * spriteRefs.length);
          const { sprite, bright } = spriteRefs[idx];
          const newChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          const oldMap = (sprite.material as THREE.SpriteMaterial).map;
          (sprite.material as THREE.SpriteMaterial).map = makeCharTexture(
            newChar,
            bright,
          );
          oldMap?.dispose();
        }
      }

      // Pulse opacity
      spriteRefs.forEach(({ sprite, phase, bright, speed }) => {
        if (bright) {
          const v = (Math.sin(t * speed + phase) + 1) / 2;
          (sprite.material as THREE.SpriteMaterial).opacity = 0.5 + v * 0.5;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      
      // Dynamic camera distance to prevent clipping on thin screens
      if (nw < 400) {
        camera.position.z = 7 + (400 - nw) * 0.015;
      } else {
        camera.position.z = 7;
      }
      
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame((animate as any)._id);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      spriteRefs.forEach(({ sprite }) => {
        (sprite.material as THREE.SpriteMaterial).map?.dispose();
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
