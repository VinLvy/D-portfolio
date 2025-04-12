import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center text-white">
      {/* Foto Profil */}
      <Image
        className="rounded-lg shadow-lg mb-6"
        src="/profile.jpg" // Ganti dengan foto asli
        alt="Profile Picture"
        width={200}
        height={200}
        priority
      />

      {/* Profil */}
      <section className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Davin P F</h1>
        <p className="text-lg text-gray-300">
          <span className="text-purple-400 font-semibold">Full-Stack Developer</span> | Passionate about building modern web applications. Experienced with PHP programming language and currently diving deeper into JavaScript.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10 max-w-2xl text-left">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">Skills</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Frontend: React.js, Next.js, Tailwind CSS</li>
          <li>Backend: PHP, Node.js, Express</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Tools: Git, VS Code, Postman</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-10 max-w-2xl text-left">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Web Developer - Freelance</h3>
          <p className="text-sm text-gray-400">2023 - Present</p>
          <p className="text-gray-300">
            Developed and maintained responsive websites for various clients using PHP and modern JavaScript frameworks.
          </p>
        </div>
        {/* Tambahkan pengalaman lain di sini */}
      </section>

      {/* Education */}
      <section className="mb-10 max-w-2xl text-left">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">Education</h2>
        <div>
          <h3 className="text-lg font-bold">Bachelor of Computer Science</h3>
          <p className="text-sm text-gray-400">Universitas XYZ - 2019–2023</p>
        </div>
      </section>

      {/* Interests */}
      <section className="mb-10 max-w-2xl text-left">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">Interests</h2>
        <p className="text-gray-300">
          UI/UX Design, Open Source Contribution, Learning New Technologies, Traveling
        </p>
      </section>
    </div>
  );
}
