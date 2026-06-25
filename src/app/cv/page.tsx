"use client";

import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black font-serif py-10 px-6 print:py-0 print:px-0 print:bg-white flex flex-col items-center">
      
      {/* Actions - Hidden when printing */}
      <div className="w-full max-w-[800px] flex justify-between items-center mb-6 print:hidden">
        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-sans font-medium">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors font-sans font-medium shadow-sm"
        >
          <Download size={18} /> Save as PDF / Print
        </button>
      </div>

      {/* CV Paper */}
      <div className="bg-white w-full max-w-[800px] shadow-xl print:shadow-none p-10 md:p-12 text-[13px] leading-relaxed print:p-0">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold uppercase tracking-widest mb-1">Ahmad Asad</h1>
          <h2 className="text-xl font-bold mb-3">Full Stack Web Developer</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-sm font-semibold">
            <a href="mailto:mrahmadbutt338@gmail.com" className="hover:underline">mrahmadbutt338@gmail.com</a>
            <span className="hidden md:inline">•</span>
            <a href="https://github.com/mrahmadbutt338-stack" target="_blank" rel="noreferrer" className="hover:underline">github.com/mrahmadbutt338-stack</a>
            <span className="hidden md:inline">•</span>
            <a href="https://www.linkedin.com/in/ahmad-asad-b14606341/" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/ahmad-asad-b14606341</a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <div className="bg-gray-100 py-1 mb-3">
            <h3 className="text-center font-bold tracking-widest uppercase text-sm">Summary</h3>
          </div>
          <p className="text-justify font-serif">
            Results-driven <span className="font-bold">Full Stack Web Developer</span> with hands-on experience building responsive, user-focused web applications using <span className="font-bold">HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap, Next.js, Node.js, Express.js, and MongoDB</span>. Skilled in modern UI/UX, reusable components, responsive design, Git/GitHub workflows, and deployment-ready projects, with strong practical experience in <span className="font-bold">frontend engineering, React development</span>, and full stack project building.
          </p>
        </div>

        {/* Project Experience */}
        <div className="mb-6">
          <div className="bg-gray-100 py-1 mb-4">
            <h3 className="text-center font-bold tracking-widest uppercase text-sm">Project Experience</h3>
          </div>
          
          <div className="space-y-4">
            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-end font-bold text-sm mb-1">
                <div className="flex items-center">
                  <span className="mr-1">◆</span>
                  <span>Mirror Casa (Full Stack) — <a href="https://mirror-casa-full-web-o6ew.vercel.app" target="_blank" rel="noreferrer" className="underline font-normal text-blue-700">https://mirror-casa-full-web-o6ew.vercel.app</a></span>
                </div>
                <div className="text-right whitespace-nowrap text-xs font-normal">Next.js • Node.js • MongoDB</div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-0.5">
                <li>Built a comprehensive full-stack e-commerce application with a complete backend.</li>
                <li>Implemented database integration and robust user authentication system.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-end font-bold text-sm mb-1">
                <div className="flex items-center">
                  <span className="mr-1">◆</span>
                  <span>React Tailwind Web Project — <a href="https://react-tailwind-web.vercel.app" target="_blank" rel="noreferrer" className="underline font-normal text-blue-700">https://react-tailwind-web.vercel.app</a></span>
                </div>
                <div className="text-right whitespace-nowrap text-xs font-normal">React • Tailwind CSS</div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-0.5">
                <li>Developed a clean, modern, and responsive web application.</li>
                <li>Demonstrated advanced Tailwind CSS layouts and frontend best practices.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-end font-bold text-sm mb-1">
                <div className="flex items-center">
                  <span className="mr-1">◆</span>
                  <span>3D Dog Project — <a href="https://3d-dog-project.vercel.app" target="_blank" rel="noreferrer" className="underline font-normal text-blue-700">https://3d-dog-project.vercel.app</a></span>
                </div>
                <div className="text-right whitespace-nowrap text-xs font-normal">React Three Fiber</div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-0.5">
                <li>Created an interactive 3D dog model viewer with various animations and controls.</li>
                <li>Showcased skills in integrating 3D assets within React applications.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div>
              <div className="flex justify-between items-end font-bold text-sm mb-1">
                <div className="flex items-center">
                  <span className="mr-1">◆</span>
                  <span>CyberFriction 3D Website — <a href="https://cyber-friction-3-d-project.vercel.app" target="_blank" rel="noreferrer" className="underline font-normal text-blue-700">https://cyber-friction-3-d-project.vercel.app</a></span>
                </div>
                <div className="text-right whitespace-nowrap text-xs font-normal">Next.js • Three.js</div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-0.5">
                <li>Built a cyberpunk-themed 3D website featuring intense visual effects.</li>
                <li>Implemented advanced animations and high-performance interactive elements.</li>
              </ul>
            </div>

            {/* Project 5 */}
            <div>
              <div className="flex justify-between items-end font-bold text-sm mb-1">
                <div className="flex items-center">
                  <span className="mr-1">◆</span>
                  <span>Lucid Motor 3D Site — <a href="https://lucid-3-d-website-1zkg.vercel.app" target="_blank" rel="noreferrer" className="underline font-normal text-blue-700">https://lucid-3-d-website-1zkg.vercel.app</a></span>
                </div>
                <div className="text-right whitespace-nowrap text-xs font-normal">Three.js • React</div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-0.5">
                <li>Developed a high-performance 3D product showcase simulating an automotive experience.</li>
                <li>Featured interactive car models and smooth camera transitions.</li>
              </ul>
            </div>

            {/* Project 6 */}
            <div>
              <div className="flex justify-between items-end font-bold text-sm mb-1">
                <div className="flex items-center">
                  <span className="mr-1">◆</span>
                  <span>3D Portfolio Website — <a href="https://3-d-website-lilac-one.vercel.app" target="_blank" rel="noreferrer" className="underline font-normal text-blue-700">https://3-d-website-lilac-one.vercel.app</a></span>
                </div>
                <div className="text-right whitespace-nowrap text-xs font-normal">React • Tailwind</div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-0.5">
                <li>Designed a visually immersive 3D portfolio website showcasing modern web technologies.</li>
                <li>Focused on responsive interface design, usability, and interactive 3D elements.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <div className="bg-gray-100 py-1 mb-4">
            <h3 className="text-center font-bold tracking-widest uppercase text-sm">Education</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold"><span className="mr-1">◆</span> Professional IT Skill College</div>
                <div className="italic text-xs mt-0.5 ml-4">Certification in Full Stack Web Development</div>
              </div>
              <div className="text-right text-sm">Full Stack Web Development</div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold"><span className="mr-1">◆</span> Islamia Govt. College</div>
                <div className="italic text-xs mt-0.5 ml-4">Intermediate (ICs Comp.Sci)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="bg-gray-100 py-1 mb-4">
            <h3 className="text-center font-bold tracking-widest uppercase text-sm">Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
            {/* Left Column */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between">
                <span>React.js Development</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>JavaScript Development</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>HTML5 / CSS3</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Node.js / Express.js</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Next.js</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Portfolio Website Development</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Responsive Web Design</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>UI/UX Design Principles</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tailwind CSS / Bootstrap</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>MongoDB Basics</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Git / GitHub</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Deployment & Project Presentation</span>
                <span className="border-b border-dotted border-gray-400 flex-grow mx-2"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
