import React from "react";
import { motion } from "framer-motion";
import {
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiFirebase,
    SiGit,
    SiOpenai,
} from "react-icons/si";

const skills = [
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "AI Tools", icon: <SiOpenai className="text-green-400" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 user-select-none pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 user-select-none pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                        My <span className="text-cyan-500">Skills</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 pointer-events-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: false }}
                            className="glass px-6 py-4 rounded-xl flex items-center gap-4 hover:scale-110 transition-transform duration-300 cursor-default border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md"
                        >
                            <span className="text-3xl">{skill.icon}</span>
                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
