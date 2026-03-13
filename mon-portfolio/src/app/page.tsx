import ProjectsSection from "@/composents/sections/ProjectsSection";
import Hero from "@/composents/sections/Hero"
import About from "@/composents/sections/About"
import Skill from "@/composents/sections/Skill"
import Contact from "@/composents/sections/Contact"



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <Hero />     
      <About />
      <Skill />
      <ProjectsSection />

      <Contact />
      
    </main>
  );
}