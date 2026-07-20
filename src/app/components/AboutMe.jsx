"use client";

import Image from "next/image";
import SectionReveal from "./ScrollReveal";
import { useMotionTemplate, useMotionValueEvent, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const translateContent = useTransform(scrollYProgress, [0, 1], [-100, 200] );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0,1,0]);
  const blur = useSpring(useTransform(scrollYProgress, [0.5,1], [0, 3]), {
    stiffness: 30,
    damping: 20,
    mass: 10,
  },);
  const scale = useTransform(scrollYProgress, [0.5,1], [1,0.8]);
  return (
    <section 
    ref={ref} 
      id="about" 
      className="relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-4 sm:px-8 md:px-10 lg:px-16 pt-0 pb-5 md:pb-20"
    >
      
      {/* Text Content */}
      <motion.div 
      style={{
        y: translateContent,
        opacity: opacityContent,
        sclae: scale,
      }}
      className="flex-1 w-full">
        <SectionReveal>
          <div className="bg-transparent rounded-3xl flex flex-col items-center md:items-start text-center md:text-left mx-auto">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed w-full">
              Hi, I'm <span className="text-[#10B981] font-semibold">Anshul Agrawal</span>, a Computer Science graduate specialized in Artificial Intelligence with a strong foundation in Software Development, Data Structures, Algorithms, and Database Management Systems.
              <br /> <br />
              I specialize in building responsive and user-friendly web applications using <span className="text-[#10B981]">React.js</span>, <span className="text-[#10B981]">Next.js</span>, <span className="text-[#10B981]">Java</span>, and <span className="text-[#10B981]">Tailwind CSS</span>. I enjoy transforming ideas into scalable digital solutions with clean code and modern design principles.
              <br /><br />
              Currently, I am seeking an opportunity as a React Developer where I can contribute my technical skills, problem-solving abilities, and passion for continuous learning while delivering impactful solutions.
            </p>
            
          </div>
        </SectionReveal>
      </motion.div>

      {/* Image */}
      <motion.div
      style={{
        filter: useMotionTemplate`blur(${blur}px)`,
      }}
      className="w-full flex justify-center md:w-auto md:justify-end">
        <SectionReveal>
          <div className="relative rounded-full p-1 border-2 border-[#10B981]/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] mx-auto">
            <Image 
              src="/images/About-image.webp" 
              alt="Anshul Agrawal" 
              height={360} 
              width={360} 
              className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover"
            />
          </div>
        </SectionReveal>
      </motion.div>
      
    </section>
  );
}