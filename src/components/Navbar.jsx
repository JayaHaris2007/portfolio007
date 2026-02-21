import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Services", to: "services" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "py-3 bg-sv-bg/80 backdrop-blur-xl border-b border-white/5"
                : "py-5 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-black font-heading tracking-wider chromatic-sm group"
                >
                    <span className="text-sv-red">JAYA</span>
                    <span className="text-sv-blue">HARIS</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="relative text-sv-muted hover:text-white font-mono text-xs tracking-[0.25em] uppercase transition-colors duration-300 group py-2"
                        >
                            {link.name}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-sv-red transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(255,0,60,0.6)]" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-sv-red transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-sv-bg/95 backdrop-blur-xl border-b border-white/10 py-8"
                    >
                        <div className="flex flex-col items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sv-muted hover:text-sv-red text-lg font-mono tracking-[0.3em] uppercase transition-colors glitch-hover"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
