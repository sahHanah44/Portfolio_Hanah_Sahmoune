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
    id: 4,
    slug: "monitoring-hydrometrie-hubeau",
    title: "EcoStream : Visualisation Hydrométrique en Temps Réel",
    date: "33",
    description: "Application web d'exploitation des données de l'API Hub'Eau pour le suivi des cours d'eau.",
    technologies: ["Python (Flask)", "SQLite / MongoDB", "JavaScript (Leaflet.js)", "API Hub'Eau", "Git"],
    context: "Ce projet, réalisé en équipe de 6, visait à concevoir un outil de monitoring des cours d'eau français en exploitant l'API Hub'Eau. L'objectif était de collecter des données massives (stations et mesures), de les stocker localement pour optimisation, et de les restituer via une interface interactive incluant une carte de France dynamique et des tableaux de bord analytiques.",
    methodology: "Le projet a été piloté via la méthode Agile SCRUM, structurée par des sprints d'une semaine et des daily scrums pour fluidifier le travail d'équipe. En charge de la partie conception, j'ai réalisé la modélisation du schéma relationnel (Diagramme E.R) et la planification PERT pour sécuriser le rendu. J'ai également participé à la mise en place du pipeline ETL pour automatiser la récupération et l'insertion des données de l'API vers notre base de données locale.",
    githubUrl: "LIEN_A_REMPLIR",
    videoUrl: "LIEN_A_REMPLIR",
    diagrams: [
      "/Hubleau/DiagrammeER.png",
      "/Hubleau/D_PERT.png",

    ]
  }, 
  {
    id: 3,
    slug: "velib",
    title: "Vélib : ",
    date: "33",
    description: "  ",
    technologies: ["Python ", "SQLite ", "Git"],
    context: " ",
    methodology: "",
    githubUrl: "LIEN_A_REMPLIR",
    videoUrl: "LIEN_A_REMPLIR",
    diagrams: [
      "/Hubleau/DiagrammeER.png",
      "/Hubleau/D_PERT.png",

    ]
  },

  {
    id: 3,
    slug: "infrastructure-services-reseau-debian",
    title: "Déploiement d'une Infrastructure de Services Réseau",
    description: "Conception et mise en place d'une architecture réseau sécurisée sous Debian (DHCP, SSH, Web, FTP).",
    date:" ",
    technologies: ["Debian (CLI)", "VirtualBox", "Apache2", "DHCP Server", "OpenSSH", "VSFTPD"],
    context: "Ce projet consistait à mettre en place une maquette d'infrastructure réseau complète sous Linux Debian au sein d'une équipe de trois personnes. L'objectif était de configurer un serveur central distribuant des services critiques (DHCP, Web, FTP) à un parc de machines clientes, tout en garantissant un accès externe sécurisé via un bastion SSH.",
    methodology: "La réussite du déploiement a reposé sur une gestion rigoureuse des configurations système et une documentation technique précise. J'ai utilisé une approche de planification par tâches pour isoler les services et tester l'interopérabilité à chaque étape. J'ai notamment piloté la sécurisation des accès via l'authentification par clé publique (SSH/SFTP) et la gestion fine des permissions (ACL) pour les serveurs de fichiers, assurant ainsi la conformité au cahier des charges de sécurité.",
    githubUrl: "LIEN_A_REMPLIR",
    videoUrl: "LIEN_A_REMPLIR",
    diagrams: [
      "/schema-topologie-reseau.png",
      "/configuration-bastion-ssh.png",
      "/planification-services.png"
    ]
  }
];