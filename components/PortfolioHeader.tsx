"use client";

import styles from "./Portfolio.module.css";

export default function PortfolioHeader() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <div className={styles.brand}>
          <span className={styles.brandTitle}>Portfolio</span>
          <span className={styles.brandSub}>Software Engineer</span>
        </div>
        <nav className={styles.headerNav} aria-label="Main navigation">
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <a href="#contact" className={styles.navLinkAccent}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
