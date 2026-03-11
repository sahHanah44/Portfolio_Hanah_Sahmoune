import ProjectsSection from "@/components/sections/ProjectsSection";
import Hero from "@/components/sections/Hero"


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <Hero />     
      <ProjectsSection />
      
      {/* Plus tard, tu ajouteras <Footer /> ici */}
    </main>
  );
}