import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import profilePhoto from "../assets/profile.png";

const About = () => {
    const cardRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // 3D tilt tracking
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
    const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);

    const handleMouse = (e) => {
        if (isMobile) return;
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-[2px] bg-sv-red" />
                        <span className="text-sv-red font-mono text-xs tracking-[0.3em] uppercase">
                            01 // About
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight chromatic uppercase">
                        About <span className="text-sv-blue">Me</span>
                    </h2>
                </motion.div>

                {/* 3D Tilt Card */}
                <div style={{ perspective: "1200px" }}>
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouse}
                        onMouseLeave={handleLeave}
                        style={isMobile ? {} : { rotateX, rotateY }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-sv p-1 relative overflow-hidden"
                    >
                        {/* Animated border glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-sv-red/20 via-transparent to-sv-blue/20 opacity-60" />

                        <div className="bg-sv-bg/90 backdrop-blur-sm p-8 md:p-12 relative z-10">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                {/* Profile Image */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full md:w-1/3 flex-shrink-0"
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-br from-sv-red to-sv-blue opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500" />
                                        <img
                                            src={profilePhoto}
                                            alt="Jaya Haris"
                                            className="relative w-full aspect-[3/4] object-cover border border-white/10"
                                        />
                                        {/* Scan line */}
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <motion.div
                                                animate={{ top: ["0%", "100%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute left-0 w-full h-[2px] bg-sv-red/50 shadow-[0_0_10px_rgba(255,0,60,0.5)]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bio */}
                                <div className="flex-1 space-y-6">
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        <span className="text-sv-red font-mono mr-2">&gt;</span>
                                        It started with curiosity — pulling apart websites to understand
                                        their anatomy. That curiosity evolved into a deep command of the{" "}
                                        <span className="text-sv-blue font-semibold">MERN stack</span>,
                                        building everything from real-time apps to AI-powered platforms.
                                    </p>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        <span className="text-sv-blue font-mono mr-2">&gt;</span>
                                        Today, I architect full-stack systems that blend performance with
                                        intelligence. From{" "}
                                        <span className="text-sv-red font-semibold">AI integration</span>{" "}
                                        to pixel-perfect interfaces — every project is a mission to push
                                        what&apos;s possible.
                                    </p>

                                    {/* Stats */}
                                    <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                                        {[
                                            { label: "Status", value: "Available", dot: true },
                                            { label: "Stack", value: "MERN + AI" },
                                            { label: "Location", value: "Remote" },
                                        ].map((stat) => (
                                            <div key={stat.label}>
                                                <p className="text-sv-muted font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
                                                    {stat.label}
                                                </p>
                                                <p className="text-white font-bold flex items-center gap-2 text-sm">
                                                    {stat.dot && (
                                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                    )}
                                                    {stat.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
