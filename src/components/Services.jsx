import React from "react";
import { motion } from "framer-motion";
import { Globe, Briefcase, Cpu } from "lucide-react";

const packages = [
    {
        tier: "Basic",
        color: "green",
        icon: <Globe size={24} />,
        label: "Basic Website Package",
        bestFor: "Personal brands, small businesses, startups.",
        features: [
            "Up to 5 pages (Home, About, Services, Contact, etc.)",
            "Fully responsive design (mobile-friendly)",
            "Contact form integration",
            "Basic SEO setup",
            "Clean and modern UI",
            "Deployment assistance",
        ],
        delivery: "5–7 days",
        support: "7 days post-delivery support",
    },
    {
        tier: "Business",
        color: "blue",
        icon: <Briefcase size={24} />,
        label: "Business Website Package",
        bestFor: "Growing businesses needing more features.",
        features: [
            "Up to 8–10 pages",
            "Custom UI design",
            "Admin panel (if required)",
            "API integration",
            "Performance optimization",
            "Advanced SEO setup",
            "Deployment & hosting support",
        ],
        delivery: "7–12 days",
        support: "14 days post-delivery support",
    },
    {
        tier: "Custom",
        color: "red",
        icon: <Cpu size={24} />,
        label: "Custom Web Application",
        bestFor: "SaaS products, dashboards, startups, AI systems.",
        features: [
            "Full-stack development (Frontend + Backend)",
            "Database integration (MongoDB/Firebase)",
            "Authentication system (Login/Signup)",
            "Role-based access (if required)",
            "Custom features based on business needs",
            "API development & integration",
            "Performance & security optimization",
            "Deployment & documentation",
        ],
        delivery: "Based on requirements",
        support: "Ongoing support options available",
    },
];

const colorMap = {
    green: {
        border: "border-green-500/30 hover:border-green-500/70",
        glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
        text: "text-green-400",
        bg: "bg-green-500",
        dot: "bg-green-500",
    },
    blue: {
        border: "border-sv-blue/30 hover:border-sv-blue/70",
        glow: "hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]",
        text: "text-sv-blue",
        bg: "bg-sv-blue",
        dot: "bg-sv-blue",
    },
    red: {
        border: "border-sv-red/30 hover:border-sv-red/70",
        glow: "hover:shadow-[0_0_30px_rgba(255,0,60,0.15)]",
        text: "text-sv-red",
        bg: "bg-sv-red",
        dot: "bg-sv-red",
    },
};

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden">
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
                            05 // Services
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight chromatic uppercase">
                        Service <span className="text-sv-blue">Packages</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => {
                        const c = colorMap[pkg.color];
                        return (
                            <motion.div
                                key={pkg.tier}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className={`group relative border ${c.border} ${c.glow} bg-transparent transition-all duration-500 flex flex-col`}
                            >
                                {/* Top accent line */}
                                <div className={`h-[2px] ${c.bg} w-full`} />

                                <div className="p-8 flex flex-col flex-1">
                                    {/* Icon + tier */}
                                    <div className={`${c.text} mb-4`}>{pkg.icon}</div>
                                    <h3 className={`text-xl font-bold font-heading mb-1 ${c.text}`}>
                                        {pkg.label}
                                    </h3>
                                    <p className="text-sv-muted text-xs font-mono tracking-wide mb-6">
                                        Best for: {pkg.bestFor}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2.5 flex-1 mb-6">
                                        {pkg.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Footer */}
                                    <div className="border-t border-white/10 pt-4 space-y-1">
                                        <p className="text-xs font-mono text-sv-muted">
                                            <span className={c.text}>Delivery:</span> {pkg.delivery}
                                        </p>
                                        <p className="text-xs font-mono text-sv-muted">
                                            <span className={c.text}>Support:</span> {pkg.support}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
