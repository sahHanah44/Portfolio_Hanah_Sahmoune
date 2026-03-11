// src/app/projects/[slug]/page.tsx
import { myProjects } from "@/data/project"; 
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = myProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) notFound(); 

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        
        {/* En-tête du projet */}
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block font-medium">
          &larr; Retour au portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-semibold border border-blue-100">
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons d'action (GitHub) */}
        {project.githubUrl && (
          <div className="mb-12">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium">
              Voir le code sur GitHub &rarr;
            </a>
          </div>
        )}

        <hr className="my-10 border-gray-100" />

        {/* Section 1 : Vidéo Démo */}
        {project.videoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Vidéo de démonstration</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe 
                src={project.videoUrl} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Section 2 : Contexte & Rôle */}
        {project.context && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contexte & Mon Rôle</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{project.context}</p>
          </div>
        )}

        {/* Section 3 : Méthodologie */}
        {project.methodology && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Méthodologie & Conception</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.methodology}</p>
            
            {/* Affichage des diagrammes UML/PERT s'il y en a */}
            {project.diagrams && project.diagrams.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {project.diagrams.map((imgSrc, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    {/* On utilise la balise <img> classique pour faire simple ici avec des images de tailles variées */}
                    <img src={imgSrc} alt={`Diagramme ${index + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}