"use client";
import SectionReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";
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
    return(
        <SectionReveal>
        <section id="education" className="px-16 py-4">
        <h1 className="text-4xl font-bold text-white py-3">Education</h1>
        <div className="border-l-2 border-[#10B981]/40 ml-1 mt-3 px-8">
                {education.map((edu, index) => (
                <div
                    key={index}
                    className="mb-5 relative">
                    <div className="absolute -left-[47px] top-20 w-6 h-6 rounded-full bg-[#10B981]  flex items-center justify-center">
                    <GraduationCap size={14} className="text-black" />
                    </div>
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