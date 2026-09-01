import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Davin P F — Full-Stack Developer & Systems Builder",
  description:
    "Full-Stack Developer crafting high-impact applications with PHP, JavaScript, and modern Web3 stacks. Authority in clean code architecture, pragmatic APIs, and Technical Brutalism.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#131313] text-[#e5e2e1]`}>
        <Navbar />
        <main className="relative w-full pt-16 min-h-screen">
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
