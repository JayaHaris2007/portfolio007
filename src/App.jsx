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
import LaunchScreen from "./components/LaunchScreen";
import spiderImage from "./assets/rmzqat6p2jc31 copy.png";

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
   SCROLLING SPIDER — follows scroll in background
   ═══════════════════════════════════════════ */
function ScrollingSpider() {
  const { scrollYProgress } = useScroll();
  const [isGlitching, setIsGlitching] = useState(false);

  // Spider moves down and subtly rotates as user scrolls
  const yPostion = useSpring(useMotionValue(0), { damping: 50, stiffness: 100 });
  const rotation = useSpring(useMotionValue(0), { damping: 50, stiffness: 100 });

  useEffect(() => {
    let scrollTimeout;

    return scrollYProgress.onChange((latest) => {
      // Move from top to bottom of screen (in vh roughly), capped at 60vh to prevent dropping out of view
      yPostion.set(latest * (window.innerHeight * 0.6));
      // Slight sway
      rotation.set(Math.sin(latest * Math.PI * 4) * 15);

      // Trigger glitch whenever scrolling happens
      setIsGlitching(true);

      // Clear the glitch shortly after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsGlitching(false);
      }, 150); // Glitch turns off 150ms after scroll stops
    });
  }, [scrollYProgress, yPostion, rotation]);

  return (
    <>
      <svg className="hidden">
        <defs>
          <filter id="scroll-glitch">
            <feOffset dx={Math.random() > 0.5 ? 6 : -6} dy={Math.random() > 0.5 ? 3 : -3} in="SourceGraphic" result="red-shift" />
            <feOffset dx={Math.random() > 0.5 ? -6 : 6} dy={Math.random() > 0.5 ? -3 : 3} in="SourceGraphic" result="blue-shift" />
            <feColorMatrix in="red-shift" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
            <feColorMatrix in="blue-shift" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
            <feBlend in="red" in2="blue" mode="screen" result="color-shift" />
            <feBlend in="SourceGraphic" in2="color-shift" mode="screen" />
          </filter>
        </defs>
      </svg>
      <motion.div
        className="fixed top-20 left-10 md:left-20 z-0 pointer-events-none opacity-20"
        style={{
          y: yPostion,
          rotate: rotation,
          filter: isGlitching ? 'url(#scroll-glitch)' : 'none',
          scale: isGlitching ? 1.05 : 1
        }}
      >
        <img
          src={spiderImage}
          alt="Background Spider"
          className="w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
        {/* Thread connecting to top */}
        <div className="absolute bottom-full left-1/2 -translateX-1/2 w-[1px] h-[100vh] bg-white opacity-40 shadow-[0_0_5px_white]" />
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
function App() {
  const [showLaunch, setShowLaunch] = useState(true);

  return (
    <div className="relative min-h-screen text-sv-text overflow-x-hidden font-sans bg-sv-bg">
      <AnimatePresence mode="wait">
        {showLaunch && <LaunchScreen onComplete={() => setShowLaunch(false)} />}
      </AnimatePresence>

      {/* ── Background Layers ── */}
      <ParticleCanvas />
      <div className="halftone-overlay" />
      <ScrollingSpider />

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
