import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-scroll";

/* ── SVG Web Line ── */
const WebLine = () => (
    <svg
        className="absolute top-0 right-16 md:right-32 w-[2px] h-40 z-0 opacity-40"
        viewBox="0 0 2 160"
        fill="none"
    >
        <motion.line
            x1="1" y1="0" x2="1" y2="160"
            stroke="#ff003c"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
        />
    </svg>
);

const Hero = () => {
    /* Spring-based "pull" toward mouse */
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 40, stiffness: 100 });
    const springY = useSpring(y, { damping: 40, stiffness: 100 });

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * 0.02);
        y.set((e.clientY - cy) * 0.02);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <WebLine />

            <motion.div
                ref={containerRef}
                style={{ x: springX, y: springY }}
                className="relative z-10 text-center max-w-5xl mx-auto"
            >
                {/* Floating main content */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.1] tracking-tight mb-6 chromatic uppercase"
                    >
                        Crafting Intelligent
                        <br />
                        Digital Experiences
                        <br />
                        <span className="text-sv-red text-glow-red">Full-Stack</span>{" "}
                        <span className="text-sv-blue text-glow-blue">Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sv-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-mono tracking-wide"
                    >
                        Building Fast, Scalable &amp; Intelligent Web Systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        {/* Defy Gravity — Red pulse CTA */}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="relative px-10 py-4 bg-sv-red text-white font-bold tracking-[0.2em] uppercase text-sm spider-pulse hover:scale-105 transition-transform duration-300"
                        >
                            Start a Project
                        </Link>

                        {/* View Projects — Blue ghost CTA */}
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="relative px-10 py-4 border border-sv-blue text-sv-blue font-bold tracking-[0.2em] uppercase text-sm glitch-hover hover:bg-sv-blue/10 transition-all duration-300"
                        >
                            View Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sv-muted text-[10px] font-mono tracking-[0.4em] uppercase">
                        Scroll
                    </span>
                    <div className="w-px h-10 bg-gradient-to-b from-sv-red to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
