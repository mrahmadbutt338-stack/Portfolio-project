"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Mail, Download } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="h-8 md:h-12 flex justify-center md:justify-start items-center">
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
          }
        }}
        className="text-lg md:text-2xl font-display font-medium text-[#ffb800] flex items-center"
      >
        {texts[index].split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, display: "none" },
              visible: { opacity: 1, display: "inline-block" }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-5 md:h-7 bg-[#ffb800] ml-1"
        />
      </motion.div>
    </div>
  );
};

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Glowing Cyan Triangle-ish Box */}
      <motion.div
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[15%] w-24 h-24 border-2 border-secondary/40 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.3)] backdrop-blur-sm mix-blend-screen"
      />
      {/* Glowing Purple Circle */}
      <motion.div
        animate={{
          y: [0, 80, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[20%] w-32 h-32 border border-primary/50 rounded-full shadow-[0_0_40px_rgba(139,92,246,0.4)] backdrop-blur-md mix-blend-screen bg-primary/5"
      />
      {/* Glowing Cyan Square */}
      <motion.div
        animate={{
          y: [0, -80, 0],
          rotate: [0, -90, -180],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[10%] w-16 h-16 bg-secondary/10 border border-secondary/50 shadow-[0_0_20px_rgba(0,229,255,0.6)] mix-blend-screen"
      />
      {/* Small floating glowing dot */}
      <motion.div
        animate={{ y: [0, -60, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[30%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)] mix-blend-screen"
      />
      {/* Diamond shape */}
      <motion.div
        animate={{ y: [0, -150, 0], x: [0, -50, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] left-[5%] w-8 h-8 border-2 border-secondary/60 rotate-45 shadow-[0_0_20px_rgba(0,229,255,0.5)] mix-blend-screen"
      />
      {/* Large faint purple blur moving */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[100px] mix-blend-screen"
      />
      {/* NEW: Additional Moving Parts */}
      <motion.div
        animate={{ y: [0, 120, 0], x: [0, 80, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[50%] right-[30%] w-20 h-20 border border-primary/40 rotate-12 shadow-[0_0_25px_rgba(139,92,246,0.5)] mix-blend-screen"
      />
      <motion.div
        animate={{ y: [0, -90, 0], scale: [1, 1.5, 1], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[70%] right-[5%] w-12 h-12 bg-secondary/20 rounded-full blur-[4px] mix-blend-screen"
      />
      <motion.div
        animate={{ x: [0, -150, 0], y: [0, 40, 0], rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[40%] w-10 h-10 border-[3px] border-secondary/30 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.4)] mix-blend-screen"
      />
    </div>
  );
};

export function Hero() {
  const name = "AHMAD ASAD".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* 3D Futuristic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedShapes />
        <Image
          src="/bg.png"
          alt="3D Futuristic Background"
          fill
          priority
          className="object-cover opacity-60 mix-blend-screen"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-6xl mx-auto md:mx-0 pt-10 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="text-sm md:text-base text-primary font-mono tracking-widest mb-6 uppercase font-bold"
          >
            Creative Developer
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-display font-extrabold tracking-tight mb-6 flex flex-wrap justify-center md:justify-start text-white uppercase">
            {name.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.2, 0.65, 0.3, 0.9],
                  delay: 2.5 + index * 0.05,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <div className="mt-4 mb-12">
             <Typewriter texts={["MERN Stack Developer", "Interactive Web Experiences", "Full Stack Engineer"]} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-[#A1A1AA] text-lg md:text-2xl max-w-2xl leading-relaxed font-light"
          >
            I build fast, scalable, and visually stunning web experiences. Specializing in modern React, Next.js, and Node.js ecosystems to create products that people love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-10"
          >
            <a
              href="#projects"
              className="group relative px-5 py-2.5 bg-white text-black rounded-full text-xs font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,0.9)]"></div>
              <span className="relative z-10 flex items-center gap-2">View Selected Works <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" /></span>
            </a>
            <a
              href="/cv"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-transparent text-white rounded-full text-xs font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 1 }}
            className="flex items-center gap-6 mt-8"
          >
            <a href="https://github.com/mrahmadbutt338-stack" target="_blank" rel="noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
              <GithubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-asad-b14606341/" target="_blank" rel="noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
              <LinkedinIcon size={22} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mrahmadbutt338@gmail.com" target="_blank" rel="noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
