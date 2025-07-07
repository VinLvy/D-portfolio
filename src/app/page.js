'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from 'react';
import BlurText from '../components/BlurText';
import SpotlightCard from "../components/SpotlightCard";
import GlareHover from "../components/GlareHover";

export default function Home() {
  const techStackRef = useRef(null);
  const isInView = useInView(techStackRef, { once: true });

  const [calendarSize, setCalendarSize] = useState({
    blockSize: 10,
    fontSize: 14,
  });


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center mt-12 md:mt-24">
        {/* Foto Profil dengan Link ke About */}
        <div className="flex justify-center">
          <Link href="/about">
            <Image
              className="cursor-pointer rounded-full shadow-2xl border-4 border-purple-500 p-1 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              src="/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>

        {/* Nama dan Deskripsi */}
        <div className="text-4xl font-bold mb-4 mt-4 flex flex-wrap justify-center gap-2">
          <BlurText
            text="Hi, I'm"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <BlurText
            text="Davin"
            delay={250}
            animateBy="letters"
            direction="top"
            className="text-purple-400"
          />
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl md:max-w-2xl text-center mx-auto">
          <span className="text-purple-400 font-semibold">Full-Stack Developer</span> — passionate about building modern web applications. Experienced in PHP programming and currently diving deeper into JavaScript development. I’m also highly interested in decentralized technologies and actively exploring the world of Web3.
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
          <Link
            href="https://github.com/VinLvy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 flex items-center gap-2 rounded-full bg-purple-800 text-white font-medium transition duration-300 transform hover:bg-purple-900 hover:scale-105 hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.427 2.865 8.186 6.839 9.515.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.907-.621.068-.609.068-.609 1.003.07 1.53 1.031 1.53 1.031.89 1.525 2.335 1.085 2.902.83.09-.647.35-1.085.635-1.335-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.097-2.65 0 0 .84-.268 2.75 1.026A9.574 9.574 0 0 1 12 6.845c.85.004 1.705.115 2.503.337 1.91-1.294 2.75-1.026 2.75-1.026.543 1.378.2 2.396.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.696-4.564 4.945.36.31.679.919.679 1.852 0 1.337-.012 2.419-.012 2.748 0 .268.18.579.688.482A10.026 10.026 0 0 0 22 12.021C22 6.486 17.523 2 12 2z" />
            </svg>
            My GitHub
          </Link>
        </div>

        {/* GitHub Contributions */}
        {/* <div className="mt-24 max-w-4xl mx-auto px-4 hidden md:block">
          <div className="bg-white/50 dark:bg-gray-900/50 rounded-2xl shadow-lg p-6 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-gray-900 dark:text-white">
              GitHub Contributions
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-6 md:mb-8">
              Here’s a snapshot of my GitHub activity in the past year.
            </p>
            <div className="overflow-x-auto">
              <div className="w-full max-w-3xl mx-auto border rounded-md shadow border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800">
                <GitHubCalendar style={{ width: '100%' }}
                  username="VinLvy"
                  blockSize={calendarSize.blockSize}
                  blockMargin={4}
                  fontSize={calendarSize.fontSize}
                  color="#16a34a"
                  theme={{
                    light: ['#e5e7eb', '#a7f3d0', '#34d399', '#10b981', '#047857'],
                    dark: ['#374151', '#4ade80', '#22c55e', '#16a34a', '#15803d']
                  }}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Tech Stack Section */}
        <div ref={techStackRef} className="mt-24">
          <h2 className="text-4xl font-semibold mb-5">Tech Stack</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-8">
            These are some of the technologies I use to build applications and websites.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-200 justify-center">
            {[
              { name: "HTML", icon: "/icons/html.svg", stars: 5 },
              { name: "CSS", icon: "/icons/css.svg", stars: 5 },
              { name: "Tailwind CSS", icon: "/icons/tailwind.svg", stars: 4 },
              { name: "Golang", icon: "/icons/golang.svg", stars: 2 },
              { name: "JavaScript", icon: "/icons/javascript.png", stars: 4 },
              { name: "PHP", icon: "/icons/php.svg", stars: 5 },
              { name: "MySQL", icon: "/icons/mysql.svg", stars: 5 },
              { name: "CodeIgniter 4", icon: "/icons/codeigniter.svg", stars: 5 },
              { name: "Laravel", icon: "/icons/laravel.svg", stars: 4 },
              {
                name: "Next.js", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="50" height="50">
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
                ), stars: 4
              },
              {name: "React", icon: "/icons/react.png", stars: 3 },
              { name: "Node.js", icon: "/icons/Node.js.svg", stars: 3 },
              { name: "Express.js", icon: "/icons/express-js.svg", stars: 4 },
              { name: "MongoDB", icon: "/icons/mongo-db.png", stars: 4 },
              { name: "Solidity", icon: "/icons/Solidity.svg", stars: 3 },
            ].map((tech, index) => (
              <GlareHover
                key={tech.name}
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <SpotlightCard
                  spotlightColor="rgba(136, 0, 255, 0.52)"
                  className="flex flex-col items-center p-4 w-full sm:w-40 h-48"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-3">
                    {typeof tech.icon === "string" ? (
                      <Image src={tech.icon} alt={tech.name} width={50} height={50} className="object-contain" />
                    ) : (
                      tech.icon
                    )}
                  </div>
                  <p className="text-md font-semibold text-center">{tech.name}</p>
                  <p className="text-yellow-400 text-2xl">{"★".repeat(tech.stars)}</p>
                </SpotlightCard>
              </GlareHover>

            ))}
          </div>
        </div>

        {/* How to Contact Me */}
        <div className="mt-24 max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-semibold mb-5">How to Contact Me</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-8">
            I&apos;m always open to connect and collaborate. Whether it&apos;s about tech, design, or just a friendly chat — feel free to reach out!
          </p>
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-6 dark:text-gray-300">
            {[
              { name: "Instagram", icon: "bi bi-instagram", link: "https://instagram.com/davin.fbrn" },
              { name: "Facebook", icon: "bi bi-facebook", link: "https://facebook.com/davin.fbrn" },
              { name: "GitHub", icon: "bi bi-github", link: "https://github.com/VinLvy" },
              { name: "LinkedIn", icon: "bi bi-linkedin", link: "https://www.linkedin.com/in/davin-p-f-0b00a12b7/" },
              { name: "Gmail", icon: "bi bi-envelope-fill", link: "mailto:davinfibrian@gmail.com" },
            ].map((contact, index) => (
              <Link
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 group flex flex-col items-center text-2xl transition-all duration-300 hover:text-purple-700 dark:hover:text-purple-400"
              >
                <i className={`${contact.icon} text-4xl mb-1 group-hover:scale-110 group-hover:drop-shadow-md transition-transform duration-300`}></i>
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-400 text-center">{contact.name}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}