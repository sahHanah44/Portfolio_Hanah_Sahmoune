export interface Project {
  id: number;
  title: string;
  slug: string;
  date: string;
  resource: string[];
  description: string;
  technologies: string[];
}

export const myProjects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    slug: "personal-portfolio-website",
    date: "2023-01-15",
    resource: ["sd"],
    description: "A personal portfolio website to showcase my projects and skills.",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    slug: "e-commerce-platform",
    date: "2023-03-10",
    resource: ["sd"],
    description: "An e-commerce platform for small businesses to sell their products online.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
];