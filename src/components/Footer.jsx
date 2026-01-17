import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-gray-800 pt-10 pb-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Jaya Haris. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:contact@jayaharis.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
