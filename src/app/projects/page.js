import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-left">
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <Link href={project.link} className="text-blue-400 hover:underline mt-4 inline-block">
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}