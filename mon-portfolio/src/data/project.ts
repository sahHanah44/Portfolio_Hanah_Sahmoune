export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  role: string;
  date: string;
  resource?: string[];
  description: string;
  technologies: string[];

  // --- NOUVEAUX CHAMPS OPTIONNELS  ---
  context?: string; // Le contexte du projet
  methodology?: string; // Explication de ta méthode (Agile, PERT, etc.)
  results: string; // L'impact et le bilan
  githubUrl?: string; // Lien vers le code
  videoUrl?: string; // Lien de la vidéo YouTube (format "embed") ou ressource
  diagrams?: string[]; // Tableau contenant les chemins vers tes images UML/PERT
}

export const myProjects: Project[] = [
  {
    id: 8,
    slug: "moteur-scoring-ia-boondmanager",
    category: "Projet d'Entreprise (Stage)",
    role: "Développeuse IA & Intégration",
    date: "04/2026 – 06/2026",
    title: "Moteur de Scoring IA : Matching CV & Besoins",
    description: "Agent IA d'analyse et de scoring de CV intégré à BoondManager, garantissant une évaluation déterministe, clinique et 100% RGPD.",
    technologies: [
      "Python (FastAPI)",
      "Pydantic AI",
      "Mistral",
      "Docker",
      "Scalingo / Render",
      "BoondManager API"
    ],
    context: "L'équipe commerciale passait un temps considérable à analyser manuellement l'adéquation entre des CVs complexes et des offres de mission.  L'objectif était de développer un outil interne encapsulé directement dans leur ERP (BoondManager), capable d'automatiser cette analyse de manière fiable.   Le défi majeur était double : éviter les biais et hallucinations classiques des LLMs, et concevoir une architecture 100% conforme au RGPD (aucune conservation de données externes).",
    methodology: "J'ai conçu un moteur d'inférence déterministe propulsé par Mistral et structuré par Pydantic AI, accessible via une API FastAPI indépendante. Côté architecture, j'ai opté pour un modèle 'Stateless' déployé via Docker sur un cloud européen : les CVs sont traités en mémoire vive et détruits immédiatement. Côté intelligence, j'ai appliqué un prompt engineering 'Zéro Bullshit' : l'IA est bridée par un barème mathématique strict et obligée de justifier chaque note via un format clinique de traçabilité ([Besoin] exige X / [CV] présente Y). J'ai également implémenté une sécurité 'Fail-Fast' pour plafonner les profils administrativement incompatibles et un double mode de saisie (API/Manuel) pour garantir la résilience de l'outil.",
    results: "Mise en production d'un outil d'aide à la décision instantané et sans friction pour les ingénieurs d'affaires. Sans quitter leur environnement de travail (iFrame), ils obtiennent en quelques secondes une synthèse télégraphique et un score fiable épuré de tout biais géographique ou déduction hasardeuse, optimisant drastiquement la phase de présélection des candidats.",
    diagrams: []
  },
  {
    id: 7,
    slug: "Cockpit-Jobboard",
    category: "Projet Personnel",
    role: "Unique conceptrice, développeuse et chef de projet",
    date: "05/2026 – en cours",
    title: "Cockpit de Recherche d'Alternance — 'Le Centaure'",
    description: "Système semi-automatisé de recherche d'alternance : scraping multi-sources, filtrage IA, génération de lettres personnalisées et workflow de candidature en moins de 60 secondes.",
    technologies: [
      "Python",
      "Streamlit",
      "MongoDB",
      "Google Gemini 2.5 Flash",
      "REST API",
      "BeautifulSoup",
      "FPDF2",
      "Pyperclip",
      "Pandas"
    ],
    context: "Face à la compétitivité du marché de l'alternance, j'ai eu besoin d'un outil pour automatiser ma recherche d'emploi. L'idée centrale est celle du 'Centaure' : un système hybride où l'IA fait le travail intellectuel (analyse, rédaction, scoring) et l'humain garde le contrôle de l'envoi final. L'objectif était de créer un workflow complet — de la découverte de l'offre à l'ouverture du formulaire — pour postuler massivement sans perdre en qualité.",
    methodology: "J'ai adopté une architecture modulaire en 4 piliers indépendants (méthode Agile) : le Radar (scrapers BeautifulSoup/API), la Mémoire (MongoDB avec logique Upsert intelligente pour la gestion des statuts), le Cerveau (Gemini avec ingénierie de prompt stricte et blacklist de mots), et le Cockpit (dashboard Streamlit interactif). J'ai implémenté une logique de filtrage à 3 niveaux : élimination par mots interdits, validation par mots-clés CV, et scoring de pertinence /100.",
    results: "Déploiement d'un workflow fonctionnel permettant de traiter une offre de A à Z en moins de 60 secondes. L'outil génère instantanément des lettres de motivation ultra-personnalisées au format PDF, optimisant considérablement le temps de candidature tout en conservant une approche sur-mesure pour chaque entreprise.",
    githubUrl: "https://github.com/sahHanah44/Automatisation_jobBoard",
    videoUrl: "https://www.youtube.com/embed/dgTpKXpZMws",
    diagrams: [
      "/cokpit/architecture_Cokpit.png"
    ]
  },
  {
    id: 6,
    slug: "portfolio-personnel-nextjs",
    category: "Projet Personnel",
    role: "Architecte Web & Développeuse Front-End",
    date: "03/2026 – en cours",
    title: "Portfolio Personnel — Hanah.dev",
    description: "Portfolio évolutif conçu pour grandir avec ma carrière de développeuse.",
    technologies: [
      "Next.js 15 (App Router)",
      "TypeScript",
      "CSS Modules",
      "Framer Motion",
      "Vercel"
    ],
    context: "Ce projet de long terme est mon portfolio professionnel, conçu pour évoluer avec ma carrière de développeuse. L'objectif n'était pas seulement de créer une vitrine visuelle, mais de construire une base technique robuste, évolutive et maintenable, capable d'accueillir facilement mes futurs projets, mes nouvelles compétences et mes ambitions grandissantes.",
    methodology: "Dès la phase de conception, j'ai modélisé l'architecture complète via un diagramme UML de composants. Cette modélisation m'a permis d'anticiper les dépendances entre les composants UI et le routing dynamique App Router avant d'écrire la moindre ligne de code. J'ai ensuite appliqué une démarche itérative Agile : chaque fonctionnalité (animations au scroll, système de particules, galerie de diagrammes) a été développée, testée et validée indépendamment.",
    results: "Création d'une application web performante et modulaire. L'architecture en place me permet aujourd'hui d'ajouter de nouveaux projets de manière purement dynamique via un fichier de configuration structuré, sans avoir à retoucher le code de l'interface utilisateur.",
    githubUrl: "https://github.com/sahHanah44/Portfolio_Hanah_Sahmoune/tree/main",
    diagrams: [
      "/Portfolio/Arborescence_de_Composants.png"
    ]
  },
  {
    id: 5,
    slug: "echo-ocean-data-visualization",
    category: "Projet Universitaire",
    role: "Référente Architecture & Développeuse Full-Stack (Équipe de 5)",
    date: "09/2025-01/2026", 
    title: "ECHO : Plateforme de Visualisation de l'Acidification des Océans",
    description: "Application web d'analyse de données Copernicus pour la sensibilisation aux enjeux climatiques.",
    technologies: ["Python (xarray)", "PHP", "JavaScript", "Firebase", "MySQL", "Chart.js"],
    context: "Dans le cadre d'un projet universitaire en équipe de 5, nous devions transformer les données scientifiques brutes et complexes du 'Copernicus Marine Service' en une plateforme interactive accessible au grand public. Le défi technique principal résidait dans la coordination autour de l'extraction de données massives (fichiers NetCDF) et leur restitution visuelle.",   
    methodology: "Pour structurer le travail de l'équipe, j'ai pris l'initiative de modéliser l'architecture globale via des diagrammes UML (classes, séquence, contexte). J'ai également planifié les interdépendances critiques du projet via un diagramme PERT. Nous avons travaillé en méthode Agile pour assurer l'interopérabilité continue entre le traitement de données en Python, la base de données relationnelle et l'interface utilisateur web dynamique.",
    results: "Déploiement d'une application web cohérente intégrant des visualisations interactives (Chart.js, cartographie). La rigueur de la planification technique a permis à l'équipe de réagir efficacement aux imprévus et de livrer un projet interopérable dans les délais impartis.",
    githubUrl: "https://github.com/Nayarr/Echo",
    videoUrl: "https://www.youtube.com/embed/TQH4PnAwWao",
    diagrams: [
      "/Echo/Diagramme_UML_Classe.drawio.png", 
      "/Echo/Diagramme_UML_sequence.png", 
      "/Echo/Diagramme_PERT.png",
      "/Echo/Architecture_pipeline.png",
      "/Echo/Architecture_pipelineDeux.png"
    ]
  },
  {
    id: 4,
    slug: "monitoring-hydrometrie-hubeau",
    category: "Projet Universitaire",
    role: "Concepteur BDD & Développeuse Data/Backend (Équipe de 6)",
    title: "Hubleau : Visualisation Hydrométrique en Temps Réel",
    date: "06/2025",
    description: "Application web d'exploitation des données de l'API Hub'Eau pour le suivi des cours d'eau.",
    technologies: ["Python (Flask)", "SQLite / MongoDB", "JavaScript (Leaflet.js)", "API Hub'Eau", "Git"],
    context: "Réalisé en équipe de 6, ce projet visait à concevoir un outil de monitoring des cours d'eau français. La mission consistait à extraire massivement les données de l'API gouvernementale Hub'Eau (stations et mesures), à les stocker localement pour optimiser les temps de réponse, et à les restituer via une carte interactive de la France couplée à des tableaux de bord analytiques.",
    methodology: "Le projet a été piloté en méthode SCRUM (sprints d'une semaine, daily stand-ups). En charge de l'architecture des données, j'ai réalisé le modèle entité-association (Diagramme E.R) et sécurisé le planning avec un graphe PERT. J'ai ensuite contribué au développement du pipeline ETL en Python pour automatiser l'extraction depuis l'API et l'insertion sécurisée dans notre base de données locale.",
    results: "Mise en production d'une interface cartographique fluide et réactive. L'automatisation du pipeline de données a permis de garantir la mise à jour constante des informations hydrométriques sans surcharger les requêtes front-end.",
    githubUrl: "https://github.com/nasa94-snd/SAE204_201",
    videoUrl: "https://youtube.com/embed/feYKTSsFKJk",
    diagrams: [
      "/Hubleau/DiagrammeER.png",
      "/Hubleau/D_PERT.png"
    ]
  }, 
  {
    id: 2,
    slug: "optimisation-reseau-velib-voronoi",
    category: "Projet Académique",
    role: "Développeuse Python & Ingénierie Algorithmique",
    title: "VeloGraph : Optimisation Algorithmique du Réseau Vélib'",
    date: "05/2025", 
    description: "Analyse spatiale et optimisation du réseau Vélib' métropole par les diagrammes de Voronoi.",
    technologies: ["Python", "Folium", "SciPy", "NumPy", "Algorithmique de Graphes"],
    context: "Ce projet algorithmique avait pour but de modéliser et d'optimiser la répartition géographique des stations Vélib' à Paris. En s'appuyant sur l'Open Data de la métropole, l'enjeu était d'identifier mathématiquement les zones de sur-représentation et de sous-représentation pour proposer un réaménagement territorial plus efficace.",
    methodology: "J'ai implémenté une solution basée sur la géométrie computationnelle. En exploitant la bibliothèque SciPy, j'ai généré des diagrammes de Voronoi et la triangulation de Delaunay pour calculer un indice de densité précis pour chaque station de vélo. Les données ont ensuite été injectées dans une carte interactive Folium avec un code couleur sémantique.",
    results: "Production d'un outil d'analyse spatiale offrant une visualisation immédiate des anomalies du réseau. L'algorithme développé constitue une preuve de concept mathématique solide d'aide à la décision pour l'urbanisme de la ville.",
    videoUrl: "https://youtube.com/embed/_-X7MLoTshg"
  },
  {
    id: 1,
    slug: "infrastructure-services-reseau-debian",
    category: "Projet Infrastructure",
    role: "Administratrice Système & Réseau (Équipe de 3)",
    title: "Déploiement d'une Infrastructure de Services Réseau",
    description: "Conception et mise en place d'une architecture réseau sécurisée sous Debian (DHCP, SSH, Web, FTP).",
    date: "2024 - 2025",
    technologies: ["Debian (CLI)", "VirtualBox", "Apache2", "DHCP Server", "OpenSSH", "VSFTPD"],
    context: "Au sein d'une équipe de trois, le défi consistait à concevoir et déployer une infrastructure réseau simulée complète sous Linux Debian. Il fallait configurer un serveur central capable de distribuer des services critiques (DHCP, Web, FTP) à un parc de machines clientes, tout en sécurisant rigoureusement les accès externes via un bastion.",
    methodology: "La réussite du déploiement a exigé une gestion stricte des configurations et une excellente documentation. J'ai découpé le projet par tâches pour configurer et tester chaque service de manière isolée. Je me suis particulièrement concentrée sur la sécurité : mise en place de l'authentification par clé publique (SSH/SFTP), paramétrage du bastion, et gestion fine des permissions (ACL) pour cloisonner les accès aux fichiers.",
    results: "Livraison d'une maquette réseau robuste, fonctionnelle et conforme aux exigences de sécurité du cahier des charges. L'interopérabilité des services a été testée avec succès sur les clients virtuels, démontrant la viabilité de l'architecture.",
    videoUrl: "/Resaux/Rapport_Instalation_d_un_service_resaux.pdf",
    diagrams: [
      "/Resaux/Maquette_projet.png"
    ]
  }
];