"use client";
import gsap from "gsap";
import SectionReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";
import { useRef, useLayoutEffect } from "react";
export default function Education(){
    const education = [
    {
      degree: "B.Tech in Computer Science (AI)",
      institute: "ABES Institute of Technology",
      year: "2021 - 2025",
      score: "CGPA: 7.7"
    },
    {
      degree: "Class XII",
      institute: "CSHP Public School",
      year: "2020 - 2021",
      score: "Percentage: 80%"
    },
    {
      degree: "Class X",
      institute: "CSHP Public School",
      year: "2018 - 2019",
      score: "Percentage: 87%"
    }
  ];
  const capRef = useRef(null);
  const lineRef = useRef(null);
  const timeline = useRef(null);
  const cardRefs = useRef([]);
  const travelRef = useRef(0);
  useLayoutEffect(() => {
  const line = lineRef.current;
  const cap = capRef.current;

  if (!line || !cap) return;

  const travel = line.offsetHeight;
  travelRef.current = travel;

  timeline.current = gsap.timeline({
    repeat: -1,
    defaults: {
      ease: "none",
    },
  });

  timeline.current
    .to(cap, {
      y: travel,
      duration: 4,
    })
    .to(cap, {
      y: 0,
      duration: 4,
    });

  return () => timeline.current.kill();
}, []);
    return(
        <SectionReveal>
        <section id="education" className="px-16 py-4">
        <h1 className="text-4xl font-bold text-white py-3">Education</h1>
        <div  className="relative ml-1 mt-3 px-8">
          <div ref={lineRef} className="absolute left-0 top-24 w-[2px] bg-[#10B981]/40"
          style={{
            height: "calc(100% - 180px)"
          }}  />
        <div ref={capRef} className="absolute -left-[15px] top-24 w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.8)] ">
          <GraduationCap size={16} className="text-black" />
        </div>
                {education.map((edu, index) => (
                <div key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => {
                  timeline.current.resume();
                  const card = cardRefs.current[index];
                  const lineRect = lineRef.current.getBoundingClientRect();
                  const cardRect = card.getBoundingClientRect();
                  const target =
                  cardRect.top -
                  lineRect.top +
                  cardRect.height / 2 -
                  capRef.current.offsetHeight / 2;
                  gsap.to(capRef.current,{
                  y:target,
                  duration:0.35,
                  overwrite:true,
                  });
                }}
                onMouseLeave={() => {
                  gsap.set(capRef.current, {
                    y: gsap.getProperty(capRef.current, "y"),});
                    timeline.current.resume();
                }}
                    className="mb-5 relative">
                      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-[#10B981]/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500">
                    <h2 className="text-2xl font-bold text-white mt-2">{edu.degree}</h2>
                    <p className="text-gray-300 mt-2">
                    {edu.institute}
                    </p>
                    <span className="text-[#10B981] font-medium">
                        {edu.year}
                    </span>

                    <p className="text-[#06B6D4] font-medium mt-3">
                        {edu.score}
                    </p>
                  </div>
                </div>
                ))}
        </div>
        </section>
        </SectionReveal>
    );
}