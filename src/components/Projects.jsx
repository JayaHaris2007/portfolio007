import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import aiThinkrImg from "../assets/aithinkr_preview.png";
import foodOrderImg from "../assets/food_order_preview.png";

const projects = [
    {
        title: "AIThinkr",
        description:
            "An AI-powered study assistant that helps users ask questions, get smart responses, and manage chat history.",
        tech: ["React.js", "Node.js", "Firebase", "Gemini API"],
        image: aiThinkrImg,
        liveLink: "https://aithinkr-10ce0.web.app/",
        codeLink: "https://github.com/JayaHaris2007/aithinkr13",
    },
    {
        title: "Smart Food Pre-Order System",
        description:
            "An online food ordering platform that allows users to browse menus, place orders, and manage vendors efficiently.",
        tech: ["React.js", "Node.js", "Leaflet.js", "Firebase"],
        image: foodOrderImg,
        liveLink: "https://smart-food-07.vercel.app/",
        codeLink: "https://github.com/JayaHaris2007/SmartFood",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-cyan-500">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Some of my recent work</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl overflow-hidden hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 group max-w-md w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="h-48 bg-gray-100 dark:bg-gray-900 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-100 dark:border-cyan-800 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
