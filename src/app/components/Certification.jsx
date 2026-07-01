"use client";
import SectionReveal from "./ScrollReveal";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Award } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
const sectionRef = useRef(null);
const lineRef = useRef(null);
const dotRefs = useRef([]);
const cardRefs = useRef([]);

useEffect(() => {
  const first = dotRefs.current[0];
  const second = dotRefs.current[1];

  if (!first || !second) return;

  const container = sectionRef.current.querySelector(".timeline");

  const containerRect = container.getBoundingClientRect();
  const firstRect = first.getBoundingClientRect();
  const secondRect = second.getBoundingClientRect();

  const startX =
    firstRect.left -
    containerRect.left +
    firstRect.width / 2;

  const width =
    (secondRect.left + secondRect.width/2)
      -
    (firstRect.left + firstRect.width/2);

  gsap.set(lineRef.current, {
    left: startX,
    width: 0,
  });

  gsap.set(cardRefs.current, {
    opacity: 0,
    y: 60,
  });

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top 75%",
    end: "bottom top",

    onEnter: playAnimation,
    onEnterBack: playAnimation,

    onLeaveBack() {
      gsap.set(lineRef.current, { width: 0 });

      gsap.set(cardRefs.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(dotRefs.current, {
        boxShadow: "0 0 0 rgba(16,185,129,0)"
      });
    }
  });

  function playAnimation() {

    gsap.fromTo(
      lineRef.current,
      {
        width: 0,
      },
      {
        width,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.to(dotRefs.current, {
      boxShadow: "0 0 20px rgba(16,185,129,.8)",
      stagger: .2,
      duration: .5,
    });

    gsap.to(cardRefs.current, {
      opacity: 1,
      y: 0,
      duration: .8,
      stagger: .25,
      ease: "power3.out",

      onComplete() {

        gsap.to(cardRefs.current, {
          y: -10,
          repeat: -1,
          yoyo: true,
          stagger: .25,
          duration: 2,
          ease: "sine.inOut"
        });

      }
    });

  }

  return () => ScrollTrigger.killAll();

}, []);
return (
      <section id="certificates" ref={sectionRef} className="py-8 px-16">
        
        <h1 className="flex items-center gap-3 text-4xl font-bold text-white mb-8">
          <Award className="text-[#10B981]" size={32} />
          Certifications
        </h1>

        <div className=" mx-auto">
          <div className="relative flex justify-between items-start mt-16 timeline">

          <div  ref={lineRef} className="absolute top-[11px] h-[3px] rounded-full bg-gradient-to-r from-[#10B981] to-[#06B6D4]"/>
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center group"
              >
                <div
                  ref={(el) => (dotRefs.current[index] = el)}
                  className="w-6 h-6 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981] z-10"/>
                <span className="mt-3 text-[#10B981] font-bold">
                  {cert.year}
                </span>

               
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent my-10"></div>

      </section>
    
  );
}