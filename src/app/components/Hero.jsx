"use client";
import Image from "next/image";
import TextType from "./TextType";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal from "./ScrollReveal";
import { SiScrollreveal } from "react-icons/si";
export default function Hero() {

  const headingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
      },
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
    <SectionReveal>
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12">
        
      <h1
        ref={headingRef}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-extrabold bg-gradient-to-r from-[#eafff8] to-[#ffffff] bg-clip-text text-transparent"
      >
        Hello I'm Anshul Agrawal
      </h1>
     <div className="flex items-center justify-center gap-4 mt-6 pb-3">
        <Image src="/images/Developer_logo.png" alt="Developer" height={70} width={70} />
      <TextType
        text={[
          "Software Developer",
          "React Developer",
          "Java Developer",
        ]}
        typingSpeed={80}
        deletingSpeed={60}
        pauseDuration={1000}
        className="text-3xl text-center bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent font-semibold mt-4"
      /> 
      </div> 
      <p className="text-white text-base">
        Building modern web applications using React,
        Next.js, Java and problem-solving skills.
      </p> 
      

    </section>
  </SectionReveal>
  );
}