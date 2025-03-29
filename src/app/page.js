import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      {/* Hero Section */}
      <div className="mt-24"> {/* Menambahkan margin top agar tidak terlalu dekat dengan navbar */}
        <Image
          className="rounded-full shadow-lg mb-6"
          src="/profile.jpg" // Ganti dengan foto profil asli
          alt="Profile Picture"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-4xl font-bold mb-4">Davin P F</h1>
        <p className="text-lg text-gray-300 max-w-lg">
          Full-Stack Developer | Passionate about building modern web applications with Next.js, React, and more.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-gray-700 text-white font-medium hover:bg-gray-800 transition"
        >
          Contact Me
        </Link>
      </div>

      {/* Skills Section */}
      <div className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-4 text-gray-300">
          <span>Next.js</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Tailwind CSS</span>
          <span>MongoDB</span>
          <span>Express.js</span>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/projects/project-1" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-sm text-gray-400">A full-stack web application built with Next.js.</p>
          </Link>
          <Link href="/projects/project-2" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-sm text-gray-400">An open-source UI component library.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
