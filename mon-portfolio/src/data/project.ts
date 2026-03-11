export interface Project {
  id: number;
  title: string;
  slug: string;
  date: string;
  resource?: string[];
  description: string;
  technologies: string[];

  // --- NOUVEAUX CHAMPS OPTIONNELS  ---
  context?: string; // Le contexte du projet
  methodology?: string; // Explication de ta méthode (Agile, PERT, etc.)
  githubUrl?: string; // Lien vers le code
  videoUrl?: string; // Lien de la vidéo YouTube (format "embed")
  diagrams?: string[]; // Tableau contenant les chemins vers tes images UML/PERT
}

export const myProjects: Project[] = [
  {
    id: 5,
    title: "ECHO : Plateforme de Visualisation de l'Acidification des Océans",
    slug: "echo-ocean-data-visualization",
    date: "2021", 
    description: "Application web d'analyse de données Copernicus pour la sensibilisation aux enjeux climatiques.",
    technologies: ["Python (xarray)", "PHP", "JavaScript", "Firebase", "MySQL", "Chart.js"],
    context: "Ce projet a été réalisé en équipe de 5 personnes dans le cadre d'une SAÉ. L'objectif collectif était de transformer les données scientifiques complexes du 'Copernicus Marine Service' en une plateforme accessible au grand public. Le travail a nécessité une coordination étroite entre le traitement de données massives (fichiers NetCDF), la gestion d'une base de données relationnelle et le développement d'une interface utilisateur dynamique.",   
    methodology: "Pour structurer ce travail de groupe, j'ai pris l'initiative de modéliser l'architecture via des diagrammes UML (classes, séquence, contexte), garantissant une vision technique commune. J'ai également utilisé la planification PERT pour identifier les interdépendances critiques du projet. Cette rigueur, couplée à une approche Agile, nous a permis de réagir efficacement aux imprévus techniques et d'assurer l'interopérabilité entre les différents modules développés par l'équipe.",
    githubUrl: "LIEN_A_REMPLIR",
    videoUrl: "LIEN_A_REMPLIR",
    diagrams: [
      "/Echo/Diagramme_UML_Classe.drawio.png", 
      "/Echo/Diagramme_UML_sequence.png", 
      "/Echo/SAE301D_PERT.png",
      "/Echo/Architecture_pipeline.png",
      "/Echo/Architecture_pipelineDeux.png"
    ]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    slug: "e-commerce-platform",
    date: "2023-03-10",
    resource: ["sd"],
    description: "An e-commerce platform for small businesses to sell their products online.",
    technologies: ["Node.js", "Express", "MongoDB"],

    // Voici comment tu rempliras tes vrais projets :
    context: "Projet de fin d'année réalisé en équipe de 3 personnes. Mon rôle principal était de concevoir l'architecture de la base de données et de développer le frontend.",
    methodology: "Nous avons utilisé la méthode Agile (Scrum) avec des sprints d'une semaine. Avant de coder, j'ai réalisé les diagrammes UML (Cas d'utilisation et Classes) ainsi qu'un diagramme PERT pour planifier nos tâches.",
    githubUrl: "https://github.com/ton-pseudo/ton-repo",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Lien "Intégrer" de YouTube
    diagrams: ["/diagramme-uml.jpg", "/diagramme-pert.png"] // Tes images devront être dans le dossier public/
  },
];