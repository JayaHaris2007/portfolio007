import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0f0f0f]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                        About <span className="text-cyan-400">Me</span>
                    </h2>

                    <div className="glass p-8 md:p-12 rounded-2xl">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a Computer Science Engineering student with a strong interest in
                            full-stack web development and artificial intelligence. I enjoy
                            building responsive, real-world applications using modern
                            technologies.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I focus on writing clean code, learning new tools, and continuously
                            improving my skills through projects and experimentation. Whether it's
                            creating a complex backend architecture or a pixel-perfect frontend, I
                            love the challenge of bringing ideas to life.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
