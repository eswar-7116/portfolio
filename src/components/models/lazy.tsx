"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

// three.js scenes are client-only and split into their own chunks so they
// never block the server-rendered content.
const FloatingParticlesScene = dynamic(() => import("./FloatingParticles"), {
  ssr: false,
});
const MatrixSphereScene = dynamic(() => import("./MatrixSphere"), {
  ssr: false,
});
const CyberCubeScene = dynamic(() => import("./CyberCube"), { ssr: false });

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/** True when the user asked the OS to reduce motion. False during SSR. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

export function FloatingParticles() {
  return usePrefersReducedMotion() ? null : <FloatingParticlesScene />;
}

export function MatrixSphere() {
  return usePrefersReducedMotion() ? null : <MatrixSphereScene />;
}

export function CyberCube() {
  return usePrefersReducedMotion() ? null : <CyberCubeScene />;
}
