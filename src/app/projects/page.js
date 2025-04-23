'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Landing Page",
    description: "A responsive landing page built with Next.js and Tailwind CSS.",
    link: "#",
    image: "/images/portfolio.jpg",
  },
  {
    title: "Point of Sale System",
    description: "A web-based point of sale system for managing sales and inventory.",
    link: "#",
    image: "/images/task.jpg",
  },
  {
    title: "Company Website",
    description: "A corporate website showcasing services and portfolio.",
    link: "#",
    image: "/images/ecommerce.jpg",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12"
    >
      <h1 className="text-4xl md:text-5xl mt-15 md:mt-30 font-bold text-white mb-12 text-center">
        My Projects
      </h1>

      <div className="flex flex-col gap-12 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-stretch bg-gray-900/50 border border-gray-700 hover:border-purple-500 rounded-2xl overflow-hidden shadow-md hover:shadow-purple-900/30 transition-all duration-300 max-w-4xl w-full mx-auto backdrop-blur-md`}
          >
            <div className="w-full md:w-1/2 h-60 md:h-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between md:w-1/2 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <Link
                href={project.link}
                className="inline-block w-fit px-5 py-2 rounded-full bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition-all duration-300"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}