import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Code, Brain } from "lucide-react";

const highlights = [
    {
        icon: <Code size={32} />,
        title: "Clean & Scalable Code",
        description: "Writing maintainable, efficient, and well-documented code is my priority.",
    },
    {
        icon: <Brain size={32} />,
        title: "Problem Solving",
        description: "Strong analytical skills to tackle complex algorithms and logic puzzles.",
    },
    {
        icon: <Zap size={32} />,
        title: "Fast Learner",
        description: "Adaptable to new technologies and frameworks in the rapidly evolving tech landscape.",
    },
    {
        icon: <CheckCircle size={32} />,
        title: "AI Integrated Solutions",
        description: "Leveraging modern AI tools to build smarter and faster applications.",
    },
];

const Highlights = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Why <span className="text-cyan-400">Choose Me?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-500/30">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
