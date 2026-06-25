"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Palette } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  
  const themes = ['light', 'dark'];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = links.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "py-4 bg-background/70 backdrop-blur-md border-b border-surface" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-primary/30 transition-all group-hover:scale-105 duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-2xl font-serif italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary drop-shadow-lg relative z-10">
              AA
            </span>
          </div>

        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-xs uppercase tracking-widest font-bold transition-colors hover:text-primary ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-text-muted"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"
                />
              )}
            </a>
          ))}
          

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-main"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-[90]"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-text-main hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
