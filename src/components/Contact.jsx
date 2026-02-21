import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sv-red/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-[2px] bg-sv-blue" />
                        <span className="text-sv-blue font-mono text-xs tracking-[0.3em] uppercase">
                            04 // Contact
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight chromatic uppercase">
                        Get In <span className="text-sv-red">Touch</span>
                    </h2>
                    <p className="text-sv-muted font-mono text-sm mt-4 tracking-wide">
            // Have a project in mind? Let's connect
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border border-white/10 bg-sv-bg/50 backdrop-blur-sm p-1 relative overflow-hidden group"
                >
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sv-red/20 via-transparent to-sv-blue/20 opacity-40" />

                    <div className="bg-sv-bg/90 p-8 md:p-12 relative z-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-sv-red mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-sv-muted font-sans focus:outline-none focus:border-sv-red focus:shadow-[0_0_15px_rgba(255,0,60,0.2)] transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-sv-blue mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-sv-muted font-sans focus:outline-none focus:border-sv-blue focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-sv-muted mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-sv-muted font-sans focus:outline-none focus:border-sv-red focus:shadow-[0_0_15px_rgba(255,0,60,0.2)] transition-all duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full relative group/btn overflow-hidden bg-sv-red text-white font-bold tracking-[0.2em] uppercase text-sm py-4 flex items-center justify-center gap-3 spider-pulse hover:scale-[1.02] transition-transform duration-300"
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
