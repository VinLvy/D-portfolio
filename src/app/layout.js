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
  title: "Davin Putra Fibrian — Full-Stack & Site Reliability Engineer",
  description:
    "Full-Stack & Site Reliability Engineer building fault-tolerant microservices, cloud automation, and practical AI integrations with FastAPI, Laravel 11, and Google Cloud / AWS.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Davin Putra Fibrian — Full-Stack & Site Reliability Engineer",
    description:
      "Full-Stack & Site Reliability Engineer building fault-tolerant microservices, cloud automation, and practical AI integrations.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-canvas)] text-[var(--text-secondary)]`}>
        <Navbar />
        <main className="relative w-full pt-14 min-h-screen">
          <div className="structural-shell">
            {children}
          </div>
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
