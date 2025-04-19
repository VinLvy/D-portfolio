'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A to-do list application with project organization and local storage support.",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "An online store built with Next.js, integrating payment and authentication.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">My Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-700 hover:border-purple-500 p-6 rounded-2xl shadow-md hover:shadow-purple-900/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <Link
              href={project.link}
              className="inline-flex items-center gap-1 text-purple-400 font-medium hover:underline hover:gap-2 transition-all duration-300"
            >
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}