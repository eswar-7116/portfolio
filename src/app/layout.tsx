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

const title = "Eswar Dudi | Developer Portfolio"
const description = "Portfolio of Eswar Dudi, a computer science student and software engineer. Skilled in full-stack and Android development using Java, Python, JavaScript, Go, Kotlin and TypeScript."
const myName = "Eswar Dudi"
const images = ["https://eswardudi.vercel.app/ss.png"]

export const metadata: Metadata = {
  title,
  description,
  keywords: [myName, "Eswar Dudi Portfolio", "Eswar Dudi Developer", "Eswar Dudi Software Engineer", "Eswar Dudi Student", "Eswar Dudi Projects", "Portfolio", "Developer Portfolio", "Student Portfolio"],
  authors: { name: myName },
  creator: myName,
  icons: "https://eswardudi.vercel.app/favicon.ico",
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://eswardudi.vercel.app",
    siteName: title,
    images,
  },
  twitter: {
    card: "summary_large_image",
    title, description,
    creator: "@EswarDudi",
    images,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9CtP8tQUXQwpU_i_OitrZ7zr3DYXQlICkJM1I24-yuU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Blue ball */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 rounded-full bg-blue-900 blur-[200px] opacity-40 animate-ball-expand pointer-events-none" />

        {/* Navbar */}
        <NavBar />

        {children}
      </body>
    </html>
  );
}
