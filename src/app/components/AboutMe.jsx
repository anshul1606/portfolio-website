"use client"
import SectionReveal from "./ScrollReveal"
export default function AboutMe(){
    return(
        <SectionReveal>
        <section id="about" className="relative px-2 md:px-10 lg:px-16 py-3">
            <div className=" bg-transparent rounded-3xl">
                <h1 className="text-4xl font-bold text-white py-3">About Me</h1>
                <p className="text-gray-200">Hi, I'm <span className="text-[#10B981] font-semibold">Anshul Agrawal</span>, a Computer Science graduate specialized in Artificial Intelligence with a strong foundation in Software Development, Data Structures, Algorithms, and Database Management Systems.
                <br /> < br />
                 I specialize in building responsive and user-friendly web applications using <span className="text-[#10B981]"> React.js</span>, <span className="text-[#10B981]"> Next.js</span>, <span className="text-[#10B981]"> Java</span>, and <span className="text-[#10B981]"> Tailwind CSS</span>. I enjoy transforming ideas into scalable digital solutions with clean code and modern design principles.
                 <br /><br />
                 Currently, I am seeking an opportunity as a React Developer where I can contribute my technical skills, problem-solving abilities, and passion for continuous learning while delivering impactful solutions.
                </p>
            </div>
        </section></SectionReveal>
    );
}