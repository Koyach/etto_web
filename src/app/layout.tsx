import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, Shippori_Mincho } from "next/font/google"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], 
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ETTO - Dark & Resilient Luxury",
  description: "Unleashing Tradition. 日本の伝統工芸を「保存」から「解放」し、世界基準のラグジュアリーブランドへ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shipporiMincho.variable} ${bodoniModa.variable} antialiased bg-[#050505] text-[#F2F0EB] font-serif overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
