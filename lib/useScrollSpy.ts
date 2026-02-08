"use client";

import { useEffect, useState } from "react";

type Options = IntersectionObserverInit;

export function useScrollSpy(sectionIds: string[], options?: Options) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      // Choose the most visible intersecting section.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options?.root, options?.rootMargin, JSON.stringify(options?.threshold)]);

  return activeId;
}
