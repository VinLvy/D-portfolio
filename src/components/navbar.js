"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 sm:top-0 sm:bottom-auto w-full z-50 flex items-center justify-between sm:px-6 sm:py-3 px-4 py-2">
      {/* Kiri (hanya desktop) */}
      <div className="hidden sm:block text-xl font-bold tracking-widest font-mono">
        D PORTFOLIO
      </div>

      {/* Tengah */}
      <div className="mt-2 bg-gray-900/50 backdrop-blur-lg shadow-md rounded-full flex px-4 py-2 sm:px-6 sm:py-3 space-x-2 sm:space-x-4 max-w-full mx-auto mb-3">
        <NavItem href="/" icon={<Home size={20} />} label="Home" active={pathname === "/"} />
        <NavItem href="/about" icon={<User size={20} />} label="About" active={pathname === "/about"} />
        <NavItem href="/projects" icon={<Briefcase size={20} />} label="Projects" active={pathname === "/projects"} />
      </div>

      {/* Kanan (hanya desktop) */}
      <div className="hidden sm:block text-xl font-bold tracking-widest font-mono">
        DAVIN P F
      </div>
    </nav>
  );
}

// Komponen Link dengan highlight halaman aktif dan hover
function NavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center sm:space-x-2 px-4 py-2 sm:px-5 text-sm sm:text-base font-medium rounded-full transition ${
        active
          ? "bg-gray-600/50 text-white shadow-md"
          : "text-white hover:bg-gray-700/50 hover:shadow"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}
