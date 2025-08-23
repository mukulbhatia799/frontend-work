import type React from "react";

export const HEADER_HEIGHT = 88; // adjust if your header height differs

// Works for both <a> and <button>
export const scrollToId =
  (id: string, behavior: ScrollBehavior = "smooth") =>
  (e?: Pick<MouseEvent, "preventDefault"> | React.MouseEvent) => {
    try {
      e?.preventDefault?.();
    } catch {}
    const el = document.getElementById(id);
    const header = document.querySelector(
      "[data-app-header]"
    ) as HTMLElement | null;
    const offset = (header?.offsetHeight ?? 0) + 8;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior });
  };
