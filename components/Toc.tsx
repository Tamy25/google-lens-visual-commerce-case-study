import type { CaseStudySection } from "@/lib/sections";

export default function Toc({
  sections,
  activeId
}: {
  sections: CaseStudySection[];
  activeId: string | null;
}) {
  return (
    <nav className="tocCard" aria-label="Table of contents">
      <div className="tocHeader">
        <p className="tocTitle">Contents</p>
        <p className="tocHint">Scroll-spy highlights where you are.</p>
      </div>

      <ul className="tocList">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <li key={s.id} className={`tocItem ${isActive ? "tocActive" : ""}`}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
