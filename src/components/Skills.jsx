import React from "react";
import { motion } from "framer-motion";

const skills = [
    // Frontend — Red category
    { name: "React.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "UI/UX", category: "frontend" },
    // Backend — Blue category
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "PHP", category: "backend" },
    { name: "Python", category: "backend" },

    // Tools — mixed
    { name: "Git", category: "backend" },
    { name: "AI Tools", category: "frontend" },

];

// Random float offsets for each tag so they drift independently
const driftVariants = (i) => ({
    animate: {
        y: [0, -8 - (i % 4) * 3, 0],
        x: [0, (i % 2 === 0 ? 4 : -4), 0],
        transition: {
            duration: 4 + (i % 3) * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
        },
    },
});

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-[2px] bg-sv-blue" />
                        <span className="text-sv-blue font-mono text-xs tracking-[0.3em] uppercase">
                            02 // Skills
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight chromatic uppercase">
                        My <span className="text-sv-red">Skills</span>
                    </h2>
                </motion.div>

                {/* Floating Tag Cloud */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-8">
                    {skills.map((skill, i) => {
                        const isRed = skill.category === "frontend";
                        return (
                            <motion.div
                                key={skill.name}
                                variants={driftVariants(i)}
                                animate="animate"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.2 }}
                                className={`
                  group relative px-5 py-3 font-mono text-sm tracking-wider uppercase
                  border transition-all duration-300
                  ${isRed
                                        ? "border-sv-red/30 text-sv-red hover:border-sv-red hover:bg-sv-red/10 hover:shadow-[0_0_20px_rgba(255,0,60,0.3)]"
                                        : "border-sv-blue/30 text-sv-blue hover:border-sv-blue hover:bg-sv-blue/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                                    }
                `}
                            >
                                {skill.name}
                                {/* Glow pulse on hover */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${isRed
                                        ? "shadow-[inset_0_0_20px_rgba(255,0,60,0.15)]"
                                        : "shadow-[inset_0_0_20px_rgba(0,212,255,0.15)]"
                                        }`}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-8 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-sv-red/40 border border-sv-red" />
                        <span className="text-sv-muted font-mono text-[10px] tracking-widest uppercase">
                            Frontend
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-sv-blue/40 border border-sv-blue" />
                        <span className="text-sv-muted font-mono text-[10px] tracking-widest uppercase">
                            Backend / Tools
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
