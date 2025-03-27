import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center bg-gray-900 text-white">
      {/* Foto Profil */}
      <Image
        className="rounded-full shadow-lg mb-6"
        src="/profile.jpg" // Ganti dengan foto profil asli
        alt="Profile Picture"
        width={150}
        height={150}
        priority
      />

      {/* Nama dan Deskripsi */}
      <h1 className="text-4xl font-bold mb-4">Davin P F</h1>
      <p className="text-lg text-gray-300 max-w-lg">
        Full-Stack Developer | Passionate about building modern web applications with Next.js, React, and more.
      </p>

      {/* Tombol Navigasi */}
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

      {/* Social Media Links */}
      <div className="mt-8 flex space-x-6 text-gray-400">
        <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white transition">
          LinkedIn
        </Link>
        <Link href="https://instagram.com/yourprofile" target="_blank" className="hover:text-white transition">
          Instagram
        </Link>
        <Link href="https://github.com/yourprofile" target="_blank" className="hover:text-white transition">
          GitHub
        </Link>
        <Link href="mailto:your.email@example.com" className="hover:text-white transition">
          Email
        </Link>
      </div>
    </div>
  );
}
