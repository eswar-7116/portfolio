"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ProjectVoxels() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ACCENT = 0x00ff88;
    const VOXEL_COUNT = 60;
    const voxels: THREE.Mesh[] = [];
    const positions: THREE.Vector3[] = [];
    const speeds: number[] = [];

    const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const mat = new THREE.MeshStandardMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.6,
      emissive: ACCENT,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });

    // Create a cloud of voxels
    for (let i = 0; i < VOXEL_COUNT; i++) {
        const mesh = new THREE.Mesh(geo, mat.clone());
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
        );
        mesh.position.copy(pos);
        mesh.rotation.set(Math.random(), Math.random(), Math.random());
        group.add(mesh);
        voxels.push(mesh);
        positions.push(pos.clone());
        speeds.push(0.5 + Math.random());
    }

    // Outer grid frame for structure
    const frameGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5);
    const frameEdges = new THREE.EdgesGeometry(frameGeo);
    const frame = new THREE.LineSegments(
        frameEdges,
        new THREE.LineBasicMaterial({ color: ACCENT, opacity: 0.1, transparent: true })
    );
    group.add(frame);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const point = new THREE.PointLight(ACCENT, 2, 10);
    point.position.set(2, 2, 5);
    scene.add(point);

    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      targetMouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      targetMouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    const animate = () => {
      const id = requestAnimationFrame(animate);
      (animate as any)._id = id;
      t += 0.01;

      // Smoother mouse
      mouse.x = THREE.MathUtils.lerp(mouse.x, targetMouse.x, 0.05);
      mouse.y = THREE.MathUtils.lerp(mouse.y, targetMouse.y, 0.05);

      group.rotation.y += 0.002;
      group.rotation.x = mouse.y * 0.2;
      group.rotation.z = mouse.x * 0.1;

      voxels.forEach((v, i) => {
          // Drifting
          v.position.x = positions[i].x + Math.sin(t * speeds[i] + i) * 0.2;
          v.position.y = positions[i].y + Math.cos(t * speeds[i] * 0.8 + i) * 0.2;
          v.position.z = positions[i].z + Math.sin(t * speeds[i] * 1.2 + i) * 0.2;
          
          v.rotation.x += 0.01;
          v.rotation.y += 0.01;

          // Reaction to mouse (proximity)
          const dist = v.position.distanceTo(new THREE.Vector3(mouse.x * 2, mouse.y * 2, 0));
          const s = Math.max(0.5, 1.5 - dist * 0.4);
          v.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
          
          // Glow intensity
          (v.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.2 + (1.5 - s) * 0.5;
          (v.material as THREE.MeshStandardMaterial).opacity = 0.3 + (s - 0.5);
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      
      if (nw < 600) {
        camera.position.z = 10;
      } else {
        camera.position.z = 8;
      }
      
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame((animate as any)._id);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
