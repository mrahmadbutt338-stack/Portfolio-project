"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Image from "next/image";

const projects = [
  {
    title: "Mirror Casa (Full Stack)",
    description: "A comprehensive full-stack e-commerce application with a complete backend and user authentication.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "https://mirror-casa-full-web-o6ew.vercel.app",
    linkedinUrl: "https://www.linkedin.com/posts/ahmad-asad-b14606341_fullstackdevelopment-reactjs-nextjs-ugcPost-7474615919219044352-Gt8q/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWyhsAB4nFYcbXbFEPMVBvKbkosGikfmZU",
    githubUrl: "https://github.com/mrahmadbutt338-stack/Mirror-Casa-full-web.git",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "React Tailwind Web Project",
    description: "A clean, modern, and responsive web application built to demonstrate advanced Tailwind CSS layouts.",
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://react-tailwind-web.vercel.app",
    linkedinUrl: "https://www.linkedin.com/posts/ahmad-asad-b14606341_reactjs-tailwindcss-frontenddevelopment-ugcPost-7452014909988634625-Nkxv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWyhsAB4nFYcbXbFEPMVBvKbkosGikfmZU",
    githubUrl: "https://github.com/mrahmadbutt338-stack/react-tailwind-web.git",
    imageUrl: "/projects/1.png",
  },
  {
    title: "3D Dog Project",
    description: "An interactive 3D dog model viewer with various animations and controls.",
    tags: ["React Three Fiber", "React", "CSS"],
    liveUrl: "https://3d-dog-project.vercel.app",
    linkedinUrl: "https://www.linkedin.com/posts/ahmad-asad-b14606341_reactjs-frontenddevelopment-webdevelopment-ugcPost-7449447625998712832-_RVy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWyhsAB4nFYcbXbFEPMVBvKbkosGikfmZU",
    githubUrl: "https://github.com/mrahmadbutt338-stack/3d-dog-project.git",
    imageUrl: "/projects/2.png",
  },
  {
    title: "CyberFriction 3D Website",
    description: "A cyberpunk-themed 3D website with intense visual effects and advanced animations.",
    tags: ["Next.js", "Three.js", "Framer Motion"],
    liveUrl: "https://cyber-friction-3-d-project.vercel.app",
    linkedinUrl: "https://www.linkedin.com/posts/ahmad-asad-b14606341_frontenddevelopment-webdevelopment-html-ugcPost-7434251777132290048-6Ut8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWyhsAB4nFYcbXbFEPMVBvKbkosGikfmZU",
    githubUrl: "https://github.com/mrahmadbutt338-stack/Cyber-Friction-3D-Project.git",
    imageUrl: "/projects/3.png",
  },
  {
    title: "Lucid Motor 3D Site",
    description: "A high-performance 3D product showcase for Lucid Motors, featuring interactive car models.",
    tags: ["Three.js", "React", "GSAP"],
    liveUrl: "https://lucid-3-d-website-1zkg.vercel.app",
    linkedinUrl: "https://www.linkedin.com/posts/ahmad-asad-b14606341_excited-to-share-my-first-complete-3d-ugcPost-7428827202810507265-k63l/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWyhsAB4nFYcbXbFEPMVBvKbkosGikfmZU",
    githubUrl: "https://github.com/mrahmadbutt338-stack/Lucid-3D-website1",
    imageUrl: "/projects/4.png",
  },
  {
    title: "3D Portfolio Website",
    description: "A visually immersive 3D portfolio website showcasing modern web technologies and interactive 3D elements.",
    tags: ["React", "Three.js", "Tailwind CSS"],
    liveUrl: "https://3-d-website-lilac-one.vercel.app",
    linkedinUrl: "https://www.linkedin.com/posts/ahmad-asad-b14606341_firstproject-webdevelopment-frontenddeveloper-ugcPost-7406718102266281985-kOPb/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWyhsAB4nFYcbXbFEPMVBvKbkosGikfmZU",
    githubUrl: "https://github.com/mrahmadbutt338-stack/3-D-Website-.git",
    imageUrl: "/projects/5.png",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row items-baseline gap-6"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-text-main">
            Selected Works
          </h2>
          <span className="text-xl md:text-2xl font-mono text-primary font-medium">/ 03</span>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="group relative flex flex-col p-[1px] rounded-2xl bg-[#0f0f13] h-full overflow-hidden shadow-lg border border-white/10 hover:border-primary/50 transition-colors duration-500 max-w-[420px] w-full"
            >
              {/* Subtle Glowing Border Animation */}
              <div 
                className="absolute -inset-[100%] z-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--color-primary)_360deg)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                style={{ animation: 'spin 4s linear infinite' }}
              />
              <div className="absolute inset-[1px] bg-[#0A0A0C] rounded-2xl z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full bg-[#0A0A0C] rounded-2xl overflow-hidden">
                
                {/* Image Container */}
                <div className="relative w-full aspect-video bg-black/60 overflow-hidden flex-shrink-0 group/img">
                  <Image
                    src={project.title.includes("Mirror Casa") ? "/projects/mirror-casa.png" : project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain p-2 transform scale-100 group-hover/img:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.65,0.3,0.9)]"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Optional Tag Badge on Image */}
                  {project.tags.length > 0 && (
                    <div className="absolute bottom-2 left-2 bg-[#1e103c]/90 backdrop-blur-md border border-purple-500/20 text-purple-100 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                      {project.tags[0]}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5">
                  {/* Title Row with Hover Icons */}
                  <div className="flex justify-between items-start mb-2 gap-4 h-8">
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-primary transition-colors duration-500 tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    
                    {/* LinkedIn and GitHub icons sliding in on hover */}
                    <div className="flex items-center gap-2 flex-shrink-0 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      {project.linkedinUrl !== "#" && (
                        <a
                          href={project.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-[#0077B5] hover:scale-125 hover:-translate-y-1 transition-all duration-300 p-1"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon size={18} />
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300 p-1"
                          aria-label="GitHub"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 text-[13px] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/10 transition-colors hover:bg-white/10 hover:border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  <div className="pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/demo flex items-center justify-center gap-2 px-3 py-2 bg-[#1a1a24] hover:bg-primary text-gray-200 hover:text-black rounded-lg transition-all duration-300 font-semibold text-xs border border-white/5 hover:border-primary w-2/3 max-w-[150px]"
                    >
                      <Play size={12} className="fill-current group-hover/demo:animate-pulse" /> 
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

