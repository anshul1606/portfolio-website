"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { User, Code2, GraduationCap, FolderGit2, Award, Download, Menu, X, } from "lucide-react";

import AnimatedText from "./AnimatedText";

export default function Footer(){
    const navigation1 = [
        {
            id:"about", text:"About", icon:<User size={16} />
        },
        {
            id:"skills", text:"Skills", icon:<Code2 size={16} />
        },
        {
            id:"education", text:"Education", icon:<GraduationCap size={16} />
        },
    ];
    const navigation2 = [
        {
            id:"projects", text:"Projects", icon:<FolderGit2 size={16} />
        },
        {
            id:"certificates", text:"Certificates", icon:<Award size={16} />
        },
    ]
    return(
        <section id="footer" className="px-20 mb-4">
            <div className="flex flex-col md:flex-row justify-between gap-30">
                <div className="flex-1">
                    <div className="py-5">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-[#5bfec8] to-[#06B6D4] bg-clip-text text-transparent">Anshul Agrawal</h1>
                    </div>
                    <div>
                        <p className="text-gray-100">Frontend Developer, building responsive and user-friendly web applications.</p>
                    </div>
                </div> 
                <div className="flex-1 flex flex-col  text-xl sm:text-xl lg:text-base gap-5">
                    <h1 className="text-xl font-bold text-gray-200">
                        Navigation
                    </h1>
                    <div className="text-white">
                        <div className="flex flex-col md:flex-row gap-10">
                        <ul className="space-y-2">
                            {navigation1.map((item) => (
                                <li key={item.id}>
                                    <button onClick={() => 
                                        document.getElementById(item.id)?.scrollIntoView({behavior: "smooth", block: "start"})
                                    }  className="flex items-center gap-2 hover:text-[#10B981] transition-colors duration-300">
                                        {item.icon}
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-2">
                            {navigation2.map((item) => (
                                <li key={item.id}>
                                    <button onClick={() => 
                                        document.getElementById(item.id)?.scrollIntoView({behavior: "smooth", block: "start"})
                                    }  className="flex items-center gap-2 hover:text-[#10B981] transition-colors duration-300">
                                        {item.icon}
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                            <li><a href="Anshul_Resume.pdf" download="Anshul_Resume.pdf" className="flex items-center gap-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white bg-clip-text text-transparent hover:text-[#10B981] transition-all duration-300"><Download size={16} />Resume</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <h1 className="text-xl font-bold text-gray-200">
                        Contact
                    </h1>
                    <div className="text-white mt-5">
                        <a href="mailto:agrawalanshul1606@gmail.com" className="hover:underline flex items-center gap-2 rounded-xl hover:text-[#10B981] transition-colors duration-300">
                            <BiLogoGmail size={15} />agrawalanshul1606@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/anshul-agrawal-7ba749221/" target="_blank" rel="noopener noreferrer" className="hover:underline flex w-23 h-10 flex items-center gap-2 rounded-xl hover:text-[#10B981] transition-colors duration-300">
                            <FaLinkedin size={15} />LinkedIn
                        </a>
                        <a href="https://github.com/anshul1606" target="_blank" rel="noopener noreferrer" className="hover:underline flex w-23 h-10 flex items-center gap-2 rounded-xl hover:text-[#10B981] transition-colors duration-300">
                            <FaGithub size={15} />Github
                        </a>
                    </div>
                </div>
                    
            </div>
        </section>
    );
}