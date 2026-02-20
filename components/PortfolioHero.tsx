import styles from "./Portfolio.module.css";

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <p className={styles.heroLabel}>Full Stack Developer</p>
      <h1 className={styles.heroTitle}>
        Building robust systems {'&'} crafting elegant solutions.
      </h1>
      <p className={styles.heroSub}>
        I design and build production-grade applications with a focus on
        scalability, clean architecture, and developer experience. Explore my
        work below.
      </p>
      <div className={styles.heroStats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>8+</span>
          <span className={styles.statLabel}>Projects</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.stat}>
          <span className={styles.statValue}>12+</span>
          <span className={styles.statLabel}>Technologies</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.stat}>
          <span className={styles.statValue}>5+</span>
          <span className={styles.statLabel}>Years Exp.</span>
        </div>
      </div>
    </section>
  );
}
