import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profile.png";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center text-gray-900 dark:text-white">
                        About <span className="text-cyan-500">Me</span>
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/4 flex-shrink-0"
                        >
                            <div className="relative group w-full aspect-[3/4]">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                                <img
                                    src={profilePhoto}
                                    alt="Profile"
                                    className="relative w-full h-full rounded-2xl object-cover shadow-xl ring-2 ring-white dark:ring-gray-800"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass p-8 md:p-12 rounded-2xl flex flex-col justify-center text-center md:text-left flex-grow bg-white/60 dark:bg-gray-800/60 transition-colors duration-300"
                        >
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                I am a Computer Science Engineering student with a strong interest in
                                full-stack web development and artificial intelligence. I enjoy
                                building responsive, real-world applications using modern
                                technologies.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                I focus on writing clean code, learning new tools, and continuously
                                improving my skills through projects and experimentation. Whether it's
                                creating a complex backend architecture or a pixel-perfect frontend, I
                                love the challenge of bringing ideas to life.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
