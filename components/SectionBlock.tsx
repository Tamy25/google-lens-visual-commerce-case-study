"use client";

import { useEffect, useMemo, useState } from "react";
import type { CaseStudySection } from "@/lib/sections";

type Props = {
  section: CaseStudySection;
  index: number;
  total: number;
  skimMode: boolean;
};

export default function SectionBlock({ section, index, total, skimMode }: Props) {
  const prev = index > 0 ? `#${section.prevId}` : "#top";
  const next = index < total - 1 ? `#${section.nextId}` : "#top";

  // Default open behavior: short sections can start open; long ones start closed.
  const defaultOpen = useMemo(() => !section.defaultCollapsed, [section.defaultCollapsed]);

  const [open, setOpen] = useState(defaultOpen);

  // Skim mode forces all deep dives closed.
  useEffect(() => {
    if (skimMode) setOpen(false);
  }, [skimMode]);

  // If user leaves skim mode, revert to section default (not previous user toggles)
  // to keep behavior predictable and "portfolio" clean.
  useEffect(() => {
    if (!skimMode) setOpen(defaultOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skimMode, defaultOpen]);

  return (
    <section className="sectionCard" id={section.id} aria-label={section.title}>
      <div className="sectionTitleRow">
        <h2 className="h2">
          {index + 1}. {section.title}
        </h2>

        <div className="sectionTools">
          <a className="smallLink" href="#top">
            Back to top
          </a>
          <a className="smallLink" href={`#${section.id}`}>
            Link
          </a>
        </div>
      </div>

      <hr className="hr" />

      <div className="tldrWrap">
        <p className="tldrTitle">TL;DR</p>
        <ul className="ul">
          {section.tldr.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="deepDiveHeader">
        <p className="deepDiveTitle">Deep dive</p>

        <button
          className="collapseBtn"
          onClick={() => setOpen((v) => !v)}
          disabled={skimMode}
          aria-expanded={open}
          aria-controls={`${section.id}-deepdive`}
          title={skimMode ? "Exit skim mode to expand deep dives" : "Toggle deep dive"}
        >
          {open ? "Collapse" : "Expand"}
        </button>
      </div>

      {/* Always render content for print; just hide via CSS class */}
      <div
        id={`${section.id}-deepdive`}
        className={`deepDiveBody ${open ? "open" : "closed"}`}
      >
        {section.deepDive}
      </div>

      <div className="sectionNav noPrint">
        <div className="navGroup">
          <a className="btn" href={prev}>
            ← Previous
          </a>
          <a className="btn" href={next}>
            Next →
          </a>
        </div>

        <div className="navGroup">
          <a className="btn" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
