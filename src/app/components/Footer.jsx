"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { User, Code2, GraduationCap, FolderGit2, Award, Download, Menu, X, } from "lucide-react";

import AnimatedText from "./AnimatedText";

export default function Footer(){
    return(
        <section id="footer" className="px-16">
            <div className="flex flex-col md:flex-row justify-between gap-12  py-10 lg:py-20  py-3">
                <div className="flex-1">
                    <div className="py-5">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-[#5bfec8] to-[#06B6D4] bg-clip-text text-transparent">Anshul Agrawal</h1>
                    </div>
                    <div>
                        <p className="text-gray-100">Frontend Developer, building responsive and user-friendly web applications.</p>
                    </div>
                </div> 
                <div className="flex-1 flex flex-col items-center text-xl sm:text-xl lg:text-base gap-5">
                    <h1 className="text-xl font-bold text-gray-200">
                        Navigation
                    </h1>
                    <div className="text-white">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><User size={16} /><AnimatedText text="About" /></li>
                            <li className="flex items-center gap-2"><Code2 size={16} /><AnimatedText text="Skills" /></li>
                            <li className="flex items-center gap-2"><GraduationCap size={16} /><AnimatedText text="Education" /></li>
                            <li className="flex items-center gap-2"><FolderGit2 size={16} /><AnimatedText text="Projects" /></li>
                            <li className="flex items-center gap-2"><Award size={16} /><AnimatedText text="Certificates" /></li>
                            <li className="flex items-center gap-2"><Download size={16} /><AnimatedText text="Resume" /></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <h1 className="text-xl font-bold text-gray-200">
                        Contact
                    </h1>
                    <div className="text-white mt-5">
                        <a href="mailto:agrawalanshul1606@gmail.com" className="hover:underline flex items-center gap-2 rounded-xl hover:text-[#10B981] transition-colors duration-300">
                            <BiLogoGmail size={15} /><AnimatedText text="agrawalanshul1606@gmail.com" />
                        </a>
                        <a href="https://www.linkedin.com/in/anshul-agrawal-7ba749221/" target="_blank" rel="noopener noreferrer" className="hover:underline flex w-23 h-10 flex items-center  gap-2 rounded-xl hover:text-[#10B981] transition-colors duration-300">
                            <FaLinkedin size={15} /><AnimatedText text="LinkedIn"/>
                        </a>
                        <a href="https://github.com/anshul1606" target="_blank" rel="noopener noreferrer" className="hover:underline flex w-23 h-10 flex items-center gap-2 rounded-xl hover:text-[#10B981] transition-colors duration-300">
                            <FaGithub size={15} /><AnimatedText text="Github"/>
                        </a>
                    </div>
                </div>
                    
            </div>
        </section>
    );
}