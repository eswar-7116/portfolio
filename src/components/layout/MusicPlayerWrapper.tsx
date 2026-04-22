"use client";

import dynamic from "next/dynamic";

const MusicPlayer = dynamic(
  () => import("@/components/layout/MusicPlayer"),
  { ssr: false }
);

export default function MusicPlayerWrapper() {
  return <MusicPlayer />;
}
