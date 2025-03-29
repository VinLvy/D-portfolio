import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center mt-32 ">
      {/* Foto Profil */}
      <Image
        className="rounded-full shadow-lg mb-6"
        src="/profile.jpg"
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

      {/* CTA Buttons */}
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

      {/* Skills Section */}
      <div className="mt-24">
        <h2 className="text-4xl font-semibold mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-300 justify-center">
          {[  
            { name: "HTML", icon: "/icons/html.svg", stars: 5 },
            { name: "CSS", icon: "/icons/css.svg", stars: 5 },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg", stars: 4 },
            { name: "Golang", icon: "/icons/golang.svg", stars: 2 },
            { name: "JavaScript", icon: "/icons/javascript.png", stars: 5 },
            { name: "PHP", icon: "/icons/php.svg", stars: 5 },
            { name: "MySQL", icon: "/icons/mysql.svg", stars: 5 },
            { name: "CodeIgniter 4", icon: "/icons/codeigniter.svg", stars: 5 },
            { name: "Laravel", icon: "/icons/laravel.svg", stars: 4 },
            { name: "Next.js", icon: (
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
            ), stars: 4 },
            
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-900/50 backdrop-blur-lg bg-opacity-50 p-6 rounded-lg w-40 h-48">
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                {typeof tech.icon === "string" ? (
                  <Image src={tech.icon} alt={tech.name} width={50} height={50} className="object-contain" />
                ) : (
                  tech.icon
                )}
              </div>
              <p className="text-lg font-medium text-center">{tech.name}</p>
              <p className="text-yellow-400 text-2xl">{"★".repeat(tech.stars) + "☆".repeat(5 - tech.stars)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/projects/project-1" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-sm text-gray-400">A full-stack web application built with Next.js.</p>
          </Link>
          <Link href="/projects/project-2" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-sm text-gray-400">An open-source UI component library.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}