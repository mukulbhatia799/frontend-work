import { Link } from "@remix-run/react";
import type React from "react";
import { motion } from "framer-motion";
import { scrollToId } from "../utils/scroll"; // we’ll update this util below

export function Nav() {
  return (
    // Sticky container that spans the viewport width
    <div className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <motion.header
        data-app-header // <-- we’ll read this element’s height for offset
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container-tight py-6 flex items-center justify-between"
      >
        <Link to="/" className="text-2xl font-extrabold text-emerald-600">Biccas</Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#product"  onClick={scrollToId("product")}  className="hover:text-emerald-600 text-[20px]">Product</a>
          <a href="#features" onClick={scrollToId("features")} className="hover:text-emerald-600 text-[20px]">Features</a>
          <a href="#pricing"  onClick={scrollToId("pricing")}  className="hover:text-emerald-600 text-[20px]">Pricing</a>
          <a href="#contact"  onClick={scrollToId("contact")}  className="hover:text-emerald-600 text-[20px]">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost">Login</button>
          <a href="#contact" onClick={scrollToId("contact")} className="btn-primary">Sign Up</a>
        </div>

        <button className="md:hidden btn-ghost px-4 py-2">Menu</button>
      </motion.header>
    </div>
  );
}
