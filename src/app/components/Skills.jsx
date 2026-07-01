"use client";
import SectionReveal from "./ScrollReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState, useRef, useEffect } from "react";
import { FaReact, FaJava, FaPhone } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi"; 
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import gsap from "gsap";

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
  const[openIndex, setOpenIndex] = useState(0);
  const skillRefs = useRef([]);
  const arrowRef = useRef(null);
  const skillsRef = useRef(null);
  useEffect(() => {
  // Floating animation
  gsap.to(arrowRef.current, {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
  });

  // Horizontal scroll animation
  gsap.to(arrowRef.current, {
    x:() =>  window.innerWidth * 0.35,
    ease: "none",

    scrollTrigger: {
      trigger: skillsRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
}, []);
  return (
    <SectionReveal>
      <section id="skills" ref={skillsRef} className="py-10 px-16">
        <div  className="flex justify-between">
          <div className="flex items-start gap-20">
          <div className="w-1/2 sticky top-28 self-start">
            <div className="lg:sticky">
              <h1 className="text-white font-extrabold py-6">Skills</h1>
            </div>
            <div className="lg:sticky">
              <p className="text-white">Computer Science student in ABESIT, specialized in Artificial Intelligence, passionate about web development and design.</p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent my-10"></div>
            <div>
              <a href="tel:+919205137992" className="text-white font-bold flex items-center gap-2"><AnimatedText text="CONTACT ME" /><FaPhone size={15}/></a>
            </div>
            <div ref={arrowRef} className="py-10">
              <Image src="/images/arrow-image.png" alt="Arrow" className="w-20 h-20" height={80} width={80} />
            </div>
          </div>
          </div>

          <div className="w-1/2 px-20">
            <div className="flex items-center justify-between cursor-pointer"></div>
              {skillGroups.map((group,index) => (
                <div
                  key={group.title}
                  className="py-8"
                >
                  <div onClick={() => {
                    const isOpening = openIndex !== index;
                    setOpenIndex(isOpening ? index : null);
                    if(isOpening){
                      requestAnimationFrame(() => {
                        gsap.fromTo(
                          skillRefs.current[index],
                          {
                            opacity: 0,
                            y: 20,
                            scale: 0.9,
                          },
                          {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.45,
                            stagger: 0.07,
                            ease: "back.out(1.7)",
                          }
                        );
                      }, 300);
                    }
                  }}
                   className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-white font-bold text-lg">
                      {group.title}
                    </h2>
                    <span><Image src="/images/add.png" alt="Plus image" height={20} width={20} className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`} /></span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mt-5" : "max-h-0"}`}>
                    <div className="grid grid-rows-2 gap-3 py-4">
                      {group.skills.map((skill, skillIndex) => (
                        <div key={skill.name}
                          ref={(el) => {
                            if(!skillRefs.current[index]){
                              skillRefs.current[index] = [];
                            }
                            skillRefs.current[index][skillIndex] = el;
                          }}
                          className="flex items-center gap-3 bg-white/5 rounded-lg p-3 overflow-hidden"
                        >
                          <span className="text-[#10B981] text-xl">
                            {skill.icon}
                          </span>
                          <span className="text-white">
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
      </section>
    </SectionReveal>
  );
}



{/* <h1 className="text-4xl font-bold text-white">
          Skills
        </h1>

        <p className=" text-gray-400 mt-3 mb-10">
          Technologies I use to build scalable and modern applications
        </p>

        <div className="grid md:grid-cols-2 gap-8 mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-[#10B981]/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500">
              <h2 className="text-xl font-bold text-white mb-5">
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className=" flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981]/10  border border-[#10B981]/30 text-[#10B981] font-medium hover:bg-[#10B981] hover:text-black hover:scale-110 transition-all duration-300">
                    {skill.name}
                    {skill.icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}