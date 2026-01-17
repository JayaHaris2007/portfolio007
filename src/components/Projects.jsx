import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Project One",
        description:
            "A modern web application built with React and Tailwind CSS. Features include responsive design and smooth animations.",
        tech: ["React", "Tailwind", "Node.js"],
        liveLink: "#",
        codeLink: "#",
    },
    {
        title: "Project Two",
        description:
            "Full-stack application integrating AI tools for enhanced user experience. Scalable architecture with Firebase backend.",
        tech: ["Python", "Firebase", "AI API"],
        liveLink: "#",
        codeLink: "#",
    },
    {
        title: "Project Three",
        description:
            "E-commerce dashboard with real-time data visualization and analytics. Clean UI focusing on usability.",
        tech: ["React", "Chart.js", "Express"],
        liveLink: "#",
        codeLink: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#121212]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <p className="text-gray-400">Some of my recent work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl overflow-hidden hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for project image */}
                                <span className="text-gray-600 text-4xl font-bold opacity-30">
                                    {project.title}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs bg-gray-800 text-cyan-300 rounded-full border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.liveLink}
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
