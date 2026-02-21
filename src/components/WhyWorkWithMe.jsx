import React from "react";
import { motion } from "framer-motion";
import { Target, Code2, MessageCircle, Zap, Rocket, LifeBuoy } from "lucide-react";

const reasons = [
    {
        icon: <Target size={22} />,
        title: "Business-Focused Development",
        desc: "I don't just build websites — I build solutions that help businesses grow, convert users, and scale efficiently.",
    },
    {
        icon: <Code2 size={22} />,
        title: "Clean & Scalable Code",
        desc: "Projects are structured properly so they are easy to maintain, upgrade, and expand in the future.",
    },
    {
        icon: <MessageCircle size={22} />,
        title: "Clear Communication",
        desc: "Regular updates, transparent progress, and quick responses throughout the project.",
    },
    {
        icon: <Zap size={22} />,
        title: "Performance Optimization",
        desc: "Fast loading speeds, optimized databases, and smooth user experience.",
    },
    {
        icon: <Rocket size={22} />,
        title: "Startup Mindset",
        desc: "I understand how startups work — speed, efficiency, and smart feature prioritization.",
    },
    {
        icon: <LifeBuoy size={22} />,
        title: "Post-Launch Support",
        desc: "I provide guidance even after deployment to ensure everything runs smoothly.",
    },
];

const WhyWorkWithMe = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
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
                            06 // Why Me
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight chromatic uppercase">
                        Why Work <span className="text-sv-red">With Me</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group border border-white/10 hover:border-sv-red/50 p-8 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,60,0.1)]"
                        >
                            <div className="text-sv-red mb-4 group-hover:drop-shadow-[0_0_8px_rgba(255,0,60,0.6)] transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-bold font-heading text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sv-muted text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithMe;
