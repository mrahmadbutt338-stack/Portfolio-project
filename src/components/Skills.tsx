"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";

const categorizedSkills = {
  Frontend: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌊" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "API Design", icon: "🔌" },
  ],
  Tools: [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "Vercel", icon: "🚀" },
    { name: "Shell", icon: "💻" },
    { name: "Automation", icon: "⚙️" },
  ],
};

const allSkills = Object.values(categorizedSkills).flat();

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            My Tech <span className="text-primary">Stack</span>
            <span className="text-white/20 font-mono text-xl md:text-2xl ml-4">.02</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Categorized Grid */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {Object.entries(categorizedSkills).map(([category, items]) => (
              <div key={category}>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-xl font-display font-semibold mb-6 text-secondary flex items-center gap-4"
                >
                  {category}
                  <div className="h-[1px] bg-white/10 flex-grow max-w-[100px]"></div>
                </motion.h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`grid gap-2 md:gap-3 ${category === 'Frontend' ? 'grid-cols-4' : category === 'Backend' ? 'grid-cols-4' : 'grid-cols-3'}`}
                >
                  {items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group bg-[#111116] border border-white/5 hover:border-primary/50 rounded-xl p-2.5 md:p-3 flex flex-col items-center justify-center gap-2 transition-colors relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-xl md:text-2xl filter drop-shadow-sm">{skill.icon}</span>
                      <span className="font-medium text-[10px] md:text-[11px] text-gray-300 group-hover:text-primary transition-colors text-center whitespace-nowrap overflow-hidden text-ellipsis w-full px-1">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side: The Interactive Stack */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-4 text-xs tracking-widest font-mono text-primary/70 w-full max-w-[340px]">
              <span className="flex-1 h-[1px] bg-primary/20"></span>
              DRAG & THROW
              <span className="flex-1 h-[1px] bg-primary/20"></span>
            </div>
            
            {/* Narrow portrait box to match the screenshot */}
            <div className="relative h-auto min-h-[400px] w-full max-w-[320px] bg-[#0d0d12] rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden p-4 md:p-5 flex flex-col justify-center">
              
              {/* Organized 8x2 Grid */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 relative z-10 w-full">
                {allSkills.map((skill, index) => {
                  const borderColors = [
                    "rgba(168, 85, 247, 0.4)", // purple
                    "rgba(59, 130, 246, 0.4)", // blue
                    "rgba(16, 185, 129, 0.4)", // green
                    "rgba(245, 158, 11, 0.4)", // yellow
                    "rgba(236, 72, 153, 0.4)", // pink
                    "rgba(6, 182, 212, 0.4)", // cyan
                    "rgba(239, 68, 68, 0.4)", // red
                    "rgba(249, 115, 22, 0.4)"  // orange
                  ];
                  const color = borderColors[index % borderColors.length];
                  
                  // Even items move slightly left, odd items move slightly right initially
                  const xFloat = index % 2 === 0 ? [-5, 5, -5] : [5, -5, 5];
                  const duration = 1.2 + (index % 3) * 0.4;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="w-full"
                    >
                      <motion.div
                        animate={{ x: xFloat }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ borderColor: color }}
                        whileHover={{ scale: 1.05, zIndex: 10, x: 0 }}
                        className="px-2 py-1.5 md:py-2 rounded-xl bg-[#13131a]/95 border-b-2 text-white font-mono text-[10px] md:text-xs shadow-md flex items-center justify-center gap-1.5 backdrop-blur-md w-full transition-transform hover:bg-[#1a1a24]"
                      >
                        <span className="text-sm">{skill.icon}</span>
                        <span className="font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">{skill.name}</span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
