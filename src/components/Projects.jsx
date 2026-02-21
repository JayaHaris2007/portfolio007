import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import aiThinkrImg from "../assets/aithinkr_preview.png";
import foodOrderImg from "../assets/food_order_preview.png";

const projects = [
    {
        title: "KAGE",
        description:
            "A habit-tracking system designed for disciplined builders. Track streaks, analyze patterns, and build atomic habits with a gamified interface.",
        tech: ["React.js", "Node.js", "MongoDB", "Framer Motion"],
        image: null, // No image yet — uses gradient placeholder
        liveLink: "#",
        codeLink: "#",
        accent: "red",
    },
    {
        title: "AIThinkr",
        description:
            "An AI-powered study assistant. Ask questions, receive intelligent responses, and manage conversational history across sessions.",
        tech: ["React.js", "Node.js", "Firebase", "Gemini API"],
        image: aiThinkrImg,
        liveLink: "https://aithinkr-10ce0.web.app/",
        codeLink: "https://github.com/JayaHaris2007/aithinkr13",
        accent: "blue",
    },
    {
        title: "Smart Food",
        description:
            "Online food ordering platform with vendor management, real-time location tracking, and a streamlined checkout experience.",
        tech: ["React.js", "Node.js", "Leaflet.js", "Firebase"],
        image: foodOrderImg,
        liveLink: "https://smart-food-07.vercel.app/",
        codeLink: "https://github.com/JayaHaris2007/SmartFood",
        accent: "red",
    },
];

const ProjectCard = ({ project, index }) => {
    const isRed = project.accent === "red";
    const borderClass = isRed ? "border-sv-red/30 hover:border-sv-red/70" : "border-sv-blue/30 hover:border-sv-blue/70";
    const glowClass = isRed
        ? "hover:shadow-[0_0_30px_rgba(255,0,60,0.15)]"
        : "hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`group relative bg-transparent border ${borderClass} ${glowClass} transition-all duration-500 overflow-hidden`}
        >
            {/* Shatter overlay on hover */}
            <div className="absolute inset-0 bg-sv-bg/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-center items-center p-8">
                <p className="font-mono text-[10px] text-sv-muted tracking-[0.3em] uppercase mb-4">
          // Technical Readout
                </p>
                <h4 className={`text-2xl font-black font-heading mb-4 ${isRed ? "text-sv-red" : "text-sv-blue"}`}>
                    {project.title}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className={`px-3 py-1 text-[10px] font-mono tracking-widest uppercase border ${isRed ? "border-sv-red/50 text-sv-red" : "border-sv-blue/50 text-sv-blue"
                                }`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-6">
                    {project.liveLink !== "#" && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-sv-red transition-colors"
                        >
                            <ExternalLink size={14} /> Live
                        </a>
                    )}
                    {project.codeLink !== "#" && (
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-sv-muted hover:text-white transition-colors"
                        >
                            <Github size={14} /> Code
                        </a>
                    )}
                </div>
            </div>

            {/* Image / Gradient Placeholder */}
            <div className="h-48 overflow-hidden border-b border-white/5 relative">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter saturate-50 group-hover:saturate-100 transition-all duration-700"
                    />
                ) : (
                    <div className={`w-full h-full ${isRed ? "bg-gradient-to-br from-sv-red/20 to-sv-bg" : "bg-gradient-to-br from-sv-blue/20 to-sv-bg"}`} />
                )}
            </div>

            {/* Info */}
            <div className="p-6 relative z-10">
                <h3 className={`text-xl font-bold font-heading mb-2 ${isRed ? "text-sv-red" : "text-sv-blue"}`}>
                    {project.title}
                </h3>
                <p className="text-sv-muted text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
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
                        <div className="w-12 h-[2px] bg-sv-red" />
                        <span className="text-sv-red font-mono text-xs tracking-[0.3em] uppercase">
                            03 // Projects
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight chromatic uppercase">
                        My <span className="text-sv-blue">Projects</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
