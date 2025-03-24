import Link from "next/link";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/70 backdrop-blur-md shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold text-white">My Portfolio</h1>
        <div className="flex space-x-4 mt-2">
          <Link
            href="/"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800/50"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800/50"
          >
            <User size={20} />
            <span>About</span>
          </Link>
          <Link
            href="/projects"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800/50"
          >
            <Briefcase size={20} />
            <span>Projects</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
