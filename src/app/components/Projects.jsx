"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionReveal from "./ScrollReveal";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
export default function Project(){
    const project =[
        {
            title: "Blogs Landing Page",
            image: "/images/project_bE.png",
            tech: ["React", "NextJs", "Tailwind CSS", "HTML"],
            description: [
                "Built a responsive real-estate blog landing page from scratch using React.js, Next.js, and Tailwind CSS.",
                "Implemented reusable components, smooth navigation, and mobile-first responsive design.",
                "Enhanced user experience through modern UI/UX practices and optimized frontend performance.",
                "Managed source code using Git and GitHub and deployed the application on Vercel."
            ],
            github: "https://github.com/anshul1606/landing-page",
        },
        {
            title: "User Admin Hub Web Application",
            image: "/images/user_image.jpeg",
            tech: ["JSP", "Servlet", "SQL"],
            description: [
                "Developed a user admin management web application using JSP, Servlet, and SQL to manage user registration, authentication, and role-based access control, ensuring secure user management and data handling.",
                "Designed and implemented an admin panel that enables CRUD operations for user accounts and roles, improving usability and providing administrators with comprehensive control over user data and permissions.",
                "Optimized performance and security by implementing SQL query optimization, input validation, and secure password handling using hashing techniques, following MVC architecture for maintainability and scalability.",
            ],
            github: "https://github.com/anshul1606/UserAdmin-Hub-Web-Application-",
        },
        {
            title: "Travel Booking Hub (Jingle Holiday Bazaar)",
            image: "/images/travel_image.png",
            tech: ["HTML", "CSS", "JavaScript"],
            description: [
                "Developed a travel booking website with clean UI using HTML, CSS, Bootstrap, and JavaScript",
                "Created sections for tour packages, destinations, and contact details with smooth navigation.",
                "Designed reusable components and layouts to present travel information attractively."
            ],
            github: "https://github.com/anshul1606/Jingle-Holidat-Bazaar-Web-Page",
        },
    ]
    return(
         <SectionReveal>
             <section id="projects" className="py-4 px-16"> 
                <h1 className="text-4xl font-bold text-white py-3">Projects</h1>
                 <div className="max-auto rounded-3xl">
                     <Swiper autoHeight={true} modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1} className="px-4">
                         {project.map((project, index) => ( 
                            <SwiperSlide
                            key = {index}>
                            <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} overflow-hidden rounded-3xl bg-white/5 border border-[#10B981]/30 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500 relative`}>
                                <div className="md:w-[55%] overflow-hidden">
                                 {project.image && (
                                     <Image src={project.image} alt={project.title} height={1000} width={1000} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />)}
                                </div>
                                <div className="p-8 md:w-[65%] flex flex-col justify-center">
                                    <span className="text-[#10B981] font-medium">
                                        Project {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mt-2" >
                                            {project.title}
                                        </h2>
                                        <ul className="text-gray-300 mt-5 space-y-2">
                                            {project.description.map((point, i) => ( <li key={i} className=" ml-5">
                                                <span className="text-[#10B981]">
                                                    ▹
                                                </span>
                                                <span>
                                                    {point}
                                                </span> </li>
                                                 ))}
                                                </ul>
                                        <div className="flex flex-wrap gap-3 mt-6">
                                            {project.tech.map((item) => ( <span key={item} className=" rounded-full px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-sm ">
                                            {item}
                                            </span> ))} </div>
                                        <div className="flex gap-4 mt-8">
                                            <a href={project.github}
                                            className=" px-5 py-3 rounded-xl border border-white/10 text-white flex items-center gap-2 hover:text-[#10B981] hover:drop-shadow-[0_0_10px_#10B981]">
                                                GitHub
                                                <FaGithub />
                                                </a> </div>
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