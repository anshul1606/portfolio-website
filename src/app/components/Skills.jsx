"use client";

import SectionReveal from "./ScrollReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect } from "react";
import { FaReact, FaJava, FaPhone } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi"; 
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import gsap from "gsap";

// Register plugin outside component lifecycle to prevent issues
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [{name:"React", icon:<FaReact />}, {name: "Next.js", icon:<SiNextdotjs />}, { name: "Tailwind CSS", icon: <SiTailwindcss /> }, { name:"JavaScript", icon: <SiJavascript />}],
    },
    {
      title: "Backend",
      skills: [{name:"Java", icon: <FaJava />}],
    },
    {
      title: "Database",
      skills: [{ name: "MySQL", icon: <SiMysql />}, {name:"SQL", icon: <PiFileSqlBold />}],
    },
    {
      title: "Core CS",
      skills: [{name:"DSA", icon: <Image src="/images/dsa_logo.png" alt="DSA" height={20} width={20} className="rounded-full" />}, {name:"OOPs", icon: <Image src="/images/oops.png" alt="OOPs" height={20} width={20} className="rounded-full" />}, {name:"DBMS", icon: <Image src="/images/dbms.png" alt="DBMS" height={20} width={20} className="rounded-full" />}],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const skillRefs = useRef([]);
  const arrowRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Floating animation (Runs on all devices)
    gsap.to(arrowRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
    });

    // MatchMedia ensures horizontal scroll animation ONLY runs on desktop
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      gsap.to(arrowRef.current, {
        x: () => window.innerWidth * 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });

    return () => mm.revert(); // Cleanup GSAP matchMedia on unmount
  }, []);

  return (
    <SectionReveal>
      {/* Responsive section padding and layout boundaries */}
      <section id="skills" ref={skillsRef} className="w-full max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* Changed to flex-col on mobile, side-by-side on lg screens */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 w-full">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 lg:sticky top-28 self-start">
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-extrabold py-4 md:py-6">Skills</h2>
            </div>
            <div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Computer Science student in ABESIT, specialized in Artificial Intelligence, passionate about web development and design.
              </p>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent my-8 md:my-10"></div>
            
            <div>
              <a href="tel:+919205137992" className="text-[#10B981] font-bold flex items-center gap-2 hover:text-white transition-colors w-fit">
                <AnimatedText text="CONTACT ME" />
                <FaPhone size={15} />
              </a>
            </div>
            
            {/* Arrow hidden on mobile, visible on desktop */}
            <div ref={arrowRef} className="hidden lg:block py-10">
              <Image src="/images/arrow-image.png" alt="Arrow" className="w-20 h-20" height={80} width={80} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col w-full">
            <div className="flex flex-col w-full">
              {skillGroups.map((group, index) => (
                <div key={group.title} className="py-4 md:py-6 border-b border-white/10 last:border-0">
                  
                  {/* ACCORDION HEADER */}
                  <div 
                    onClick={() => {
                      const isOpening = openIndex !== index;
                      setOpenIndex(isOpening ? index : null);
                      if(isOpening){
                        requestAnimationFrame(() => {
                          gsap.fromTo(
                            skillRefs.current[index],
                            { opacity: 0, y: 20, scale: 0.9 },
                            { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.07, ease: "back.out(1.7)" }
                          );
                        });
                      }
                    }}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-[#10B981] transition-colors">
                      {group.title}
                    </h3>
                    <span className="flex-shrink-0">
                      <Image 
                        src="/images/add.png" 
                        alt="Toggle" 
                        height={20} 
                        width={20} 
                        className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${openIndex === index ? "rotate-45 opacity-70" : ""}`} 
                      />
                    </span>
                  </div>
                  
                  {/* ACCORDION CONTENT */}
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mt-4 md:mt-5 opacity-100" : "max-h-0 opacity-0"}`}>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                      {group.skills.map((skill, skillIndex) => (
                        <div 
                          key={skill.name}
                          ref={(el) => {
                            if(!skillRefs.current[index]){
                              skillRefs.current[index] = [];
                            }
                            skillRefs.current[index][skillIndex] = el;
                          }}
                          className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 overflow-hidden"
                        >
                          <span className="text-[#10B981] text-xl flex-shrink-0">
                            {skill.icon}
                          </span>
                          <span className="text-white text-sm md:text-base truncate">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>    

        </div>
      </section>
    </SectionReveal>
  );
}