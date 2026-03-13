"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Skill.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma"],
   
  },
  {
    title: "Backend & BDD",
    skills: ["PHP", "Node.js", "MySQL", "PostgreSQL", "API REST"],
  },
  {
    title: "Outils & Méthodes",
    skills: ["Git", "GitHub", "VS Code", "Agile", "UML", "PERT"],

  },
];

export default function Skills() {
  const { ref, visible } = useScrollReveal(0.1);
  const [barsActive, setBarsActive] = useState(false);

  useEffect(() => {
    if (visible) setTimeout(() => setBarsActive(true), 500);
  }, [visible]);

  return (
    <section
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`${styles.title} ${visible ? styles.in : ""}`}>
        Mes Compétences
      </h2>

      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            className={`${styles.categoryCard} ${visible ? styles.cardIn : ""}`}
            style={{ transitionDelay: visible ? `${i * 140}ms` : "0ms" }}
          >
            <h3 className={styles.categoryTitle}>{cat.title}</h3>

            <div className={styles.skillsList}>
              {cat.skills.map((skill) => (
                <span key={skill} className={styles.skillBadge}>{skill}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}