import React from "react"
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "XYVOX | The Convergence of Crypto Intelligence",
  description:
    "High-frequency arbitrage ecosystem and on-chain analytics powered by event-driven architecture.",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#000000] text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
