import Image from "next/image";
import Navbar from "./components/Navbar";
import BgImage from "./components/BgImage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certification from "./components/Certification"; 
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import TextType from "./components/TextType";



export default function Home() {
  return (
    <>
    <main className=" w-full relative">
      <BgImage />
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />  
      <Projects />
      <Certification />  
      <ScrollReveal />
      <TextType />
    </main>
    
    </>
  );
}
