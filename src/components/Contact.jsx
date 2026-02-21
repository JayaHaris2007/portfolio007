import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const formRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check hCaptcha
        const hCaptchaField = formRef.current.querySelector("textarea[name=h-captcha-response]");
        if (!hCaptchaField || !hCaptchaField.value) {
            alert("Please complete the captcha.");
            return;
        }

        setStatus("loading");

        try {
            const submitData = new FormData(formRef.current);
            submitData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submitData,
            });

            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Reset hCaptcha
                if (window.hcaptcha) window.hcaptcha.reset();
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

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
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-sv-red mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
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
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-sv-muted font-sans focus:outline-none focus:border-sv-red focus:shadow-[0_0_15px_rgba(255,0,60,0.2)] transition-all duration-300 resize-none"
                                />
                            </div>

                            {/* hCaptcha — Web3Forms zero-config integration */}
                            <div className="flex justify-center">
                                <div className="h-captcha" data-captcha="true" data-theme="dark" />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full relative group/btn overflow-hidden bg-sv-red text-white font-bold tracking-[0.2em] uppercase text-sm py-4 flex items-center justify-center gap-3 spider-pulse hover:scale-[1.02] transition-transform duration-300 disabled:opacity-60 disabled:hover:scale-100"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-400 font-mono text-sm justify-center">
                                    <CheckCircle size={16} /> Message sent successfully!
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-2 text-sv-red font-mono text-sm justify-center">
                                    <AlertCircle size={16} /> Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
