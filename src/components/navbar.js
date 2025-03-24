"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Pojok Kiri - D Portfolio */}
      <div className="text-white text-2xl font-extrabold tracking-wide">D PORTFOLIO</div>

      {/* Navigasi Tengah */}
      <div className="bg-gray-900/70 backdrop-blur-md shadow-md rounded-full px-8 py-3 flex space-x-6">
        <NavItem href="/" icon={<Home size={22} />} label="Home" active={pathname === "/"} />
        <NavItem href="/about" icon={<User size={22} />} label="About" active={pathname === "/about"} />
        <NavItem href="/projects" icon={<Briefcase size={22} />} label="Projects" active={pathname === "/projects"} />
      </div>

      {/* Pojok Kanan - Nama Anda */}
      <div className="text-white text-2xl font-extrabold tracking-wide">NAMA ANDA</div>
    </nav>
  );
}

// Komponen Link dengan highlight halaman aktif dan hover
function NavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-6 py-3 text-lg font-semibold rounded-full transition ${
        active
          ? "bg-gray-500/50 text-white shadow-md"
          : "text-white hover:bg-gray-800/50 hover:shadow"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
