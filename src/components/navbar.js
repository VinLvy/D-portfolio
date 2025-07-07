"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import React from 'react';

// PASTIKAN navItemsConfig berada DI SINI, DI LUAR KOMPONEN Navbar
const navItemsConfig = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/about", label: "About", icon: <User size={20} /> },
  { href: "/projects", label: "Projects", icon: <Briefcase size={20} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const navItemRefs = useRef([]);

  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const currentIndex = navItemsConfig.findIndex(item => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveItemIndex(currentIndex);

      const activeItemElement = navItemRefs.current[currentIndex];
      if (activeItemElement) {
        const parentDiv = activeItemElement.parentElement;
        if (parentDiv) {
          const parentRect = parentDiv.getBoundingClientRect();
          const itemRect = activeItemElement.getBoundingClientRect();

          const indicatorWidth = itemRect.width;
          const indicatorLeft = itemRect.left - parentRect.left;

          setIndicatorStyle({
            width: `${indicatorWidth}px`,
            left: `${indicatorLeft}px`,
            height: `calc(100% - 10px)`,
            top: `5px`,
          });
        }
      }
    }
  }, [pathname]); // <-- PASTIKAN navItemsConfig TIDAK ADA DI SINI

  return (
    <nav className="fixed bottom-0 sm:top-0 sm:bottom-auto w-full z-50 flex items-center justify-between sm:px-6 sm:py-3 px-4 py-2">
      <div className="relative mt-2 bg-gray-900/50 backdrop-blur-lg shadow-md rounded-full flex px-2 py-1 sm:px-3 sm:py-1 space-x-2 sm:space-x-4 max-w-full mx-auto mb-5">
        <div
          className="absolute bg-gray-700/80 rounded-full transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        ></div>

        {navItemsConfig.map((item, index) => (
          <ForwardedNavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={pathname === item.href}
            ref={el => (navItemRefs.current[index] = el)}
          />
        ))}
      </div>
    </nav>
  );
}

const NavItem = ({ href, icon, label, active }, ref) => {
  return (
    <Link
      ref={ref}
      href={href}
      className={`relative z-10 flex items-center sm:space-x-2 px-3 py-2 sm:px-4 text-sm sm:text-base font-medium rounded-full transition ${
        active ? "text-white" : "text-white hover:bg-gray-700/30 hover:shadow"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
};

const ForwardedNavItem = React.forwardRef(NavItem);