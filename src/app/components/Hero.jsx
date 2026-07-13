"use client";

import Image from "next/image";
import TextType from "./TextType";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal from "./ScrollReveal";

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-12">
      
  
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6">
        
        <SectionReveal>
          
          <div className="flex flex-col items-center justify-center text-center">
            
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight bg-gradient-to-r from-[#eafff8] to-[#ffffff] bg-clip-text text-transparent px-2"
            >
              Hello I'm Anshul Agrawal
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 pb-3">
              <Image 
                src="/images/Developer_logo.png" 
                alt="Developer" 
                height={70} 
                width={70} 
                className="w-14 h-14 sm:w-[70px] sm:h-[70px] object-contain" 
              />
              <TextType
                text={[
                  "Software Developer",
                  "React Developer",
                  "Java Developer",
                ]}
                typingSpeed={80}
                deletingSpeed={60}
                pauseDuration={1000}
                className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent font-semibold"
              /> 
            </div> 

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg mt-4 sm:mt-2 leading-relaxed">
              Building modern web applications using React, Next.js, Java and problem-solving skills.
            </p> 

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}