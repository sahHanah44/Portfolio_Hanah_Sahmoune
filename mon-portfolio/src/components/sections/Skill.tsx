
export default function Skills() {
  // On prépare nos données dans un petit tableau pour que ce soit facile à modifier
  const skillCategories = [
    {
      title: " Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma"],
    },
    {
      title: " Backend & BDD",
      skills: ["PHP", "Node.js", "MySQL", "PostgreSQL", "API REST"],
    },
    {
      title: " Outils & Environnement",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Méthodologie Agile"],
    }
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto bg-white rounded-3xl shadow-sm my-12 border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
        Mes Compétences
      </h2>

      {/* La grille qui va s'adapter : 1 colonne sur mobile, 3 sur grand écran */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        
        {/* On boucle sur nos catégories */}
        {skillCategories.map((category) => (
          <div key={category.title} className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {/* On boucle sur les compétences de chaque catégorie */}
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}