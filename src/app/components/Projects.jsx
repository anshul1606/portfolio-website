"use client";
import React, { useState, useEffect } from "react";
import SectionReveal from "./ScrollReveal";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Project() {
    const originalProjects = [
        {
            title: "Blogs Landing Page",
            image: "/images/project_bE.png",
            tech: ["React", "NextJs", "Tailwind CSS", "HTML"],
            description: [
                "Built a responsive real-estate blog landing page.",
                "Implemented reusable components and smooth navigation.",
                "Mobile-first responsive design and optimized frontend performance.",
            ],
            github: "https://github.com/anshul1606/landing-page",
        },
        {
            title: "User Admin Hub",
            image: "/images/user_image.jpeg",
            tech: ["JSP", "Servlet", "SQL"],
            description: [
                "Managed user registration, authentication, and role-based access.",
                "Admin panel with CRUD operations for user accounts.",
                "Secure password handling using hashing techniques.",
            ],
            github: "https://github.com/anshul1606/UserAdmin-Hub-Web-Application-",
        },
        {
            title: "Travel Booking Hub",
            image: "/images/travel_image.png",
            tech: ["HTML", "CSS", "JavaScript"],
            description: [
                "Clean UI for tour packages and destinations.",
                "Interactive sections for travel booking.",
                "Designed reusable components for travel info.",
            ],
            github: "https://github.com/anshul1606/Jingle-Holidat-Bazaar-Web-Page",
        },
    ];

    
    
    const project = [...originalProjects, ...originalProjects];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => setActiveIndex((prev) => prev - 1);
    const handleNext = () => setActiveIndex((prev) => prev + 1);

    // --- CYLINDER MATH ---
    const total = project.length; // 6 items
    const angle = 360 / total;    // 60 degrees apart

    
    const itemWidth = isMobile ? 320 : 900; 
    const itemHeight = isMobile ? 550 : 450;
    const gap = isMobile ? 20 : 60;

    // Calculate how far out the walls of the cylinder need to be pushed
    const radius = Math.round((itemWidth + gap) / 2 / Math.tan((angle / 2) * (Math.PI / 180)));
    
    // Position the camera so we can see the center card and hints of the side cards
    const cameraZ = radius - (isMobile ? 120 : 250);

    return (
        <SectionReveal>
            <section id="projects" className="relative py-10 md:py-12 px-4 w-full min-h-[700px] md:min-h-[850px] overflow-hidden flex flex-col items-center"> 
                
                <div className="absolute top-10 md:top-16 z-50 pointer-events-none text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">Projects</h2>
                    <p className="text-gray-400 text-sm tracking-widest uppercase">Explore my work in 360°</p>
                </div>
                
                {/* 3D Panorama Wrapper */}
                <div 
                    className="relative flex items-center justify-center w-full h-[600px] md:h-[650px] mt-16 md:mt-20"
                    style={{ perspective: "1500px" }}
                >
                    <div
                        className="relative flex items-center justify-center w-full h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.3,1)]"
                        style={{ 
                            transformStyle: "preserve-3d",
                            transform: `translateZ(${cameraZ}px) rotateY(${activeIndex * -angle}deg)` 
                        }}
                    >
                        {project.map((proj, index) => {
                            const normalizedActive = ((activeIndex % total) + total) % total;
                            let distance = index - normalizedActive;
                            
                            
                            if (distance > total / 2) distance -= total;
                            else if (distance < -total / 2) distance += total;
                            
                            const absDistance = Math.abs(distance);
                            const isActive = absDistance === 0;

                            
                            const brightness = Math.max(20, 100 - (absDistance * 50));
                            const opacity = absDistance > 1.5 ? 0 : 1; 

                            return (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.3,1)]"
                                    style={{
                                        width: `${itemWidth}px`,
                                        height: `${itemHeight}px`,
                                        transform: `translate(-50%, -50%) rotateY(${index * angle}deg) translateZ(-${radius}px)`,
                                        filter: `brightness(${brightness}%)`,
                                        opacity: opacity,
                                        pointerEvents: absDistance > 1 ? "none" : "auto",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* The Project Card */}
                                    <div 
                                        className={`w-full h-full flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} rounded-3xl bg-white/5 border backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-700 ${
                                            isActive ? "border-[#10B981]/50 cursor-default" : "border-white/10 cursor-pointer hover:border-[#10B981]/30"
                                        }`}
                                        onClick={() => {
                                        
                                            if (!isActive) setActiveIndex(activeIndex + distance);
                                        }}
                                    >
                                        {/* Image Section */}
                                        <div className="md:w-[55%] h-48 md:h-full overflow-hidden relative">
                                            <Image 
                                                src={proj.image} 
                                                alt={proj.title} 
                                                height={600} 
                                                width={800} 
                                                className={`h-full w-full object-cover transition-transform duration-700 ${isActive ? "hover:scale-105" : ""}`} 
                                            />
                                            </div>

                                        {/* Content Wrapper */}
                                        <div className="p-6 md:p-10 md:w-[45%] flex flex-col justify-center bg-[#0a0a0a]/40 md:bg-transparent">
                                            <span className="text-[#10B981] font-medium text-sm tracking-wide">
                                                Project {String((index % originalProjects.length) + 1).padStart(2, "0")}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mt-2">
                                                {proj.title}
                                            </h3>
                                            
                                            <ul className="text-gray-300 mt-4 space-y-2 text-sm md:text-base list-disc pl-4 line-clamp-3 md:line-clamp-none">
                                                {proj.description.map((point, i) => ( 
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {proj.tech.map((item) => ( 
                                                    <span key={item} className="rounded-full px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs md:text-sm">
                                                        {item}
                                                    </span> 
                                                ))} 
                                            </div>
                                            
                                            <div className="mt-auto pt-6">
                                                <a 
                                                    href={proj.github} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    onClick={(e) => { if(!isActive) e.preventDefault(); }}
                                                    className={`px-5 py-3 rounded-xl border border-white/20 text-white inline-flex items-center gap-2 transition-all ${isActive ? "hover:text-[#10B981] hover:border-[#10B981] hover:bg-[#10B981]/10" : "opacity-50 pointer-events-none"}`}
                                                >
                                                    GitHub <FaGithub />
                                                </a> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 md:bottom-12 flex flex-col items-center gap-6 z-50">
                    <div className="flex items-center gap-6 md:gap-10">
                        <button
                            onClick={handlePrev}
                            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#10B981] hover:border-[#10B981] hover:scale-110 focus:outline-none"
                        >
                            <span className="transform transition-transform group-hover:-translate-x-1">&larr;</span>
                        </button>
                        
                        <div className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 w-24 text-center">
                            {String((((activeIndex % total) + total) % total) + 1).padStart(2, "0")} 
                            <span className="mx-1 opacity-30">/</span> 
                            {String(total).padStart(2, "0")}
                        </div>

                        <button
                            onClick={handleNext}
                            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#10B981] hover:border-[#10B981] hover:scale-110 focus:outline-none"
                        >
                            <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
                        </button>
                    </div>
                </div>
            </section>
        </SectionReveal>
    );
}