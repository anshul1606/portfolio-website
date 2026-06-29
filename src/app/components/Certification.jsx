"use client";
import SectionReveal from "./ScrollReveal";
import { Award } from "lucide-react";

export default function Certification() {
  const certificates = [
    {
            title: "Internship Certificate on Web Development",
            link: "https://github.com/anshul1606/UserAdmin-Hub-Web-Application-",
            description: [
                "Developed a user admin management web application using JSP, Servlet, and SQL to manage user registration, authentication, and role-based access control, ensuring secure user management and data handling."
            ],
            tools: "JSP, Servlet, SQL",
            year: "2024"
        },
        {
            title: "Certification of Internship in Java",
            description: [
                "Covers Java fundamentals, syntax, object-oriented programming, control statements, exception handling, I/O operations, and basic GUI programming, culminating in a final project to apply learned concepts."
            ],
            place: "DUCAT Noida",
            year: "2023"
        },
    ];

  return (
    <SectionReveal>
      <section id="certificates" className="py-10 px-16">
        
        <h1 className="flex items-center gap-3 text-4xl font-bold text-white mb-8">
          <Award className="text-[#10B981]" size={32} />
          Certifications
        </h1>

        <div className=" mx-auto ">
          <div className="relative flex justify-between items-start mt-16">

          <div className="absolute top-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-full"/>
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center group"
              >
                <div
                  className="w-6 h-6 rounded-full bg-[#10B981] z-10 transition-all duration-300 group-hover:scale-150"/>
                <span className="mt-3 text-[#10B981] font-bold">
                  {cert.year}
                </span>

               
                <div
                  className="mt-6 w-72 rounded-2xl bg-white/5 border border-[#10B981]/20 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#10B981]">
                  <h3 className="text-white font-bold">
                    {cert.title}
                  </h3>
                   <p className="text-gray-400 mt-2">
                    {cert.description}
                  </p>
                  <p className="text-gray-400 mt-2">
                    {cert.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </SectionReveal>
  );
}