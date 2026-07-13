"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionReveal from "./ScrollReveal";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Project() {
    const project = [
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

    return (
        <SectionReveal>
            <section id="projects" className="py-12 md:py-20 px-4 md:px-16 max-w-7xl mx-auto"> 
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Projects</h2>
                
                <div className="w-full">
                    <Swiper 
                        autoHeight={true} 
                        modules={[Navigation, Pagination]} 
                        navigation 
                        pagination={{ clickable: true }} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        className="pb-12"
                    >
                        {project.map((proj, index) => ( 
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} rounded-3xl bg-white/5 border border-[#10B981]/30 backdrop-blur-xl shadow-xl overflow-hidden`}>
                                    
                                    
                                    <div className="md:w-[55%] h-64 md:h-auto overflow-hidden">
                                        <Image 
                                            src={proj.image} 
                                            alt={proj.title} 
                                            height={600} 
                                            width={800} 
                                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                                        />
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className="p-6 md:p-10 md:w-[45%] flex flex-col justify-center">
                                        <span className="text-[#10B981] font-medium text-sm">
                                            Project {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mt-2">
                                            {proj.title}
                                        </h3>
                                        
                                        <ul className="text-gray-300 mt-4 space-y-2 text-sm md:text-base list-disc pl-4">
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
                                        
                                        <div className="mt-8">
                                            <a href={proj.github} target="_blank" className="px-5 py-3 rounded-xl border border-white/10 text-white inline-flex items-center gap-2 hover:text-[#10B981] hover:border-[#10B981] transition-all">
                                                GitHub <FaGithub />
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </SectionReveal>
    );
}