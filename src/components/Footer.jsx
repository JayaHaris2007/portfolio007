import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-10 relative overflow-hidden">
            {/* Subtle red glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-sv-red/30 blur-sm" />

            <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <p className="text-sv-muted text-xs font-mono tracking-[0.2em] uppercase">
                    &copy; {new Date().getFullYear()} Jaya Haris — All dimensions reserved.
                </p>

                <div className="flex gap-6">
                    {[
                        { icon: <Github size={18} />, href: "https://github.com/JayaHaris2007", label: "GitHub" },
                        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/jaya-haris-b-748a9a320/", label: "LinkedIn" },
                        { icon: <Mail size={18} />, href: "mailto:jayaharisb@gmail.com", label: "Email" },
                    ].map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-sv-muted hover:text-sv-red hover:drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] transition-all duration-300"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
