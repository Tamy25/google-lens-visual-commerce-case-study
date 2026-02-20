"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import CategoryFilter from "./CategoryFilter";
import ProjectCard from "./ProjectCard";
import styles from "./Portfolio.module.css";

export default function ProjectGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSub}>
          A selection of things I have built and shipped.
        </p>
      </div>
      <CategoryFilter activeCategory={active} onChange={setActive} />
      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className={styles.emptyState}>No projects in this category yet.</p>
      )}
    </section>
  );
}
