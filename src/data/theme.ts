import type React from "react";

export const THEME = {
  background: "#09090b",
  foreground: "#f3e9e4",
  accent: "#ffb86b",
  accentMuted: "#a99bdc",
  accentDim: "#4a3f6b",
  highlight: "#e8736a",
  particle: "#ff8a2b",
} as const;

const toNum = (h: string) => parseInt(h.slice(1), 16);
const toRgb = (h: string) => {
  const n = toNum(h);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
};

export const BACKGROUND = THEME.background;
export const ACCENT = THEME.accent;
export const ACCENT_HEX = toNum(THEME.accent);
export const ACCENT_RGB = toRgb(THEME.accent);
export const ACCENT_DIM = THEME.accentDim;
export const ACCENT_DIM_HEX = toNum(THEME.accentDim);
export const ACCENT_MUTED = THEME.accentMuted;
export const PARTICLE_HEX = toNum(THEME.particle);
export const PARTICLE_RGB = toRgb(THEME.particle);
export const ACCENT_MUTED_HEX = toNum(THEME.accentMuted);

export const THEME_CSS_VARS = {
  "--background": THEME.background,
  "--foreground": THEME.foreground,
  "--accent": THEME.accent,
  "--accent-rgb": ACCENT_RGB,
  "--secondary": THEME.accentMuted,
} as React.CSSProperties;
