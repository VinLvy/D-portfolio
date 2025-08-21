import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from " @@/components/navbar";
import CursorBlur from "../components/CursorBlur";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Davin P F - Portfolio",
  description: "Personal portfolio of Davin built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorBlur />
        <Navbar />
        <main className="w-full">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
