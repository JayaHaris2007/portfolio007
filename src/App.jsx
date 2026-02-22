import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* ═══════════════════════════════════════════
   PARTICLE SYSTEM — upward-drifting white dots
   ═══════════════════════════════════════════ */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    const PARTICLE_COUNT = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += Math.sin(p.y * 0.01) * 0.3;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ═══════════════════════════════════════════
   CUSTOM CURSOR — red dot + delayed blue ring
   ═══════════════════════════════════════════ */
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    window.addEventListener("mousemove", move);

    // Detect interactive elements
    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);
  if (isMobile) return null;

  return (
    <>
      {/* Red dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`rounded-full bg-sv-red transition-all duration-200 ${isHovering ? "w-5 h-5 opacity-80" : "w-3 h-3 opacity-100"}`}
          style={{ boxShadow: "0 0 10px rgba(255,0,60,0.8), 0 0 20px rgba(255,0,60,0.4)" }}
        />
      </motion.div>

      {/* Blue ring (delayed) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${isHovering ? "w-12 h-12 border-sv-blue/80" : "w-8 h-8 border-sv-blue/40"}`}
        />
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════
   SCROLL PROGRESS — red web thread on right
   ═══════════════════════════════════════════ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 right-0 w-[3px] h-full z-50 origin-top"
      style={{
        scaleY: scrollYProgress,
        background: "linear-gradient(to bottom, #ff003c, #ff003c80)",
        boxShadow: "0 0 8px rgba(255,0,60,0.6), 0 0 20px rgba(255,0,60,0.3)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
function App() {

  return (
    <div className="relative min-h-screen text-sv-text overflow-x-hidden font-sans bg-sv-bg">
      {/* ── Background Layers ── */}
      <ParticleCanvas />
      <div className="halftone-overlay" />

      {/* ── Global Effects ── */}
      <CustomCursor />
      <ScrollProgress />

      {/* ── Content ── */}
      <Navbar />
      <main>
        <AnimatePresence>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <WhyWorkWithMe />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
