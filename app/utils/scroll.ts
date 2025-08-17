import type React from "react";

export const HEADER_HEIGHT = 88; // adjust if your header height differs

// Works for both <a> and <button>
export const scrollToId =
  (id: string) =>
  (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });

    // update the hash without adding a history entry
    history.replaceState(null, "", `#${id}`);
  };
