import ProjectsSection from "@/components/sections/ProjectsSection";
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skill from "@/components/sections/Skill"
import Contact from "@/components/sections/Contact"



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