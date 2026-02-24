import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Helper to generate a more organic/realistic spider web path
const generateRealisticWeb = () => {
    const lines = 8; // Anchor lines radiating out
    const rings = 6; // Spiral/concentric threads
    const cx = 50, cy = 50;

    let path = "";

    // 1. Draw straight anchor lines radiating from center
    for (let i = 0; i < lines; i++) {
        const angle = (Math.PI * 2 * i) / lines;
        const x2 = cx + Math.cos(angle) * 50;
        const y2 = cy + Math.sin(angle) * 50;
        path += `M ${cx} ${cy} L ${x2} ${y2} `;
    }

    // 2. Draw sagging spiral threads connecting the anchor lines
    for (let r = 1; r <= rings; r++) {
        // Radius increases faster towards the outer edge for perspective
        const radius = Math.pow(r / rings, 1.2) * 45;

        for (let i = 0; i < lines; i++) {
            const angle1 = (Math.PI * 2 * i) / lines;
            const angle2 = (Math.PI * 2 * (i + 1)) / lines;

            const x1 = cx + Math.cos(angle1) * radius;
            const y1 = cy + Math.sin(angle1) * radius;
            const x2 = cx + Math.cos(angle2) * radius;
            const y2 = cy + Math.sin(angle2) * radius;

            // Curve the thread significantly inward towards the center to simulate heavy gravity/sagging silk
            const midAngle = (angle1 + angle2) / 2;
            const sagRadius = radius * 0.70; // Pull the control point inward by 30% for a dramatic sag
            const qx = cx + Math.cos(midAngle) * sagRadius;
            const qy = cy + Math.sin(midAngle) * sagRadius;

            if (i === 0) {
                path += `M ${x1} ${y1} `;
            }
            // Quadratic Bezier curve to the next point
            path += `Q ${qx} ${qy} ${x2} ${y2} `;
        }
    }

    return path;
};

const ParallaxWeb = ({ delay, scale, opacity, duration, rotate }) => (
    <motion.svg
        initial={{ scale: scale * 0.2, opacity: 0, rotate: rotate - 45 }}
        animate={{ scale, opacity, rotate }}
        exit={{ scale: scale * 2.5, opacity: 0, rotate: rotate + 45, transition: { duration: 0.8, ease: "easeIn" } }}
        transition={{ duration, delay, ease: "easeInOut" }}
        className="absolute m-auto top-[calc(50%-300px)] left-[calc(50%-300px)] w-[600px] h-[600px] text-sv-red mix-blend-screen pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d={generateRealisticWeb()} />
    </motion.svg>
);

import logoImage from "../assets/rmzqat6p2jc31 copy.png";

const SpiderLogo = () => (
    <motion.img
        src={logoImage}
        alt="Spider Logo"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
    />
);

const LaunchScreen = ({ onComplete }) => {
    const [isSkipping, setIsSkipping] = React.useState(false);
    const [glitching, setGlitching] = React.useState(false);

    useEffect(() => {
        // Trigger the Spidey Sense glitch just before the animation completes
        const glitchTimer = setTimeout(() => {
            if (!isSkipping) setGlitching(true);
        }, 2200); // Glitch starts deeply at 2.2s

        const timer = setTimeout(() => {
            if (!isSkipping && onComplete) onComplete();
        }, 3200); // Wait for glitch to finish before fully removing curtain

        return () => {
            clearTimeout(glitchTimer);
            clearTimeout(timer);
        };
    }, [onComplete, isSkipping]);

    const handleSkip = () => {
        setIsSkipping(true);
        if (onComplete) onComplete();
    };

    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* SVG Filter for Glitch/Chromatic Aberration */}
            <svg className="hidden">
                <defs>
                    <filter id="glitch">
                        <feOffset dx="4" dy="-2" in="SourceGraphic" result="red-shift" />
                        <feOffset dx="-4" dy="2" in="SourceGraphic" result="blue-shift" />
                        <feColorMatrix in="red-shift" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
                        <feColorMatrix in="blue-shift" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
                        <feBlend in="red" in2="blue" mode="screen" result="color-shift" />
                        <feBlend in="SourceGraphic" in2="color-shift" mode="screen" />
                    </filter>
                </defs>
            </svg>

            {/* The Background Layer that Glitches out */}
            <motion.div
                className="absolute inset-0 bg-[#0a0f18] z-10"
                initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                animate={
                    glitching
                        ? {
                            opacity: [1, 0.8, 1, 0.4, 0],
                            scale: [1, 1.05, 0.95, 1.2, 2],
                            filter: ["blur(0px)", "blur(4px)", "blur(0px)", "blur(15px)", "blur(20px)"],
                            backgroundColor: ["#0a0f18", "#ff003c20", "#00baff20", "#0a0f18", "transparent"]
                        }
                        : { opacity: 1 }
                }
                exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
                transition={
                    glitching
                        ? { duration: 0.8, ease: "easeOut", times: [0, 0.2, 0.4, 0.7, 1] }
                        : { duration: 0.8, ease: "easeInOut" }
                }
            />

            {/* Parallax elements inside the transition */}
            <div
                className={`relative z-20 flex flex-col items-center justify-center w-full h-full pointer-events-none ${glitching ? 'glitch-active' : ''}`}
                style={{ filter: glitching ? 'url(#glitch)' : 'none' }}
            >
                {/* Single majestic background web */}
                <ParallaxWeb delay={0.1} scale={1.2} opacity={0.6} duration={1.5} rotate={0} />

                {/* The Spider hanging thread */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "45vh" }}
                    exit={{ height: "150vh" }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="absolute top-0 w-[1px] bg-white opacity-60 shadow-[0_0_10px_white]"
                    style={{ left: "50%", translateX: "-50%" }}
                />

                {/* The Spider & Text Container */}
                <motion.div
                    className="absolute top-[45vh] flex flex-col items-center cursor-pointer pointer-events-auto"
                    exit={{ y: "105vh" }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    onClick={handleSkip}
                >
                    {/* Pull the logo up slightly to close the gap with the thread */}
                    <div className="-mt-8">
                        <SpiderLogo />
                    </div>

                    {/* Parallax Text split - text tracking increases heavily on exit */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30, letterSpacing: "2px" }}
                        animate={
                            glitching
                                ? { opacity: [1, 0, 1, 0], scale: 1.5, letterSpacing: "20px", filter: "blur(10px)", textShadow: "0 0 30px #ff003c" }
                                : { opacity: 1, y: 15, letterSpacing: "6px" }
                        }
                        exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, delay: glitching ? 0 : 0.6 }}
                        className="mt-6 font-mono font-bold uppercase text-xs sm:text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-sv-red via-white to-sv-blue"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        Connecting to Multiverse
                    </motion.h2>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LaunchScreen;
