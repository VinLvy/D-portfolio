import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen mt-30 text-white px-4 sm:px-6 lg:px-20">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col space-y-4 pr-10 sticky top-32 h-fit text-left">
        <a href="#about" className="hover:text-purple-400 transition-colors">About Me</a>
        <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
        <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
        <a href="#interests" className="hover:text-purple-400 transition-colors">Interests</a>
      </aside>

      {/* Konten Utama */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 text-left w-full max-w-3xl">
          {/* Foto Profil */}
          <div className="flex-shrink-0">
            <Image
              className="rounded-full shadow-lg"
              src="/profile.jpg"
              alt="Profile Picture"
              width={160}
              height={160}
              priority
            />
          </div>

          {/* Info Pribadi */}
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-purple-400 font-sans">Davin Putra Fibrian</h1>
            <p className="text-lg font-medium text-gray-200 font-mono">Age: <span className="text-white">18</span></p>
            <p className="text-lg font-medium text-gray-200 font-mono">Date of Birth: <span className="text-white">31 May 2006</span></p>
          </div>
        </div>

        <div className="border-t border-white opacity-30 w-full max-w-3xl my-10"></div>

        {/* Wrapper Utama */}
        <div className="w-full max-w-3xl mx-auto">
          {/* About */}
          <section id="about" className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-purple-300">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a <span className="text-purple-400 font-semibold">Full-Stack Developer</span> who is passionate about creating modern, user-friendly web applications. I have solid experience in PHP and am currently deepening my understanding of JavaScript and frameworks like React and Next.js. I&apos;m always eager to learn and explore new technologies to improve my craft.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-purple-300">Skills</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed">
              <li>Frontend: React.js, Next.js, Tailwind CSS</li>
              <li>Backend: PHP, Node.js, Express</li>
              <li>Database: MySQL, MongoDB</li>
              <li>Tools: Git, VS Code, Postman</li>
            </ul>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-10 max-w-2xl text-left">
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
          <section id="education" className="mb-10 max-w-2xl text-left">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Education</h2>
            <div>
              <h3 className="text-lg font-bold">Bachelor of Computer Science</h3>
              <p className="text-sm text-gray-400">Universitas XYZ - 2019–2023</p>
            </div>
          </section>

          {/* Interests */}
          <section id="interests" className="mb-20 max-w-2xl text-left">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Interests</h2>
            <p className="text-gray-300">
              UI/UX Design, Open Source Contribution, Learning New Technologies, Traveling
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
