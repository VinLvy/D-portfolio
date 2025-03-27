"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 z-50 flex items-center justify-between px-6 py-3">
      {/* Pojok Kiri - D Portfolio */}
      <div className="text-white text-xl font-bold tracking-widest font-mono">D PORTFOLIO</div>

      {/* Navigasi Tengah */}
      <div className="bg-gray-900/50 backdrop-blur-lg shadow-md rounded-full px-6 py-3 flex space-x-4">
        <NavItem href="/" icon={<Home size={20} />} label="Home" active={pathname === "/"} />
        <NavItem href="/about" icon={<User size={20} />} label="About" active={pathname === "/about"} />
        <NavItem href="/projects" icon={<Briefcase size={20} />} label="Projects" active={pathname === "/projects"} />
      </div>

      {/* Pojok Kanan - Nama Anda */}
      <div className="text-white text-xl font-bold tracking-widest font-mono">DAVIN P F</div>
    </nav>
  );
}

// Komponen Link dengan highlight halaman aktif dan hover
function NavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-5 py-2 text-base font-medium rounded-full transition ${
        active
          ? "bg-gray-600/50 text-white shadow-md"
          : "text-white hover:bg-gray-700/50 hover:shadow"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
