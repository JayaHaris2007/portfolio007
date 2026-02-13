import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden pt-20"
        >
            {/* Static Background Glows for Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-2xl md:text-4xl font-medium mb-6 leading-tight text-gray-900 dark:text-white">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 font-bold">
                            <TypeAnimation
                                sequence={[
                                    "Jaya Haris",
                                    2000,
                                    "Problem Solver",
                                    2000,
                                    "Fast Learner",
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build exceptional digital experiences that are fast, accessible,
                        visually appealing, and responsive.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer w-full sm:w-auto"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <Link to="about" smooth={true} duration={500}>
                        <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center p-1 cursor-pointer hover:border-cyan-400 transition-colors">
                            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-1"></div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
