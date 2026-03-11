import ProjectCard from "../ui/ProjectCard";
import { myProjects } from "@/data/project";

export default function ProjectsSection() {
  return (
        <section id="projets" className="py-12 px-4 max-w-4xl mx-auto pt-20">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Mes Projets</h2>
      
      {/* La fameuse boucle .map() de React */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myProjects.map((projetItem) => (
          <ProjectCard 
            key={projetItem.id} 
            project={projetItem} // On passe toutes les infos du projet à notre carte !
          />
        ))}
      </div>
    </section>
  );
}