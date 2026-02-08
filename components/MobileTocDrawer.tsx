"use client";

import type { CaseStudySection } from "@/lib/sections";

export default function MobileTocDrawer({
  open,
  onClose,
  sections,
  activeId
}: {
  open: boolean;
  onClose: () => void;
  sections: CaseStudySection[];
  activeId: string | null;
}) {
  if (!open) return null;

  return (
    <>
      <div className="drawerOverlay" onClick={onClose} aria-hidden="true" />
      <aside className="drawer" aria-label="Contents drawer">
        <div className="drawerTop">
          <p className="drawerTitle">Contents</p>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>

        <ul className="drawerList">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id} className={`tocItem ${isActive ? "tocActive" : ""}`}>
                <a
                  href={`#${s.id}`}
                  onClick={() => {
                    // Close after navigation for better mobile UX
                    onClose();
                  }}
                >
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
