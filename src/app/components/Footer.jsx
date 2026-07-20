"use client";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { User, Code2, GraduationCap, FolderGit2, Award, Download } from "lucide-react";

export default function Footer() {
    
    const allNavItems = [
        { id: "about", text: "About", icon: <User size={16} /> },
        { id: "skills", text: "Skills", icon: <Code2 size={16} /> },
        { id: "education", text: "Education", icon: <GraduationCap size={16} /> },
        { id: "projects", text: "Projects", icon: <FolderGit2 size={16} /> },
        { id: "certificates", text: "Certificates", icon: <Award size={16} /> },
    ];

    return (
        <section id="footer" className="w-full px-4 py-12 md:py-16 border-t border-white/10 mt-10">
            
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-8">
                
                
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5bfec8] to-[#06B6D4] bg-clip-text text-transparent">
                        Anshul Agrawal
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-md mt-2">
                        Frontend Developer, building responsive and user-friendly web applications.
                    </p>
                </div>

               
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-8 mt-4">
                    {allNavItems.map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => document.getElementById(item.id)?.scrollIntoView({behavior: "smooth", block: "start"})}  
                            className="flex items-center gap-2 text-gray-300 hover:text-[#10B981] transition-colors duration-300 text-sm md:text-base font-medium"
                        >
                            <span className="text-[#10B981]">{item.icon}</span>
                            {item.text}
                        </button>
                    ))}
                    <a href="Anshul_Resume.pdf" download="Anshul_Resume.pdf" className="flex items-center gap-2 text-gray-300 hover:text-[#10B981] transition-all duration-300 text-sm md:text-base font-medium">
                        <span className="text-[#10B981]"><Download size={16} /></span>
                        Resume
                    </a>
                </div>

                
                <div className="flex items-center justify-center gap-5 mt-4">
                    <a href="mailto:agrawalanshul1606@gmail.com" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" aria-label="Email">
                        <BiLogoGmail size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/anshul-agrawal-7ba749221/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com/anshul1606" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" aria-label="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href="tel:+919205137992" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                        <FaPhone size={20} />
                    </a>
                                
                </div>
                
                
                <div className="text-gray-500 text-xs md:text-sm mt-4">
                    © {new Date().getFullYear()} Anshul Agrawal. All rights reserved.
                </div>

            </div>
        </section>
    );
}