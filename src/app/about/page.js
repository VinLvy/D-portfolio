'use client';

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import GlareHover from "../../components/GlareHover";

export default function About() {

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('[data-scroll]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const section = document.querySelector(href);

        if (section) {
          const headerOffset = 80;
          const offsetTop = section.offsetTop - headerOffset;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="flex min-h-screen mt-15 md:mt-30 text-white px-4 sm:px-6 lg:px-20">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col space-y-4 pr-10 sticky top-55 h-fit text-left relative">
          <span className="absolute top-30 right-0 translate-x-15 -translate-y-1/2 h-100 w-px dark:bg-white/30 bg-black/50"></span>
          {[
            { href: "#about", label: "About Me" },
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#education", label: "Education" },
            // { href: "#resume", label: "Resume" },
            { href: "#interests", label: "Interests" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-scroll
              className="group relative pl-5 text-gray-700 dark:text-gray-300 text-xl transition-all duration-300 ease-in-out"
            >
              {/* Garis horizontal di kiri */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-6 h-0.5 bg-purple-400 transition-all duration-300"></span>

              {/* Teks */}
              <span className="inline-block group-hover:translate-x-2 group-hover:scale-100 group-hover:text-purple-500 transition-all duration-300">
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
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold text-purple-800 dark:text-purple-500 font-sans mb-4">Davin Putra Fibrian</h1>

              {/* Professional Title */}
              <p className="text-xl font-semibold text-purple-600 dark:text-purple-400 font-mono mb-3">
                Full-Stack Developer
              </p>

              {/* Contact Information */}
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 font-mono flex items-center gap-2">
                  <span className="text-purple-500">📧</span>
                  <span className="text-gray-800 dark:text-white">davinfibrian@gmail.com</span>
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 font-mono flex items-center gap-2">
                  <span className="text-purple-500">🔗</span>
                  <a href="https://github.com/VinLvy" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    github.com/VinLvy
                  </a>
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 font-mono flex items-center gap-2">
                  <span className="text-purple-500">💼</span>
                  <a href="https://linkedin.com/in/davin-p-f-0b00a12b7" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    linkedin.com/in/davin-p-f-0b00a12b7
                  </a>
                </p>
              </div>

              {/* Personal Details */}
              <div className="space-y-2 pt-2">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 font-mono">
                  <span className="text-gray-600 dark:text-gray-400">Date of Birth:</span> <span className="text-gray-800 dark:text-white">31 May 2006</span>
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 font-mono">
                  <span className="text-gray-600 dark:text-gray-400">Location:</span> <span className="text-gray-800 dark:text-white">East Java, Indonesia</span>
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 font-mono">
                  <span className="text-gray-600 dark:text-gray-400">Availability:</span> <span className="text-green-600 dark:text-green-400 font-semibold">Open to Opportunities</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-black dark:border-white opacity-30 w-full max-w-3xl my-10"></div>

          {/* Wrapper Utama */}
          <div className="w-full max-w-3xl mx-auto">
            {/* About */}
            <section id="about" className="mb-15">
              <h2 className="text-3xl font-semibold mb-4 text-purple-700 dark:text-purple-400">About Me</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a <span className="text-purple-600 dark:text-purple-400 font-semibold">Full-Stack Developer</span> with a strong foundation in modern web development technologies. My expertise encompasses both frontend and backend development, with particular proficiency in PHP frameworks and contemporary JavaScript ecosystems including React and Next.js.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Currently, I am expanding my knowledge in emerging technologies, particularly in the Web3 space, blockchain development, and decentralized applications. I maintain a commitment to continuous learning and staying current with industry best practices to deliver high-quality, scalable solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                I approach each project with a focus on clean code architecture, user experience optimization, and performance-driven development. My collaborative nature and problem-solving mindset enable me to work effectively in team environments while contributing innovative solutions to complex technical challenges.
              </p>
            </section>

            {/* Skills */}
            <section id="skills" className="mb-15">
              <h2 className="text-3xl font-semibold mb-8 text-purple-700 dark:text-purple-400">Skills</h2>

              {/* Frontend */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 border-b-4 border-amber-500 inline-block pb-1">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-200">
                  {[
                    { name: "React", icon: "/icons/react.png", stars: 3 },
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
                    { name: "JavaScript", icon: "/icons/javascript.png", stars: 4 },
                  ].map((tech, index) => (
                    <GlareHover
                      key={tech.name}
                      glareColor="#FFBF00"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <div className="flex flex-col items-center bg-gray-600/55 dark:bg-gray-800/55 p-8 rounded-3xl min-w-[150px] shadow-lg border-2 border-amber-500 w-full h-full">
                        <div className="w-20 h-20 flex items-center justify-center mb-4">
                          {typeof tech.icon === "string" ? (
                            <Image src={tech.icon} alt={tech.name} width={50} height={50} className="object-contain" />
                          ) : (
                            tech.icon
                          )}
                        </div>
                        <p className="text-md font-semibold text-center">{tech.name}</p>
                        <p className="text-yellow-400 text-xl mt-2 text-center">{"★".repeat(tech.stars)}</p>
                      </div>
                    </GlareHover>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 border-b-4 border-rose-500 inline-block pb-1">
                  Backend
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-200">
                  {[
                    { name: "PHP", icon: "/icons/php.svg", stars: 5 },
                    { name: "Node.js", icon: "/icons/Node.js.svg", stars: 3 },
                    { name: "Express", icon: "/icons/express-js.svg", stars: 4 },
                    { name: "Golang", icon: "/icons/golang.svg", stars: 2 },
                    { name: "CodeIgniter 4", icon: "/icons/codeigniter.svg", stars: 5 },
                    { name: "Laravel", icon: "/icons/laravel.svg", stars: 4 },
                    // { name: "Python", icon: "/icons/python.svg", stars: 3 },
                  ].map((tech, index) => (
                    <GlareHover
                      key={tech.name}
                      glareColor="#FF3D68"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <div className="flex flex-col items-center bg-gray-600/55 dark:bg-gray-800/55 p-8 rounded-3xl min-w-[150px] shadow-lg border-2 border-rose-500 w-full h-full">
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
                    </GlareHover>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 border-b-4 border-cyan-500 inline-block pb-1">
                  Database
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-200">
                  {[
                    { name: "MySQL", icon: "/icons/mysql.svg", stars: 5 },
                    { name: "MongoDB", icon: "/icons/mongo-db.png", stars: 4 },
                  ].map((tech, index) => (
                    <GlareHover
                      key={tech.name}
                      glareColor="#00FFFF"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <div className="flex flex-col items-center bg-gray-600/55 dark:bg-gray-800/55 p-8 rounded-3xl min-w-[150px] shadow-lg border-2 border-cyan-500 w-full h-full">
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
                    </GlareHover>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 border-b-4 border-purple-800 inline-block pb-1">
                  Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-200">
                  {[
                    { name: "Github", icon: "/icons/github.png", stars: 5 },
                    { name: "Git", icon: "/icons/icons8-git.svg", stars: 3 },
                    { name: "VS Code", icon: "/icons/vscode.svg", stars: 5 },
                    { name: "Figma", icon: "/icons/figma.png", stars: 3 },
                  ].map((tech, index) => (
                    <GlareHover
                      key={tech.name}
                      glareColor="#BF40BF"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <div className="flex flex-col items-center bg-gray-600/55 dark:bg-gray-800/55 p-8 rounded-3xl min-w-[150px] shadow-lg border-2 border-purple-800 w-full h-full">
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
                    </GlareHover>
                  ))}
                </div>
              </div>

              {/* Web3 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 border-b-4 border-blue-500 inline-block pb-1">
                  Web3
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-200">
                  {[
                    { name: "Solidity", icon: "/icons/Solidity.svg", stars: 3 },
                    // { name: "Ethereum", icon: "/icons/ethereum.png", stars: 4 },
                    // { name: "Smart Contracts", icon: "/icons/smart-contracts.png", stars: 3 },
                  ].map((tech, index) => (
                    <GlareHover
                      key={tech.name}
                      glareColor="#0000FF"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <div className="flex flex-col items-center bg-gray-600/55 dark:bg-gray-800/55 p-8 rounded-3xl min-w-[150px] shadow-lg border-2 border-blue-500 w-full h-full">
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
                    </GlareHover>
                  ))}
                </div>
              </div>
            </section>

            {/* Experience */}
            <section id="experience" className="mb-15 max-w-2xl text-left">
              <h2 className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400">Professional Experience</h2>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                  <span className="text-purple-400 text-xl">•</span>
                  Full-Stack Web Developer - Internship at Elecomp Indonesia
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">2024 - 2025</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  Developed and maintained full-stack web applications using modern development practices. Collaborated with cross-functional teams to implement scalable features while maintaining high code quality standards. Specialized in building responsive company profile websites utilizing CodeIgniter 4 framework, with a focus on creating intuitive user interfaces and optimizing user experience.
                </p>
              </div>

            </section>

            {/* Education */}
            <section id="education" className="mb-15 max-w-2xl text-left">
              <h2 className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400">Educational Background</h2>

              <div className="mb-4">
                <h3 className="text-lg text-black dark:text-white font-bold flex items-center gap-2">
                  <span className="text-purple-400 text-xl">•</span>
                  SMKN 1 Boyolangu - Software Engineering (Rekayasa Perangkat Lunak)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">2022 - 2025</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  Comprehensive curriculum focused on software engineering principles, including web development methodologies, database design, and programming fundamentals. Actively participated in hands-on projects, developing practical skills in building dynamic web applications and implementing responsive design principles.
                </p>
              </div>
            </section>

            {/* Resume */}
            {/* <section id="resume" className="mb-15 max-w-2xl text-left">
              <h2 className="text-2xl font-semibold mb-6 text-purple-700 dark:text-purple-400">Resume</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-600 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Davin Putra Fibrian</h3>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">Full-Stack Developer</span>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">📧</span>
                      <span className="text-gray-700 dark:text-gray-300">davinfibrian@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">📍</span>
                      <span className="text-gray-700 dark:text-gray-300">East Java, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">🔗</span>
                      <span className="text-gray-700 dark:text-gray-300">github.com/VinLvy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">💼</span>
                      <span className="text-gray-700 dark:text-gray-300">linkedin.com/in/davin-p-f-0b00a12b7</span>
                    </div>
                  </div>

                  <div className="border-t border-purple-200 dark:border-purple-600 pt-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Professional Summary</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Passionate Full-Stack Developer with expertise in PHP development and modern JavaScript frameworks.
                      Experienced in building responsive web applications using CodeIgniter 4, Laravel, React, and Next.js.
                      Currently exploring Web3 technologies and blockchain development. Strong problem-solving skills and
                      commitment to writing clean, maintainable code.
                    </p>
                  </div>

                  <div className="border-t border-purple-200 dark:border-purple-600 pt-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Technical Skills</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">PHP (CodeIgniter 4, Laravel)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">JavaScript (React, Next.js)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700 dark:text-gray-300">MySQL & MongoDB</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Node.js & Express</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Solidity (Web3)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-purple-200 dark:border-purple-600 pt-4">
                    <div className="flex justify-center">
                      <a
                        href="/RESUME Davin.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download Full Resume (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* Interests */}
            <section id="interests" className="mb-30 max-w-2xl text-left">
              <h2 className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400">Professional Interests & Hobbies</h2>
              <p className="text-gray-700 dark:text-gray-300">
                I maintain a keen interest in the rapidly evolving technology landscape, with particular focus on user interface and user experience design principles. I believe that creating intuitive and engaging user experiences is fundamental to successful software development. I actively support and contribute to open-source projects, recognizing the value of collaborative development communities in advancing technology.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                My professional interests extend to emerging technologies, including blockchain infrastructure, Web3 protocols, artificial intelligence applications, and cryptocurrency ecosystems. I dedicate time to studying these innovations as they represent the future of digital transformation and decentralized systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Beyond software development, I have a longstanding appreciation for the gaming industry from both consumer and developer perspectives. The intersection of creative design and technical implementation in game development serves as inspiration for my approach to software engineering. Additionally, I value cultural experiences through travel, as they provide fresh perspectives that enhance creativity and professional growth.
              </p>
            </section>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
