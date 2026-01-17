import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import HexGridBackground from "./HexGridBackground";

const Hero = () => {
    const [text, setText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    const words = ["Jaya Haris", "Problem Solver", "Fast Learner"];

    React.useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden pt-20"
        >
            {/* Canvas Background */}
            <HexGridBackground />

            {/* Static Background Glows for Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-6 font-heading tracking-tight h-[1.2em]">
                        Hi, I’m {text}
                        <span className="animate-pulse">|</span>
                    </h2>
                    <h1 className="text-2xl md:text-4xl font-medium mb-6 leading-tight text-white">
                        A Full-Stack Developer & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-bold">
                            AI-Focused Student
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build modern web applications, integrate AI tools, and create
                        scalable digital solutions effectively.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white font-medium rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer w-full sm:w-auto"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <Link to="about" smooth={true} duration={500}>
                        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1 cursor-pointer hover:border-cyan-400 transition-colors">
                            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-1"></div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
