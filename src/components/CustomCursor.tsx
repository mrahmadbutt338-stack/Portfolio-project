"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolledState, setIsScrolledState] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    // --- Shooting Star Trail Logic ---
    const canvas = document.getElementById("cursor-trail") as HTMLCanvasElement | null;
    let animationFrameId: number;
    let isScrolled = false;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        let particles: { x: number; y: number; vx: number; vy: number; life: number; size: number; color: string }[] = [];
        
        const resize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onScroll = () => {
          // Check if we are scrolled past 50% of the viewport height (past hero section)
          const scrolled = window.scrollY > window.innerHeight * 0.5;
          if (isScrolled !== scrolled) {
            isScrolled = scrolled;
            setIsScrolledState(scrolled);
          }
        };
        window.addEventListener("scroll", onScroll);
        onScroll();

        let lastX = 0;
        let lastY = 0;

        const onTrailMouseMove = (e: MouseEvent) => {
          const x = e.clientX;
          const y = e.clientY;
          
          if (isScrolled && (lastX !== 0 || lastY !== 0)) {
            const dx = x - lastX;
            const dy = y - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Spawn particles (reduced intensity)
            const numParticles = Math.min(Math.floor(dist / 5), 5); // cap to prevent too many particles
            const colors = ['#ffffff', '#000000', '#3b82f6']; // white, black, blue
            
            for (let i = 0; i < numParticles; i++) {
              particles.push({
                x: lastX + (dx * i) / Math.max(numParticles, 1),
                y: lastY + (dy * i) / Math.max(numParticles, 1),
                vx: (Math.random() - 0.5) * 1.0 - dx * 0.02, // shoot slightly backwards
                vy: (Math.random() - 0.5) * 1.0 - dy * 0.02,
                life: 1,
                size: Math.random() * 2 + 1, // smaller size
                color: colors[Math.floor(Math.random() * colors.length)]
              });
            }
          }
          lastX = x;
          lastY = y;
        };
        window.addEventListener("mousemove", onTrailMouseMove);

        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.04; // Fade out speed (faster)
            
            if (p.life <= 0) {
              particles.splice(i, 1);
              i--;
              continue;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0, p.size * p.life), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.life;
            // Add a subtle glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fill();
            
            // Reset global alpha and shadow for next drawing
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
          }

          animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
          window.removeEventListener("mousemove", updateMousePosition);
          window.removeEventListener("mouseover", handleMouseOver);
          window.removeEventListener("resize", resize);
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("mousemove", onTrailMouseMove);
          cancelAnimationFrame(animationFrameId);
        };
      }
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <canvas id="cursor-trail" className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9997]" />
      {!isScrolledState && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: 1,
            }}
            transition={{
              type: "tween",
              ease: "backOut",
              duration: 0.15,
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-6 h-6 border border-primary rounded-full pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 12,
              y: mousePosition.y - 12,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.4,
            }}
          />
        </>
      )}
    </>
  );
}
