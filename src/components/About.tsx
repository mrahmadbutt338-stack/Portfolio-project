"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 flex items-center justify-center">
            <span className="text-primary font-mono text-2xl mr-4">01.</span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {"About Me".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, display: "none" },
                    visible: { opacity: 1, display: "inline-block" }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="h-[2px] bg-primary/50 mt-4 rounded-full"
          ></motion.div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 md:px-8 font-light">
              Hello! My name is Ahmad and I enjoy creating things that live on the internet. 
              My interest in web development started back when I built my first HTML page and realized 
              the power of bringing ideas to life through code.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 md:px-8 font-light">
              Fast-forward to today, I&apos;m a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> with a strong focus on building 
              accessible, inclusive products and digital experiences. I thrive on creating intuitive architectures, 
              writing clean code, and constantly pushing my boundaries to learn new technologies.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="group bg-[#0f0f13] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <Code className="text-primary mb-4 group-hover:scale-110 transition-transform" size={36} />
                <span className="text-4xl font-display font-bold text-white mb-2">6+</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest font-mono">Projects</span>
              </div>
              <div className="group bg-[#0f0f13] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <Coffee className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={36} />
                <span className="text-3xl font-display font-bold text-white mb-2 whitespace-nowrap">2026</span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-mono whitespace-nowrap">And Continue</span>
              </div>
              <div className="group bg-[#0f0f13] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <Globe className="text-primary mb-4 group-hover:scale-110 transition-transform" size={36} />
                <span className="text-4xl font-display font-bold text-white mb-2">MERN</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest font-mono">Stack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
