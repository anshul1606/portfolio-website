"use client";
import SectionReveal from "./ScrollReveal";
import { FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si";

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
      skills: [{ name: "MySQL", icon: <SiMysql />}, {name:"SQL"}],
    },
    {
      title: "Core CS",
      skills: [{name:"DSA"}, {name:"OOP"}, {name:"DBMS"}],
    },
  ];

  return (
    <SectionReveal>
      <section id="skills" className="py-10 px-16">
        <h1 className="text-4xl font-bold text-white">
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
        </div>
      </section>
    </SectionReveal>
  );
}