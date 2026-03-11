// src/app/projects/[slug]/page.tsx
import { myProjects } from "../../../data/project";
import { notFound } from "next/navigation"; // Outil Next.js pour gérer les 404
import Link from "next/link";


// NOUVEAU NEXT 16 : On ajoute "async" et "Promise"
export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. NOUVEAU NEXT 16 : On utilise "await" pour attendre que l'URL soit lue
  const resolvedParams = await params;
  const slugUrl = resolvedParams.slug;

  // 2. On cherche le projet
  const project = myProjects.find((p) => p.slug === slugUrl);

  // 3. Si aucun projet ne correspond à l'URL, on affiche la page 404
  if (!project) {
    notFound(); 
  }

  // 4. Si on a trouvé, on affiche la page
  return (
    <main className="min-h-screen bg-white text-gray-900 py-12 px-4 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
        &larr; Retour à l'accueil
      </Link>

      <h1 className="text-4xl font-extrabold mb-4">{project.title}</h1>
      
      <div className="flex gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-lg leading-relaxed text-gray-700">
        Ceci est la page détaillée pour le projet <strong>{project.title}</strong>.<br/><br/>
        Description : {project.description}
      </p>
    </main>
  );
}