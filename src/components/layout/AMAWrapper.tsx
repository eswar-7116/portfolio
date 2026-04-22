"use client";

import dynamic from "next/dynamic";

const AMA = dynamic(() => import("@/components/layout/AMA"), { ssr: false });

export default function AMAWrapper() {
  return <AMA />;
}
