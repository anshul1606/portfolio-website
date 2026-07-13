"use client";
import Image from "next/image";
import { User, Code2, GraduationCap, FolderGit2, Award, Download, Menu, X, } from "lucide-react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() =>{
        const sections=[
            "about",
            "skills",
            "education",
            "projects",
            "certificates",
        ];
        const handleScroll = () => {
            const scrollPosition = window.scrollY +150;
            for(const section of sections){
                const element = document.getElementById(section);
                if(element && scrollPosition>= element.offsetTop && scrollPosition<= element.offsetTop + element.offsetHeight){
                    setActiveSection(section);
                }
            }
        };
       
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className="w-full">
            <nav className="fixed top-5 left-1/2 -translate-x-1/2 max-w-7xl w-[92%] flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 bg-black/30 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.35)] z-50">
                
                <div className="flex justify-center gap-3 items-center text-white text-lg md:text-xl font-extrabold tracking-wide transition-all duration-300">
                    <div className="p-[3px] rounded-full bg-gradient-to-r hover:from-[#10B981] hover:to-[#06B6D4] shadow-[0_0_20px_rgba(124,140,255,0.5)]">
                        <Image src="/images/human_logo.png" alt="logo" height={40} width={40} className="w-9 h-9 md:w-10 md:h-10 rounded-full" />
                    </div>
                    <h1 className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">Anshul Agrawal</h1>
                </div>

             
                <div className="hidden lg:flex justify-center">
                    <div className="flex gap-5">
                        <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start"})} className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981] transition-all duration-300 hover:-translate-y-1"><User size={16} /><AnimatedText text="About" /></button>
                        <button onClick={() => document.getElementById("skills")?.scrollIntoView({behavior: "smooth", block: "start"})} className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981] transition-all duration-300 hover:-translate-y-1"><Code2 size={16} /><AnimatedText text= "Skills" /></button>
                        <button onClick={() => document.getElementById("education")?.scrollIntoView({behavior: "smooth", block: "start"})} className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981] transition-all duration-300 hover:-translate-y-1"><GraduationCap size={16} /><AnimatedText text= "Education" /></button>
                        <button onClick={() => document.getElementById("projects")?.scrollIntoView({behavior: "smooth", block: "start"})} className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981] transition-all duration-300 hover:-translate-y-1"><FolderGit2 size={16} /><AnimatedText text ="Projects" /></button>
                        <button onClick={() => document.getElementById("certificates")?.scrollIntoView({behavior: "smooth", block: "start"})} className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981]transition-all duration-300 hover:-translate-y-1"><Award size={16} /><AnimatedText text = "Certifications" /></button>
                        <a href="Anshul_Resume.pdf" download="Anshul_Resume.pdf" className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981] transition-all duration-300 hover:-translate-y-1"><Download size={16} /><AnimatedText text = "Resume" /></a>
                    </div>
                </div>

                
                <div className="hidden lg:flex items-center justify-end gap-3"> 
                    <a href="tel:+919205137992" className="w-23 h-10 flex items-center justify-center rounded-xl gap-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#06B6D4] hover:shadow-[0_0_15px_rgba(124,140,255,0.6)]">
                        <FaPhone size={15}/><AnimatedText text="Phone" />
                    </a> 
                    <a href="https://www.linkedin.com/in/anshul-agrawal-7ba749221/" target="_blank" rel="noopener noreferrer" className="w-23 h-10 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#06B6D4] hover:shadow-[0_0_15px_rgba(124,140,255,0.6)]"><FaLinkedin size={15} /><AnimatedText text="Linkdln"/></a>
                    <a href="https://github.com/anshul1606" target="_blank" className="w-23 h-10 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#06B6D4] hover:shadow-[0_0_15px_rgba(124,140,255,0.6)]"><FaGithub size={15} /><AnimatedText text="GitHub"/></a>
                </div>

                
                <div className="flex lg:hidden justify-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white p-2 rounded-lg hover:bg-white/10 transition"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>               

                
                {menuOpen && (
                    <div className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 w-full max-h-[80vh] overflow-y-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 z-40 animate-in fade-in slide-in-from-top-4">
                        <div className="flex flex-col gap-6 text-white text-lg">
                            <button className="text-left hover:text-[#10B981]" onClick={() => { document.getElementById("about")?.scrollIntoView({behavior: "smooth", block: "start",}); setMenuOpen(false); }}>About</button>
                            <button className="text-left hover:text-[#10B981]" onClick={() => { document.getElementById("skills")?.scrollIntoView({behavior: "smooth"}); setMenuOpen(false); }}>Skills</button>
                            <button className="text-left hover:text-[#10B981]" onClick={() => { document.getElementById("education")?.scrollIntoView({behavior: "smooth"}); setMenuOpen(false); }}>Education</button>
                            <button className="text-left hover:text-[#10B981]" onClick={() => { document.getElementById("projects")?.scrollIntoView({behavior: "smooth"}); setMenuOpen(false); }}>Projects</button>
                            <button className="text-left hover:text-[#10B981]" onClick={() => { document.getElementById("certificates")?.scrollIntoView({behavior: "smooth"}); setMenuOpen(false); }}>Certificates</button>
                            <a href="Anshul_Resume.pdf" download className="text-left text-[#10B981] font-semibold" onClick={() => setMenuOpen(false)}>Download Resume</a>
                            
                            
                            <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-2">
                                <a href="tel:+919205137992" className="p-3 rounded-full bg-white/10 hover:bg-[#10B981] transition"><FaPhone size={18}/></a>
                                <a href="https://www.linkedin.com/in/anshul-agrawal-7ba749221/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-[#10B981] transition"><FaLinkedin size={18}/></a>
                                <a href="https://github.com/anshul1606" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-[#10B981] transition"><FaGithub size={18}/></a>
                            </div>
                        </div>
                    </div>
                )} 
            </nav>
        </div>
    );
}