import type { Project } from "@/lib/projects";
import styles from "./Portfolio.module.css";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.cardFeatured : ""}`}>
      <div className={styles.cardTop}>
        <span className={styles.categoryBadge}>{project.category}</span>
        {project.featured && <span className={styles.featuredDot} aria-label="Featured project" />}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.techList}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.cardFooter}>
        <a href={project.url} className={styles.viewBtn} target="_blank" rel="noopener noreferrer">
          View Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className={styles.arrowIcon}
          >
            <path
              d="M1 13L13 1M13 1H4.5M13 1V9.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
