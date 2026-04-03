"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FloatingParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const COUNT = 800;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const velocities: THREE.Vector3[] = [];

    const greenColor = new THREE.Color(0x00ff88);
    const secondaryColor = new THREE.Color(0x004422);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const isBright = Math.random() > 0.8;
      const c = isBright ? greenColor : secondaryColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = isBright ? 2 + Math.random() * 3 : 1 + Math.random() * 1.5;

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
        ),
      );
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Glowy dot texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(0, 255, 136, 1)");
    grad.addColorStop(0.3, "rgba(0, 255, 136, 0.4)");
    grad.addColorStop(1, "rgba(0, 255, 136, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    const sprite = new THREE.CanvasTexture(canvas);

    const mat = new THREE.PointsMaterial({
      size: 0.06,
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      opacity: 0.6,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    const animate = () => {
      const id = requestAnimationFrame(animate);
      (animate as any)._id = id;
      t += 0.01;

      points.rotation.y += 0.001;
      points.rotation.x = THREE.MathUtils.lerp(
        points.rotation.x,
        mouse.y * 0.1,
        0.02,
      );
      points.rotation.z = THREE.MathUtils.lerp(
        points.rotation.z,
        mouse.x * 0.1,
        0.02,
      );

      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        posAttr.array[i * 3] += velocities[i].x;
        posAttr.array[i * 3 + 1] += velocities[i].y;
        posAttr.array[i * 3 + 2] += velocities[i].z;

        // Wrap around
        if (Math.abs(posAttr.array[i * 3]) > 10) velocities[i].x *= -1;
        if (Math.abs(posAttr.array[i * 3 + 1]) > 10) velocities[i].y *= -1;
        if (Math.abs(posAttr.array[i * 3 + 2]) > 10) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame((animate as any)._id);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 -z-10 w-full h-full" />
  );
}
