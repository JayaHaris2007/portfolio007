import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-10 transition-colors duration-300">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Jaya Haris. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="https://github.com/JayaHaris2007" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jaya-haris-b-748a9a320/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:jayaharisb@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
