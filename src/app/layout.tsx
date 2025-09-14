import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eswar Dudi",
  description: "The developer portfolio of Eswar Dudi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Blue ball */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 rounded-full bg-blend-color bg-blue-900 blur-[200px] opacity-40 animate-ball-expand pointer-events-none" />

        {/* Navbar */}
        <NavBar />

        {children}
      </body>
    </html>
  );
}
