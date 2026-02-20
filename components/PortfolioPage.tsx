import PortfolioHeader from "./PortfolioHeader";
import PortfolioHero from "./PortfolioHero";
import ProjectGrid from "./ProjectGrid";
import PortfolioFooter from "./PortfolioFooter";
import styles from "./Portfolio.module.css";

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <ProjectGrid />
      </main>
      <PortfolioFooter />
    </div>
  );
}
