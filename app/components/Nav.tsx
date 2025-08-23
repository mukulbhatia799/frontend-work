// components/Nav.tsx — sticky, always visible on scroll
import { Link } from "@remix-run/react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToId } from "../utils/scroll";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("[data-app-header]") as HTMLElement | null;
    if (!header) return;
    const update = () => {
      document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(id)(e), 0);
  };

  return (
    // Sticky nav always visible
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-slate-200 bg-white shadow-sm">
      <motion.header
        data-app-header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container-tight py-4 sm:py-6 flex items-center justify-between"
      >
        <Link to="/" className="text-2xl font-extrabold text-emerald-600">
          Biccas
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
          <a href="#product" onClick={go("product")} className="hover:text-emerald-600 text-[18px] lg:text-[20px]">Product</a>
          <a href="#features" onClick={go("features")} className="hover:text-emerald-600 text-[18px] lg:text-[20px]">Features</a>
          <a href="#pricing" onClick={go("pricing")} className="hover:text-emerald-600 text-[18px] lg:text-[20px]">Pricing</a>
          <a href="#contact" onClick={go("contact")} className="hover:text-emerald-600 text-[18px] lg:text-[20px]">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost min-h-[44px]">Login</button>
          <a href="#contact" onClick={go("contact")} className="btn-primary min-h-[44px]">Sign Up</a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden btn-ghost px-4 py-2 min-h-[40px] relative z-[70]"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed md:hidden top-[var(--header-h,64px)] inset-x-0 mx-4 sm:mx-6 rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="p-4">
                <nav className="grid gap-1 text-base font-medium">
                  <a href="#product" onClick={go("product")} className="px-3 py-3 rounded-xl hover:bg-slate-50">Product</a>
                  <a href="#features" onClick={go("features")} className="px-3 py-3 rounded-xl hover:bg-slate-50">Features</a>
                  <a href="#pricing" onClick={go("pricing")} className="px-3 py-3 rounded-xl hover:bg-slate-50">Pricing</a>
                  <a href="#contact" onClick={go("contact")} className="px-3 py-3 rounded-xl hover:bg-slate-50">Contact</a>
                </nav>

                <div className="mt-3 flex items-center gap-3">
                  <button className="btn-ghost flex-1 min-h-[44px]">Login</button>
                  <a href="#contact" onClick={go("contact")} className="btn-primary flex-1 min-h-[44px] text-center">Sign Up</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}