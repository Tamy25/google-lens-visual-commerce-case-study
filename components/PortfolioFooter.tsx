import styles from "./Portfolio.module.css";

export default function PortfolioFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.brandTitle}>Portfolio</span>
            <p className={styles.footerText}>
              Crafting reliable software, one commit at a time.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LinkedIn
            </a>
            <a href="mailto:hello@example.com" className={styles.footerLink}>
              Email
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>
            {'© 2026 Portfolio. All rights reserved.'}
          </span>
        </div>
      </div>
    </footer>
  );
}
