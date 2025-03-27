import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      {/* Foto Profil */}
      <Image
        className="rounded-lg shadow-lg mb-6"
        src="/profile.jpg" // Ganti dengan foto asli
        alt="Profile Picture"
        width={200}
        height={200}
        priority
      />

      {/* Tentang Saya */}
      <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
      <p className="text-lg text-gray-300 max-w-2xl">
        Hi, I&apos;m Davin P F, a Full-Stack Developer with a passion for building
        modern and efficient web applications. With experience in Next.js,
        React, and various backend technologies, I strive to create seamless
        digital experiences.
      </p>

      <p className="text-lg text-gray-300 max-w-2xl mt-4">
        When I&lsquo;m not coding, I enjoy learning new technologies, contributing to
        open-source projects, and exploring the world of UI/UX design.
      </p>
    </div>
  );
}