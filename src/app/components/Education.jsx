"use client";
import gsap from "gsap";
import SectionReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Education() {
  const education = [
    { degree: "B.Tech in Computer Science (AI)", institute: "ABES Institute of Technology", year: "2021 - 2025", score: "CGPA: 7.7" },
    { degree: "Class XII", institute: "CSHP Public School", year: "2020 - 2021", score: "Percentage: 80%" },
    { degree: "Class X", institute: "CSHP Public School", year: "2018 - 2019", score: "Percentage: 87%" }
  ];

  const capRef = useRef(null);
  const lineRef = useRef(null);
  const timeline = useRef(null);
  const cardRefs = useRef([]);

  
  useEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const line = lineRef.current;
      const cap = capRef.current;
      if (!line || !cap) return;

      const calculateAndAnimate = () => {
        
        if (timeline.current) timeline.current.kill();
        
        
        const travel = line.offsetHeight - cap.offsetHeight; 
        
        timeline.current = gsap.timeline({ repeat: -1, yoyo: true })
          .to(cap, { y: travel, duration: 4, ease: "none" });
      };

      
      const timer = setTimeout(() => {
        calculateAndAnimate();
      }, 100);

      
      window.addEventListener("resize", calculateAndAnimate);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", calculateAndAnimate);
        if (timeline.current) timeline.current.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionReveal>
      <section id="education" className="px-4 sm:px-8 md:px-16 py-12 md:py-20 max-w-5xl mx-auto overflow-hidden">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left">Education</h2>
        
        <div className="relative ml-4 md:ml-8 pl-6 md:pl-8 border-l-2 border-[#10B981]/40">
          
          {/* Animated Cap */}
          <div ref={capRef} className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#10B981] hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.8)] z-10">
            <GraduationCap size={16} className="text-black" />
          </div>

          <div ref={lineRef} className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                
                
                onMouseEnter={() => {
                  if (window.innerWidth >= 768) {
                    if (timeline.current) timeline.current.pause(); 
                    
                    const card = cardRefs.current[index];
                    
                    const target = card.offsetTop + (card.offsetHeight / 2) - 14; 
                    
                    gsap.to(capRef.current, { y: target, duration: 0.35, overwrite: true });
                  }
                }}
                
                onMouseLeave={() => {
                  if (window.innerWidth >= 768) {
                    gsap.set(capRef.current, { y: gsap.getProperty(capRef.current, "y") });
                    if (timeline.current) timeline.current.resume();
                  }
                }}
                
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-6 hover:border-[#10B981]/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300">
                  <h3 className="text-lg md:text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm md:text-base mt-1">{edu.institute}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2">
                    <span className="text-[#10B981] font-medium text-sm">{edu.year}</span>
                    <span className="text-[#06B6D4] font-medium text-sm">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}