"use client";

import { useState } from "react";
import { categories } from "@/lib/projects";
import styles from "./Portfolio.module.css";

interface Props {
  activeCategory: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ activeCategory, onChange }: Props) {
  return (
    <div className={styles.filterBar} role="tablist" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={activeCategory === cat}
          className={`${styles.filterChip} ${activeCategory === cat ? styles.filterChipActive : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
