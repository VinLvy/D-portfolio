'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('[data-scroll]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const section = document.querySelector(href);

        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const offset = sectionTop + window.pageYOffset - (window.innerHeight / 2) + (section.offsetHeight / 2) + 123; // Adjust the offset value

          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="flex min-h-screen mt-30 text-white px-4 sm:px-6 lg:px-20">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col space-y-4 pr-10 sticky top-55 h-fit text-left relative">
        <span className="absolute top-30 right-0 translate-x-15 -translate-y-1/2 h-100 w-px bg-white/20"></span>
        {[
          { href: "#about", label: "About Me" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#education", label: "Education" },
          { href: "#interests", label: "Interests" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            data-scroll
            className="group relative pl-5 text-gray-300 text-xl transition-all duration-300 ease-in-out"
          >
            {/* Garis horizontal di kiri */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-6 h-0.5 bg-purple-400 transition-all duration-300"></span>

            {/* Teks */}
            <span className="inline-block group-hover:translate-x-2 group-hover:scale-100 group-hover:text-purple-400 transition-all duration-300">
              {item.label}
            </span>
          </a>
        ))}
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
          <section id="about" className="mb-15">
            <h2 className="text-3xl font-semibold mb-4 text-purple-300">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a <span className="text-purple-400 font-semibold">Full-Stack Developer</span> who is passionate about creating modern, user-friendly web applications. I have solid experience in PHP and am currently deepening my understanding of JavaScript and frameworks like React and Next.js. I&apos;m always eager to learn and explore new technologies to improve my craft.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-15">
            <h2 className="text-3xl font-semibold mb-8 text-purple-300">Skills</h2>

            {/* Frontend */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b-4 border-amber-500 inline-block pb-1">
                Frontend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
                {[
                  // { name: "React.js", icon: "/icons/react.svg", stars: 4 },
                  {
                    name: "Next.js",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="60" height="60">
                        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
                          <circle cx="90" cy="90" r="90" fill="black" />
                        </mask>
                        <g mask="url(#mask0)">
                          <circle cx="90" cy="90" r="90" fill="black" />
                          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
                          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ),
                    stars: 4,
                  },
                  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", stars: 4 },
                  { name: "HTML", icon: "/icons/html.svg", stars: 5 },
                  { name: "CSS", icon: "/icons/css.svg", stars: 5 },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-800/55 p-8 rounded-2xl min-w-[150px] shadow-lg border-2 border-amber-500"
                  >
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      {typeof tech.icon === "string" ? (
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      ) : (
                        tech.icon
                      )}
                    </div>
                    <p className="text-md font-semibold text-center">{tech.name}</p>
                    <p className="text-yellow-400 text-xl mt-2 text-center">
                      {"★".repeat(tech.stars)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b-4 border-rose-500 inline-block pb-1">
                Backend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
                {[
                  { name: "PHP", icon: "/icons/php.svg", stars: 5 },
                  // { name: "Node.js", icon: "/icons/nodejs.svg", stars: 4 },
                  // { name: "Express", icon: "/icons/express.svg", stars: 4 },
                  { name: "Golang", icon: "/icons/golang.svg", stars: 2 },
                  { name: "CodeIgniter 4", icon: "/icons/codeigniter.svg", stars: 5 },
                  { name: "Laravel", icon: "/icons/laravel.svg", stars: 4 },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-800/55 p-8 rounded-2xl min-w-[150px] shadow-lg border-2 border-rose-500"
                  >
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-md font-semibold text-center">{tech.name}</p>
                    <p className="text-yellow-400 text-xl mt-2 text-center">
                      {"★".repeat(tech.stars)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b-4 border-cyan-500 inline-block pb-1">
                Database
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
                {[
                  { name: "MySQL", icon: "/icons/mysql.svg", stars: 5 },
                  // { name: "MongoDB", icon: "/icons/mongodb.svg", stars: 4 },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-800/55 p-8 rounded-2xl min-w-[150px] shadow-lg border-2 border-cyan-500"
                  >
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-md font-semibold text-center">{tech.name}</p>
                    <p className="text-yellow-400 text-xl mt-2 text-center">
                      {"★".repeat(tech.stars)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b-4 border-purple-500 inline-block pb-1">
                Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
                {[
                  { name: "Github", icon: "/icons/github.png", stars: 5 },
                  { name: "Git", icon: "/icons/icons8-git.svg", stars: 3 },
                  { name: "VS Code", icon: "/icons/vscode.svg", stars: 5 },
                  { name: "Figma", icon: "/icons/figma.png", stars: 3 },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-800/55 p-8 rounded-2xl min-w-[150px] shadow-lg border-2 border-purple-500"
                  >
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-md font-semibold text-center">{tech.name}</p>
                    <p className="text-yellow-400 text-xl mt-2 text-center">
                      {"★".repeat(tech.stars)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-15 max-w-2xl text-left">
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
          <section id="education" className="mb-15 max-w-2xl text-left">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Education</h2>
            <div>
              <h3 className="text-lg font-bold">Bachelor of Computer Science</h3>
              <p className="text-sm text-gray-400">Universitas XYZ - 2019–2023</p>
            </div>
          </section>

          {/* Interests */}
          <section id="interests" className="mb-25 max-w-2xl text-left">
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
