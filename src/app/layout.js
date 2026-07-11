import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import CursorBlur from "@/components/CursorBlur";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Davin P F — Full-Stack Developer",
  description:
    "Full-Stack Developer crafting high-impact applications with PHP, JavaScript, and modern Web3 stacks. Building polished UIs, pragmatic APIs, and immersive digital experiences.",
  openGraph: {
    title: "Davin P F — Full-Stack Developer",
    description:
      "Full-Stack Developer crafting high-impact applications at the intersection of performance, design, and Web3.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <BackgroundCanvas />
        <CursorBlur />
        <Navbar />
        <main className="relative w-full" style={{ zIndex: 10 }}>
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
