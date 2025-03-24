import Link from "next/link";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 flex justify-center p-4">
      <div className="bg-gray-900/70 backdrop-blur-md shadow-md rounded-full px-6 py-2 flex space-x-4">
        <Link
          href="/"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800/50 rounded-lg transition"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link
          href="/about"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800/50 rounded-lg transition"
        >
          <User size={20} />
          <span>About</span>
        </Link>
        <Link
          href="/projects"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800/50 rounded-lg transition"
        >
          <Briefcase size={20} />
          <span>Projects</span>
        </Link>
        {/* <Link
          href="/contact"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800/50 rounded-lg transition"
        >
          <Mail size={20} />
          <span>Contact</span>
        </Link> */}
      </div>
    </nav>
  );
}
