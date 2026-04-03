"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 22;
const MAX_EDGE_DIST = 2.4;
const GREEN = 0x00ff88;

export default function NetworkNodes() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodes: { pos: THREE.Vector3 }[] = [];
    const vels: THREE.Vector3[] = [];
    const nodeMeshes: { mesh: THREE.Mesh; size: number; phase: number }[] = [];
    const glowMeshes: THREE.Mesh[] = [];

    const sphereGeo = new THREE.SphereGeometry(1, 16, 16);

    for (let i = 0; i < NODE_COUNT; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
      );
      nodes.push({ pos });
      vels.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.006,
        ),
      );

      const size = 0.04 + Math.random() * 0.07;

      const mesh = new THREE.Mesh(
        sphereGeo,
        new THREE.MeshBasicMaterial({ color: GREEN }),
      );
      mesh.scale.setScalar(size);
      mesh.position.copy(pos);
      group.add(mesh);
      nodeMeshes.push({ mesh, size, phase: Math.random() * Math.PI * 2 });

      const glow = new THREE.Mesh(
        sphereGeo,
        new THREE.MeshBasicMaterial({
          color: GREEN,
          transparent: true,
          opacity: 0.07,
        }),
      );
      glow.scale.setScalar(size * 5);
      glow.position.copy(pos);
      group.add(glow);
      glowMeshes.push(glow);
    }

    const MAX_SEGS = (NODE_COUNT * (NODE_COUNT - 1)) / 2;
    const positions = new Float32Array(MAX_SEGS * 2 * 3);
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    edgeGeo.setDrawRange(0, 0);
    const edgeMat = new THREE.LineBasicMaterial({
      color: GREEN,
      transparent: true,
      opacity: 0.35,
    });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    group.add(edgeLines);

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let animId: number;
    let t = 0,
      rotY = 0,
      rotX = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.016;

      rotY += (mouse.x * 0.35 - rotY) * 0.04;
      rotX += (-mouse.y * 0.25 - rotX) * 0.04;
      group.rotation.y = rotY + t * 0.08;
      group.rotation.x = rotX;

      nodes.forEach((n, i) => {
        n.pos.add(vels[i]);
        if (Math.abs(n.pos.x) > 2.8) vels[i].x *= -1;
        if (Math.abs(n.pos.y) > 2.8) vels[i].y *= -1;
        if (Math.abs(n.pos.z) > 2.2) vels[i].z *= -1;

        const pulse = 0.8 + Math.sin(t * 1.8 + nodeMeshes[i].phase) * 0.2;
        nodeMeshes[i].mesh.position.copy(n.pos);
        nodeMeshes[i].mesh.scale.setScalar(nodeMeshes[i].size * pulse);
        glowMeshes[i].position.copy(n.pos);
        glowMeshes[i].scale.setScalar(nodeMeshes[i].size * 5 * pulse);
      });

      let vIdx = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dist = nodes[i].pos.distanceTo(nodes[j].pos);
          if (dist < MAX_EDGE_DIST) {
            positions[vIdx * 3] = nodes[i].pos.x;
            positions[vIdx * 3 + 1] = nodes[i].pos.y;
            positions[vIdx * 3 + 2] = nodes[i].pos.z;
            vIdx++;
            positions[vIdx * 3] = nodes[j].pos.x;
            positions[vIdx * 3 + 1] = nodes[j].pos.y;
            positions[vIdx * 3 + 2] = nodes[j].pos.z;
            vIdx++;
          }
        }
      }
      edgeGeo.attributes.position.needsUpdate = true;
      edgeGeo.setDrawRange(0, vIdx);

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
    const ro = new ResizeObserver(handleResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
