import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, Link } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { motion, AnimatePresence, useSpring, animate, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = renderToString(/* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-CPjzpRr0.css";
const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" }
];
const meta = () => {
  return [
    { title: "Biccas — Remix Landing" },
    { name: "description", content: "A responsive landing page built with Remix, Tailwind and Framer Motion." }
  ];
};
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "font-sans bg-gradient-to-b from-emerald-50/60 to-white", children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const scrollToId = (id, behavior = "smooth") => (e) => {
  var _a;
  try {
    (_a = e == null ? void 0 : e.preventDefault) == null ? void 0 : _a.call(e);
  } catch {
  }
  const el = document.getElementById(id);
  const header = document.querySelector(
    "[data-app-header]"
  );
  const offset = ((header == null ? void 0 : header.offsetHeight) ?? 0) + 8;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior });
};
function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const header = document.querySelector("[data-app-header]");
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
  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(id)(e), 0);
  };
  return (
    // Sticky nav always visible
    /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 right-0 z-[60] border-b border-slate-200 bg-white shadow-sm", children: [
      /* @__PURE__ */ jsxs(
        motion.header,
        {
          "data-app-header": true,
          initial: { y: -20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6 },
          className: "container-tight py-4 sm:py-6 flex items-center justify-between",
          children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "text-2xl font-extrabold text-emerald-600", children: "Biccas" }),
            /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex gap-6 lg:gap-8 text-sm font-medium", children: [
              /* @__PURE__ */ jsx("a", { href: "#product", onClick: go("product"), className: "hover:text-emerald-600 text-[18px] lg:text-[20px]", children: "Product" }),
              /* @__PURE__ */ jsx("a", { href: "#features", onClick: go("features"), className: "hover:text-emerald-600 text-[18px] lg:text-[20px]", children: "Features" }),
              /* @__PURE__ */ jsx("a", { href: "#pricing", onClick: go("pricing"), className: "hover:text-emerald-600 text-[18px] lg:text-[20px]", children: "Pricing" }),
              /* @__PURE__ */ jsx("a", { href: "#contact", onClick: go("contact"), className: "hover:text-emerald-600 text-[18px] lg:text-[20px]", children: "Contact" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("button", { className: "btn-ghost min-h-[44px]", children: "Login" }),
              /* @__PURE__ */ jsx("a", { href: "#contact", onClick: go("contact"), className: "btn-primary min-h-[44px]", children: "Sign Up" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "md:hidden btn-ghost px-4 py-2 min-h-[40px] relative z-[70]",
                "aria-controls": "mobile-menu",
                "aria-expanded": open,
                "aria-label": open ? "Close menu" : "Open menu",
                onClick: () => setOpen((v) => !v),
                children: open ? "Close" : "Menu"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          motion.button,
          {
            "aria-label": "Close menu",
            onClick: () => setOpen(false),
            className: "fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] md:hidden",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            id: "mobile-menu",
            role: "dialog",
            "aria-modal": "true",
            className: "fixed md:hidden top-[var(--header-h,64px)] inset-x-0 mx-4 sm:mx-6 rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200",
            initial: { y: -16, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -16, opacity: 0 },
            transition: { duration: 0.18 },
            children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxs("nav", { className: "grid gap-1 text-base font-medium", children: [
                /* @__PURE__ */ jsx("a", { href: "#product", onClick: go("product"), className: "px-3 py-3 rounded-xl hover:bg-slate-50", children: "Product" }),
                /* @__PURE__ */ jsx("a", { href: "#features", onClick: go("features"), className: "px-3 py-3 rounded-xl hover:bg-slate-50", children: "Features" }),
                /* @__PURE__ */ jsx("a", { href: "#pricing", onClick: go("pricing"), className: "px-3 py-3 rounded-xl hover:bg-slate-50", children: "Pricing" }),
                /* @__PURE__ */ jsx("a", { href: "#contact", onClick: go("contact"), className: "px-3 py-3 rounded-xl hover:bg-slate-50", children: "Contact" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("button", { className: "btn-ghost flex-1 min-h-[44px]", children: "Login" }),
                /* @__PURE__ */ jsx("a", { href: "#contact", onClick: go("contact"), className: "btn-primary flex-1 min-h-[44px] text-center", children: "Sign Up" })
              ] })
            ] })
          }
        )
      ] }) })
    ] })
  );
}
function AnimatedNumber({
  value,
  duration = 0.6,
  decimals = 0,
  className
}) {
  const spring = useSpring(value, { stiffness: 140, damping: 18 });
  const [display, setDisplay] = useState(
    () => decimals ? value.toFixed(decimals) : String(value)
  );
  useEffect(() => {
    const controls = animate(spring, value, { duration, ease: "easeOut" });
    const unsub = spring.on("change", (v) => {
      const num = Number(v);
      setDisplay(decimals ? num.toFixed(decimals) : String(Math.round(num)));
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, duration, decimals, spring]);
  return /* @__PURE__ */ jsx("span", { className, children: display });
}
function RatingStars({
  rating,
  count = 5,
  size = 22,
  color = "#F59E0B",
  // amber-500
  emptyColor = "#CBD5E1",
  // slate-300
  speed = 0.9
}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const path = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z";
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: Array.from({ length: count }).map((_, i) => {
    const filled = i < full;
    const half = !filled && hasHalf && i === full;
    const delay = i * 0.25;
    if (filled) {
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative inline-flex",
          style: {
            width: size,
            height: size,
            transformOrigin: "50% 50%",
            willChange: "transform, filter, box-shadow"
          },
          initial: false,
          animate: {
            scale: [1, 1.18, 1],
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
          },
          transition: {
            duration: speed,
            delay,
            repeat: Infinity,
            repeatDelay: 0.15,
            ease: "easeInOut"
          },
          children: [
            /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", className: "block", children: /* @__PURE__ */ jsx("path", { d: path, fill: color }) }),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                className: "pointer-events-none absolute inset-0 rounded-full",
                initial: false,
                animate: {
                  boxShadow: [
                    "0 0 0px rgba(245,158,11,0)",
                    "0 0 14px rgba(245,158,11,0.95)",
                    "0 0 0px rgba(245,158,11,0)"
                  ]
                },
                transition: {
                  duration: speed,
                  delay,
                  repeat: Infinity,
                  repeatDelay: 0.15,
                  ease: "easeInOut"
                }
              }
            )
          ]
        },
        i
      );
    }
    if (half) {
      return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", className: "block", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: `half-${i}`, children: /* @__PURE__ */ jsx("rect", { x: "0", y: "0", width: "12", height: "24" }) }) }),
        /* @__PURE__ */ jsx("path", { d: path, fill: "none", stroke: color, strokeWidth: "2" }),
        /* @__PURE__ */ jsx("path", { d: path, fill: color, clipPath: `url(#half-${i})` })
      ] }, i);
    }
    return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", className: "block", children: /* @__PURE__ */ jsx("path", { d: path, fill: "none", stroke: emptyColor, strokeWidth: "2" }) }, i);
  }) });
}
function Index() {
  const [billing, setBilling] = useState("yearly");
  const proPrice = billing === "monthly" ? 2 : 8;
  const businessPrice = billing === "monthly" ? 4 : 16;
  const people = [
    {
      name: "Aria Zinanrio",
      avatar: "/images/amanda.jpg",
      comment: "I am very helped by this E-wallet application, my days are easy to use this application and it's very helpful in my life, even I can pay in a short time 😊"
    },
    {
      name: "James Bailey",
      avatar: "/images/p2.jpg",
      comment: "This E-wallet is super convenient, I can handle my transactions anytime and anywhere, it saves me a lot of time in my daily activities and makes me feel stress-free 🙌"
    },
    {
      name: "Lucas Wang",
      avatar: "/images/p3.jpg",
      comment: "I really enjoy using this application, it makes my payments so simple and fast, I don’t need to carry cash anymore and that makes my everyday life more comfortable 😍"
    },
    {
      name: "Maria Gomez",
      avatar: "/images/p4.jpg",
      comment: "Such an amazing tool, this app has changed the way I manage my money, paying bills and shopping feels effortless now, and I love how smooth it works 💳✨"
    }
  ];
  const [active, setActive] = useState(0);
  const goNext = () => setActive((i) => (i + 1) % people.length);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % people.length), 4e3);
    return () => clearInterval(id);
  }, []);
  const prefersReduced = useReducedMotion();
  const float = (distance = 10, delay = 0) => prefersReduced ? {} : {
    y: [0, -distance, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "pt-[var(--header-h,72px)] min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs(
      "section",
      {
        id: "hero",
        className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-8 gap-y-8 pt-6 md:pt-10 pb-12 md:pb-20",
        children: [
          /* @__PURE__ */ jsx("div", { className: "order-1 md:order-none md:row-start-1 md:col-start-1 flex flex-col items-center md:items-start text-center md:text-left", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "font-extrabold leading-[1.08] pb-9 md:pb-12 text-balance text-[clamp(2rem,6.4vw,3.75rem)]",
                children: [
                  "We’re here to ",
                  /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Increase" }),
                  " your ",
                  /* @__PURE__ */ jsx("span", { children: "Productivity" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "svg",
              {
                "aria-hidden": true,
                preserveAspectRatio: "none",
                className: "pointer-events-none select-none absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-1 md:bottom-3 w-[min(86%,420px)] md:w-[min(78%,520px)]",
                viewBox: "0 0 520 80",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M6 62 C 120 20, 400 20, 514 62", stroke: "#10B981", strokeWidth: "10", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsx("path", { d: "M6 62 C 120 32, 400 32, 514 62", stroke: "#34D399", strokeWidth: "7", strokeLinecap: "round" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 18 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7 },
              className: "order-3 md:order-none md:row-span-2 md:col-start-2 relative",
              children: /* @__PURE__ */ jsx("div", { className: "relative p-2 sm:p-3 isolate", children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative overflow-hidden rounded-3xl bg-emerald-300/40 border border-emerald-200 shadow-xl w-full max-w-[520px] md:max-w-[540px] mx-auto aspect-[4/3] md:h-[430px]",
                  children: [
                    /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-70", viewBox: "0 0 540 430", fill: "none", preserveAspectRatio: "none", children: [
                      /* @__PURE__ */ jsx("path", { d: "M10 300 L120 220 L200 280 L250 160 L330 240 L410 140 L530 200", stroke: "#10B981", strokeWidth: "8", strokeLinecap: "round" }),
                      /* @__PURE__ */ jsx("path", { d: "M0 340 L90 260 L170 320 L230 220 L310 300 L390 180 L520 240", stroke: "#059669", strokeOpacity: "0.7", strokeWidth: "6", strokeLinecap: "round" })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/images/person.png",
                        alt: "Person",
                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-[82%] md:h-[420px] w-auto object-contain drop-shadow-2xl z-10"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute z-30 will-change-transform transform-gpu",
                        style: { top: "3.5%", left: "5%" },
                        animate: { y: [0, -10, 0] },
                        transition: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white rounded-2xl shadow-soft px-3.5 py-2 text-[clamp(0.8rem,2.6vw,1rem)]", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("div", { className: "text-slate-400 text-[11px] sm:text-xs", children: "Enter amount" }),
                            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "$450.00" })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-emerald-500 text-white font-medium px-3.5 py-1.5 min-h-[40px]", children: "Send" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute z-30 will-change-transform transform-gpu",
                        style: { top: "43%", left: "3%" },
                        animate: { y: [0, -8, 0] },
                        transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.35 },
                        children: /* @__PURE__ */ jsx("div", { className: "h-8 w-8 grid place-items-center rounded-xl bg-indigo-600 text-white shadow-soft", children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute z-30 will-change-transform transform-gpu",
                        style: { top: "4%", right: "4%" },
                        animate: { y: [0, -8, 0] },
                        transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 },
                        children: /* @__PURE__ */ jsx("div", { className: "h-9 w-9 grid place-items-center rounded-xl bg-orange-100 text-orange-700 shadow-soft", children: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: [
                          /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "6", rx: "6", ry: "3", stroke: "currentColor", strokeWidth: "2" }),
                          /* @__PURE__ */ jsx("path", { d: "M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6", stroke: "currentColor", strokeWidth: "2" }),
                          /* @__PURE__ */ jsx("path", { d: "M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6", stroke: "currentColor", strokeWidth: "2" })
                        ] }) })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute z-40 will-change-transform transform-gpu",
                        style: { right: "3%", bottom: "10%" },
                        animate: { y: [0, -6, 0], rotate: [-10, -14, -10] },
                        transition: { duration: 3.4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.3 },
                        children: /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: "w-[160px] h-[104px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[140px] rounded-2xl bg-slate-900 text-white shadow-2xl p-4 grid grid-rows-[auto_1fr_auto] gap-2",
                            style: { transform: "rotate(-10deg)" },
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                                /* @__PURE__ */ jsx("span", { className: "h-6 w-6 rounded-full bg-slate-600/60" }),
                                /* @__PURE__ */ jsx("span", { className: "h-6 w-6 rounded-full bg-slate-700/80" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "text-sm tracking-wide opacity-90", children: "Credit Card" }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between opacity-90", children: [
                                /* @__PURE__ */ jsx("span", { className: "tracking-[0.3em] text-sm", children: "●●●● 1234" }),
                                /* @__PURE__ */ jsx("span", { className: "text-xs", children: "09/25" })
                              ] })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute z-30 will-change-transform transform-gpu",
                        style: { left: "6%", bottom: "5%" },
                        animate: { y: [0, -10, 0] },
                        transition: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.1 },
                        children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-soft px-4 py-2 text-sm", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-[11px] sm:text-xs", children: "Total Income" }),
                          /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "$245.00" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute z-30 will-change-transform transform-gpu",
                        style: { right: "50%", bottom: "3%" },
                        animate: { y: [0, -8, 0] },
                        transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.7 },
                        children: /* @__PURE__ */ jsx("div", { className: "h-9 w-9 grid place-items-center rounded-xl bg-orange-100 text-orange-700 shadow-soft", children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M21 11.5a7.5 7.5 0 0 1-10.5 6.8L5 20l1.7-4.7A7.5 7.5 0 1 1 21 11.5z", stroke: "currentColor", strokeWidth: "2" }) }) })
                      }
                    )
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "order-2 md:order-none md:row-start-2 md:col-start-1 flex flex-col items-center md:items-start text-center md:text-left", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 max-w-[42rem] font-medium text-[clamp(0.98rem,2.3vw,1.125rem)]", children: "Let’s make your work more organized and easy using the Taskio dashboard with many of the latest features for managing work every day." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4", children: [
              /* @__PURE__ */ jsx("a", { href: "#cta", className: "btn-primary px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base min-h-[44px]", children: "Try free trial" }),
              /* @__PURE__ */ jsx("button", { className: "btn-ghost px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base min-h-[44px]", children: "View Demo" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "px-4 sm:px-6 lg:px-8 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-extrabold", children: "More than 25,000 teams use Collabs" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-500 opacity-60", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-10 w-10 rounded-md", children: /* @__PURE__ */ jsx("img", { src: "/images/unsplash-icon.svg", alt: "Unsplash", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[22px] sm:text-[25px]", children: "Unsplash" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-10 w-10 rounded-[4px]", children: /* @__PURE__ */ jsx("img", { src: "/images/notion-icon.svg", alt: "Notion", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[22px] sm:text-[25px]", children: "Notion" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-10 w-10 rounded-md tracking-tight", children: /* @__PURE__ */ jsx("img", { src: "/images/intercom-icon.svg", alt: "Intercom", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-wide uppercase text-[22px] sm:text-[25px]", children: "INTERCOM" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-10 w-10 border-[5px] border-slate-500 rounded-md text-[30px] font-semibold", children: "d" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold lowercase text-[22px] sm:text-[25px]", children: "descript" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-10 w-10 rounded-full", children: /* @__PURE__ */ jsx("img", { src: "/images/grammarly-icon.svg", alt: "Grammarly", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[22px] sm:text-[25px]", children: "grammarly" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "product", className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12 items-start bg-gray-50 ring-1 ring-emerald-50/70 p-6 sm:p-8 md:p-12 rounded-2xl", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "How we support our partner all over the world" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-600", children: "SaaS becomes a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, and management software." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 sm:mt-8 flex flex-wrap gap-10 sm:gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-6", children: [
            /* @__PURE__ */ jsx(RatingStars, { rating: 4.9, size: 22, speed: 0.8 }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 font-semibold", children: "4.9 / 5 rating" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-sm", children: "databricks" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-6", children: [
            /* @__PURE__ */ jsx(RatingStars, { rating: 4.8, size: 22, speed: 0.8 }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 font-semibold", children: "4.8 / 5 rating" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-sm", children: "Chainalysis" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 sm:space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center shrink-0 h-11 w-11 rounded-xl bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 12h4l2-5 3 10 2-6h5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Publishing" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center shrink-0 h-11 w-11 rounded-xl bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M12 3v9h9A9 9 0 1 1 12 3z", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M12 12V3a9 9 0 0 1 9 9h-9z", fill: "currentColor" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Analytics" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Analyze your performance and create gorgeous reports." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center shrink-0 h-11 w-11 rounded-xl bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "18", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M9 7.5l6 0M7.5 8.8L10.5 15M16.5 8.8L13.5 15", stroke: "currentColor", strokeWidth: "2" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Engagement" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Quickly navigate and engage with your audience." })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "px-4 sm:px-6 lg:px-8 py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1.1fr,1.3fr,auto] gap-6 md:gap-8 items-center", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold", children: "Our Features you can get" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 md:text-center max-w-2xl justify-self-center", children: "We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily" }),
        /* @__PURE__ */ jsx("div", { className: "md:text-right", children: /* @__PURE__ */ jsx("button", { onClick: scrollToId("contact"), className: "btn-primary min-h-[44px]", children: "Get Started" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-6 glass hover:shadow-xl transition h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute left-6 top-6 space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "h-12 w-24 rounded-lg bg-emerald-400/90" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-24 rounded-lg bg-emerald-300/90" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-[150px] top-8 space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "h-3 w-28 rounded-full bg-emerald-200" }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-24 rounded-full bg-emerald-200" }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-20 rounded-full bg-emerald-200" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute right-10 top-6 h-9 w-9 rounded-full bg-emerald-300 grid place-items-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", className: "-rotate-12", children: /* @__PURE__ */ jsx("path", { d: "M3 11l17-7-7 17-2-6-6-4z", fill: "#059669" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-8 bottom-6 flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-14 w-14 rounded-full bg-sky-100" }),
              /* @__PURE__ */ jsx("span", { className: "h-14 w-14 rounded-full bg-sky-500" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute right-8 bottom-6 h-14 w-14 rounded-full bg-emerald-400 grid place-items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-white/90" }),
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-white/90" }),
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-white/90" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg sm:text-xl font-semibold", children: "Collaboration Teams" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2", children: "Here you can handle projects together with team virtually" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-6 glass hover:shadow-xl transition h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-50", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-4 rounded-xl bg-white shadow" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "absolute left-8 right-16 top-6 h-20 rounded-xl shadow-lg overflow-hidden",
                style: { background: "linear-gradient(135deg,#34d399 0%,#22c55e 70%)" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-4 text-white font-semibold", children: "Document File" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-9 text-white/90 text-xs", children: "456 GB | 1056 Items" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute right-8 top-6 h-9 w-9 rounded-xl bg-white shadow grid place-items-center", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded-sm bg-emerald-400" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute right-6 top-10 h-28 w-3 rounded-lg bg-sky-500" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-14 right-14 bottom-6 h-16 rounded-xl bg-white shadow border border-slate-100", children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 16", className: "absolute top-0 left-0 right-0 w-full h-4", children: [
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "dots", width: "6", height: "6", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("circle", { cx: "1.5", cy: "3", r: "1", fill: "#d1fae5" }) }) }),
                /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#dots)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute left-6 bottom-4 flex items-end gap-4", children: [
                /* @__PURE__ */ jsx("span", { className: "w-3 h-7 rounded bg-emerald-500" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-10 rounded bg-emerald-400" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-6 rounded bg-emerald-500" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-9 rounded bg-emerald-400" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg sm:text-xl font-semibold", children: "Cloud Storage" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2", children: "No need to worry about storage because we provide storage up to 2 TB" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-6 glass hover:shadow-xl transition h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 -translate-x-1/2 top-4 h-20 w-32", children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 80", className: "w-full h-full", children: [
                /* @__PURE__ */ jsx("path", { d: "M10,70 A50,50 0 0 1 82,22", stroke: "#0ea5e9", strokeWidth: "18", fill: "none", strokeLinecap: "round" }),
                /* @__PURE__ */ jsx("path", { d: "M82,22 A50,50 0 0 1 110,70", stroke: "#facc15", strokeWidth: "18", fill: "none", strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] h-10 w-10 rounded-full bg-white shadow grid place-items-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", className: "text-sky-500", children: /* @__PURE__ */ jsx("path", { d: "M12 3s5 6.2 5 9.2A5 5 0 1 1 7 12.2C7 9.2 12 3 12 3z", fill: "currentColor" }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 text-xs text-black font-bold", children: "60%" }),
              /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-black font-bold", children: "40%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-6 right-6 top-[92px] space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "h-12 rounded-xl bg-white shadow flex items-center gap-3 px-3", children: [
                /* @__PURE__ */ jsx("span", { className: "h-7 w-7 rounded-lg bg-sky-100" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-40 rounded bg-slate-200" }),
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-24 rounded bg-emerald-400" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "h-12 rounded-xl bg-white shadow flex items-center gap-3 px-3", children: [
                /* @__PURE__ */ jsx("span", { className: "h-7 w-7 rounded-lg bg-sky-100" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-36 rounded bg-slate-200" }),
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-28 rounded bg-emerald-400" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-6 bottom-6 h-10 w-10 rounded-lg bg-emerald-100 grid place-items-center", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", className: "text-emerald-600", children: [
              /* @__PURE__ */ jsx("path", { d: "M4 17V7a2 2 0 0 1 2-2h7l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M13 5v4h4", stroke: "currentColor", strokeWidth: "2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg sm:text-xl font-semibold", children: "Daily Analytics" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2", children: "We always provide useful information to make it easier for you every day" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "benefits", className: "py-16 bg-gradient-to-r from-emerald-50/60 to-white px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold", children: "What Benefit Will You Get" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 sm:mt-8 space-y-4 sm:space-y-5", children: [
          "Free Consulting With Expert Saving Money",
          "Online Banking",
          "Investment Report Every Month",
          "Saving Money For The Future",
          "Online Transaction"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-8 w-8 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-base sm:text-lg", children: item })
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative isolate w-full max-w-[680px] md:ml-auto mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5", children: /* @__PURE__ */ jsx("img", { src: "/images/laptop.png", alt: "Laptop", className: "block w-full h-[320px] sm:h-[420px] object-cover grayscale contrast-110" }) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute -top-8 left-6 sm:left-12 z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(8, 0.15),
            whileHover: { y: -10, scale: 1.03 },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-soft px-3.5 py-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("img", { src: "/images/amanda.jpg", alt: "Amanda Young", className: "h-9 w-9 rounded-full object-cover" }),
              /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Amanda Young" }),
                /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs", children: "Expert Saving Money" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 grid place-items-center h-8 w-8 rounded-full bg-emerald-500 text-white", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M10 17l5-5-5-5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-[120px] sm:top-[160px] right-4 z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(10, 0.25),
            whileHover: { y: -8, scale: 1.03 },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-soft px-4 py-3 text-sm flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs", children: "Total Income" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "$245.00" })
              ] }),
              /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", className: "text-emerald-600", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M4 18V10m6 8V6m6 12v-4m4 4V8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute left-[200px] sm:left-[260px] top-[150px] sm:top-[185px] rotate-12 z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(6, 0.35),
            whileHover: { scale: 1.06, rotate: 8 },
            children: /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 shadow-soft grid place-items-center", children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 5h18v12H8l-5 4V5z", stroke: "currentColor", strokeWidth: "2" }) }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute -bottom-7 left-[100px] sm:left-[150px] z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(8, 0.45),
            whileHover: { y: -8, scale: 1.02 },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-7 w-7 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-800", children: "Money Transfer Successful" })
            ] })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "pricing", className: "px-4 sm:px-6 lg:px-8 py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold", children: "Choose Plan That’s Right For You" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-slate-500", children: "Choose plan that works best for you, feel free to contact us" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex rounded-2xl bg-white shadow-soft ring-1 ring-slate-100 p-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setBilling("monthly"),
              className: `px-4 sm:px-5 py-2 rounded-xl font-medium min-h-[40px] ${billing === "monthly" ? "text-white bg-emerald-500 shadow" : "text-slate-600 hover:bg-slate-50"}`,
              "aria-pressed": billing === "monthly",
              "aria-label": "Bill Monthly",
              children: "Bill Monthly"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setBilling("yearly"),
              className: `px-4 sm:px-5 py-2 rounded-xl font-medium min-h-[40px] ${billing === "yearly" ? "text-white bg-emerald-500 shadow" : "text-slate-600 hover:bg-slate-50"}`,
              "aria-pressed": billing === "yearly",
              "aria-label": "Bill Yearly",
              children: "Bill Yearly"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid md:grid-cols-3 gap-6 items-stretch", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[28px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[520px]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "Free" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-slate-500", children: "Have a go and test your superpowers" }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] items-center leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-400 -mb-1 text-[20px]", children: "$" }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: 0, className: "text-5xl sm:text-6xl font-extrabold" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-slate-50 p-5 space-y-4", children: ["2 Users", "2 Files", "Public Share & Comments", "Chat Support", "New income apps"].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-2xl px-5 py-3 bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 font-medium min-h-[48px]", children: "Signup for free" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[28px] overflow-hidden border border-emerald-500 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[560px] bg-emerald-500 text-white", children: [
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 -translate-x-1/2 top-24 w-[560px] h-[560px] rounded-full bg-emerald-400/55" }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 -translate-x-1/2 top-[92px] w-[560px] h-[560px] rounded-full border border-emerald-300/70" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-[1]", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "Pro" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-emerald-50/90", children: "Experiment the power of infinite possibilities" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] items-center leading-none", children: [
                /* @__PURE__ */ jsx("span", { className: "opacity-90 -mb-1 text-[20px]", children: "$" }),
                /* @__PURE__ */ jsx(AnimatedNumber, { value: proPrice, className: "text-5xl sm:text-6xl font-extrabold" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 inline-block rounded-full bg-emerald-600/70 px-3 py-1 text-sm", children: "Save $50 a year" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-white text-slate-900 p-5 space-y-4 shadow", children: ["4 Users", "All apps", "Unlimited editable exports", "Folders and collaboration", "All incoming apps"].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative z-[1] mt-auto pt-6", children: /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-2xl px-5 py-3 bg-white text-emerald-600 hover:bg-emerald-900 hover:text-white font-medium min-h-[48px]", children: "Go to pro" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[28px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[520px]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "Business" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-slate-500", children: "Unveil new superpowers and join the Design League" }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] items-center leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-400 -mb-1 text-[20px]", children: "$" }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: businessPrice, className: "text-5xl sm:text-6xl font-extrabold" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-slate-50 p-5 space-y-4", children: [
              "All the features of pro plan",
              "Account Success Manager",
              "Single Sign-On (SSO)",
              "Co-conception program",
              "Collaboration — Soon"
            ].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-2xl px-5 py-3 bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 font-medium min-h-[48px]", children: "Go to Business" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "scroll-mt-[88px] bg-[#0F172A] text-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-4 sm:px-6 lg:px-8 py-16 md:py-20 mx-auto max-w-6xl grid md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-14", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight", children: [
            "People are Saying",
            /* @__PURE__ */ jsx("br", {}),
            "About DoWhith"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-slate-400 max-w-md", children: "Everything you need to accept to payment and grow your money of manage anywhere on planet" }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 text-6xl sm:text-7xl leading-none text-white", children: "“" }),
          /* @__PURE__ */ jsx("div", { className: "flex-col max-w-xl relative min-h-[84px] sm:min-h-[70px] overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              transition: { duration: 0.25 },
              className: "absolute inset-0 text-slate-300 leading-6",
              children: people[active].comment
            },
            active
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 text-slate-400", children: [
            "_ ",
            people[active].name
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-6 flex items-center gap-4 overflow-x-auto pb-2 -mx-1 pr-2", children: [
            people.map((p, i) => {
              const isActive = i === active;
              return /* @__PURE__ */ jsx("li", { className: "shrink-0", children: /* @__PURE__ */ jsx(
                motion.button,
                {
                  type: "button",
                  onClick: () => setActive(i),
                  whileTap: { scale: 0.95 },
                  animate: { scale: isActive ? 1.18 : 0.96, opacity: isActive ? 1 : 0.85 },
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                  className: "h-12 w-12 rounded-full overflow-hidden ring-2 ring-slate-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/30",
                  "aria-label": `${p.name}'s comment`,
                  children: /* @__PURE__ */ jsx("img", { src: p.avatar, alt: p.name, className: "h-full w-full object-cover" })
                }
              ) }, p.name);
            }),
            /* @__PURE__ */ jsx("li", { className: "shrink-0", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: goNext,
                className: "h-12 w-12 rounded-full grid place-items-center border border-slate-500 text-slate-300 hover:border-slate-300 hover:text-white transition",
                "aria-label": "Next testimonial",
                title: "Next",
                children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M9 5l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-md md:ml-auto", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#1B2330] text-white shadow-soft px-6 sm:px-8 py-8 sm:py-9 ring-1 ring-slate-700", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid place-items-center", children: [
            /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 24 24", className: "text-emerald-400", fill: "none", children: [
              /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "6", rx: "6", ry: "3", stroke: "currentColor", strokeWidth: "1.8" }),
              /* @__PURE__ */ jsx("path", { d: "M6 6v7c0 1.7 2.7 3 6 3s6-1.3 6-3V6", stroke: "currentColor", strokeWidth: "1.8" }),
              /* @__PURE__ */ jsx("path", { d: "M6 13v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5", stroke: "currentColor", strokeWidth: "1.8" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-3 text-2xl font-semibold", children: "Get Started" })
          ] }),
          /* @__PURE__ */ jsxs("form", { className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Email" }),
              /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Enter your email", className: "mt-2 w-full rounded-lg bg-white text-slate-900 px-4 py-2.5 outline-none" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Message" }),
              /* @__PURE__ */ jsx("textarea", { rows: 3, placeholder: "What are you say ?", className: "mt-2 w-full rounded-lg bg-white text-slate-900 px-4 py-2.5 outline-none" })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-3 min-h-[48px]", children: "Request Demo" }),
            /* @__PURE__ */ jsxs("div", { className: "text-end text-slate-400 text-sm", children: [
              "or ",
              /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-white/80 hover:underline", children: "Start Free Trial" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1 md:col-span-2", children: /* @__PURE__ */ jsx("hr", { className: "border-slate-700/60" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-extrabold text-emerald-400", children: "Biccas" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-400", children: "Get started now try our product" }),
          /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Enter your email here",
                className: "w-full rounded-full bg-transparent border border-slate-600 px-5 py-3 pr-28 text-slate-200 placeholder:text-slate-500 outline-none"
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "absolute right-1 top-1 bottom-1 rounded-full px-5 grid place-items-center bg-emerald-500 hover:bg-emerald-700 text-white min-w-[110px]",
                "aria-label": "Submit email",
                children: [
                  /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", className: "mr-1", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 5l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
                  "Submit"
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:ml-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Support" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-slate-300", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Help centre" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Account information" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "About" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Contact us" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Help and Solution" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-slate-300", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Talk to support" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Support docs" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "System status" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Covid response" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Product" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-slate-300", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Update" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Security" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Beta test" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Pricing product" }) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "px-4 sm:px-6 lg:px-8 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm", children: [
        /* @__PURE__ */ jsx("div", { children: "© 2022 Biccas Inc. Copyright and rights reserved" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Terms and Conditions" }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "•" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Privacy Policy" })
        ] })
      ] }) })
    ] })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dz35UTVL.js", "imports": ["/assets/components-JNPPpeZA.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-D6YTtkaL.js", "imports": ["/assets/components-JNPPpeZA.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DAIVRh9Z.js", "imports": ["/assets/components-JNPPpeZA.js"], "css": [] } }, "url": "/assets/manifest-4847c211.js", "version": "4847c211" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
