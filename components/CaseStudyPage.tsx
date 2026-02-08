"use client";

import { useMemo, useState } from "react";
import HeaderBar from "./HeaderBar";
import Toc from "./Toc";
import MobileTocDrawer from "./MobileTocDrawer";
import SectionBlock from "./SectionBlock";
import { sections } from "@/lib/sections";
import { useScrollSpy } from "@/lib/useScrollSpy";

export default function CaseStudyPage() {
  const [skimMode, setSkimMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const ids = useMemo(() => sections.map((s) => s.id), []);
  const activeId = useScrollSpy(ids, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: [0.1, 0.25, 0.4]
  });

  return (
    <>
      <HeaderBar
        skimMode={skimMode}
        onToggleSkim={() => setSkimMode((v) => !v)}
        onOpenContents={() => setMobileOpen(true)}
      />

      <div className="page">
        <div className="container">
          <div className="hero" id="top">
            <h1 className="h1">Google Lens: Transforming Visual Search into Visual Commerce</h1>
            <p className="sublead">
              A product strategy case study proposing a phased path to evolve Lens from identification
              into an end-to-end shopping assistant—plus an omnichannel integration strategy with Lenskart.
            </p>

            <div className="metaRow">
              <span className="badge">Single-page • Anchored sections</span>
              <span className="badge">TL;DR + Deep dives</span>
              <span className="badge">Skim mode + Print-friendly</span>
            </div>
          </div>

          <div className="mainGrid">
            <aside>
              <Toc sections={sections} activeId={activeId} />
            </aside>

            <main>
              {sections.map((s, idx) => (
                <SectionBlock
                  key={s.id}
                  section={s}
                  index={idx}
                  total={sections.length}
                  skimMode={skimMode}
                />
              ))}

              <p className="footerNote">
                Note: Any metrics explicitly marked as estimates remain estimates; where details weren’t provided,
                the content is left as-is without inventing new data.
              </p>
            </main>
          </div>
        </div>
      </div>

      {/* Mobile TOC */}
      <div className="fab noPrint">
        <button className="btn btnPrimary" onClick={() => setMobileOpen(true)} aria-label="Open contents">
          Contents
        </button>
      </div>

      <MobileTocDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sections={sections}
        activeId={activeId}
      />
    </>
  );
}
