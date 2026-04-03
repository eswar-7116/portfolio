"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberCube() {
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
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ACCENT = 0x00ff88;

    // Inner wireframe cube
    const innerGeo = new THREE.BoxGeometry(2, 2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: ACCENT,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const innerCube = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerCube);

    // Floating "data points" inside
    const pointGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const pointMat = new THREE.MeshBasicMaterial({ color: ACCENT });
    const points: THREE.Mesh[] = [];

    for (let i = 0; i < 40; i++) {
        const p = new THREE.Mesh(pointGeo, pointMat);
        p.position.set(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        );
        group.add(p);
        points.push(p);
    }

    // Outer frame (just vertices)
    const frameGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const frameEdges = new THREE.EdgesGeometry(frameGeo);
    const frameLines = new THREE.LineSegments(
        frameEdges,
        new THREE.LineBasicMaterial({ color: ACCENT, opacity: 0.5, transparent: true })
    );
    group.add(frameLines);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    // Interaction
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    const animate = () => {
      const id = requestAnimationFrame(animate);
      (animate as any)._id = id;
      t += 0.01;

      group.rotation.x += 0.005;
      group.rotation.y += 0.005;

      innerCube.rotation.z += 0.01;

      // Mouse influence
      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, group.rotation.y + mouse.x * 0.1, 0.05);
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, group.rotation.x - mouse.y * 0.1, 0.05);

      // Pulse and move points
      points.forEach((p, i) => {
          p.position.y += Math.sin(t * 2 + i) * 0.01;
          p.scale.setScalar(0.8 + Math.sin(t * 3 + i) * 0.2);
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      
      // Dynamic camera distance to prevent clipping
      if (nw < 400) {
        camera.position.z = 5 + (400 - nw) * 0.015;
      } else {
        camera.position.z = 5;
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
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
