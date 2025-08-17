import { jsx, jsxs } from "react/jsx-runtime";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, Link } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { motion, useSpring, animate, useReducedMotion, AnimatePresence } from "framer-motion";
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
const stylesheet = "/assets/tailwind-rPlRptfD.css";
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
const HEADER_HEIGHT = 88;
const scrollToId = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
};
function Nav() {
  return (
    // Sticky container that spans the viewport width
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-50 border-b border-slate-200 bg-white", children: /* @__PURE__ */ jsxs(
      motion.header,
      {
        "data-app-header": true,
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6 },
        className: "container-tight py-6 flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "text-2xl font-extrabold text-emerald-600", children: "Biccas" }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex gap-8 text-sm font-medium", children: [
            /* @__PURE__ */ jsx("a", { href: "#product", onClick: scrollToId("product"), className: "hover:text-emerald-600 text-[20px]", children: "Product" }),
            /* @__PURE__ */ jsx("a", { href: "#features", onClick: scrollToId("features"), className: "hover:text-emerald-600 text-[20px]", children: "Features" }),
            /* @__PURE__ */ jsx("a", { href: "#pricing", onClick: scrollToId("pricing"), className: "hover:text-emerald-600 text-[20px]", children: "Pricing" }),
            /* @__PURE__ */ jsx("a", { href: "#contact", onClick: scrollToId("contact"), className: "hover:text-emerald-600 text-[20px]", children: "Contact" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("button", { className: "btn-ghost", children: "Login" }),
            /* @__PURE__ */ jsx("a", { href: "#contact", onClick: scrollToId("contact"), className: "btn-primary", children: "Sign Up" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "md:hidden btn-ghost px-4 py-2", children: "Menu" })
        ]
      }
    ) })
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
  const floatTilt = (base = -10, delay = 0) => prefersReduced ? {} : {
    rotate: [base, base - 4, base],
    y: [0, -6, 0],
    transition: {
      duration: 3.4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay
    }
  };
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs(
      "section",
      {
        id: "hero",
        className: "container-tight grid md:grid-cols-2 gap-10 lg:gap-12 pt-6 md:pt-10 pb-14 md:pb-24",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: -15 },
                  transition: { duration: 0.7 },
                  className: "font-extrabold leading-[1.1] pb-10 md:pb-14\n                         text-[clamp(2.1rem,6vw,3.75rem)] md:text-6xl",
                  children: [
                    "We're here to ",
                    /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Increase" }),
                    " your",
                    " ",
                    /* @__PURE__ */ jsx("span", { children: "Productivity" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  "aria-hidden": true,
                  preserveAspectRatio: "none",
                  className: "pointer-events-none select-none absolute left-0 bottom-2 md:bottom-3 w-[260px] sm:w-[360px] md:w-[520px]",
                  viewBox: "0 0 520 80",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M6 62 C 120 20, 400 20, 514 62", stroke: "#10B981", strokeWidth: "10", strokeLinecap: "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M6 62 C 120 32, 400 32, 514 62", stroke: "#34D399", strokeWidth: "7", strokeLinecap: "round" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 sm:mt-6 text-slate-600 max-w-xl font-semibold text-[clamp(0.95rem,1.8vw,1.125rem)]", children: "Let's make your work more organized and easy using the Taskio dashboard with many of the latest features for managing work every day." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4", children: [
              /* @__PURE__ */ jsx("a", { href: "#cta", className: "btn-primary", children: "Try free trial" }),
              /* @__PURE__ */ jsx("button", { className: "btn-ghost", children: "View Demo" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              className: "relative",
              children: /* @__PURE__ */ jsxs("div", { className: "relative p-2 sm:p-4 isolate", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-emerald-300/40 border border-emerald-200 shadow-xl w-full max-w-[540px] h-[340px] sm:h-[400px] md:h-[430px] ml-auto", children: [
                  /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "absolute inset-0 w-full h-full opacity-70",
                      viewBox: "0 0 540 430",
                      fill: "none",
                      preserveAspectRatio: "none",
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M10 300 L120 220 L200 280 L250 160 L330 240 L410 140 L530 200",
                            stroke: "#10B981",
                            strokeWidth: "8",
                            strokeLinecap: "round"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M0 340 L90 260 L170 320 L230 220 L310 300 L390 180 L520 240",
                            stroke: "#059669",
                            strokeOpacity: "0.7",
                            strokeWidth: "6",
                            strokeLinecap: "round"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/person.png",
                      alt: "Person",
                      className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-[330px] sm:h-[390px] md:h-[420px] w-auto object-contain drop-shadow-2xl z-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute -top-10 left-2 sm:-top-12 sm:-left-10 md:-top-12 md:-left-12 z-30 will-change-transform transform-gpu",
                    initial: true,
                    animate: float(10, 0.2),
                    whileHover: { y: -12, scale: 1.03 },
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-slate-400 text-[11px] sm:text-xs", children: "Enter amount" }),
                        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "$450.00" })
                      ] }),
                      /* @__PURE__ */ jsx("button", { className: "rounded-xl bg-emerald-500 text-white font-medium px-3.5 py-1.5 sm:px-4 sm:py-2", children: "Send" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute left-2 top-[150px] sm:left-[-18px] sm:top-[165px] z-30 will-change-transform transform-gpu",
                    initial: true,
                    animate: float(8, 0.35),
                    whileHover: { scale: 1.05, rotate: -4 },
                    children: /* @__PURE__ */ jsx("div", { className: "h-8 w-8 sm:h-9 sm:w-9 grid place-items-center rounded-xl bg-indigo-600 text-white shadow-soft", children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute top-2 right-3 sm:top-4 sm:right-6 z-30 will-change-transform transform-gpu",
                    initial: true,
                    animate: float(8, 0.5),
                    children: /* @__PURE__ */ jsx("div", { className: "h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-orange-100 text-orange-700 shadow-soft", children: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: [
                      /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "6", rx: "6", ry: "3", stroke: "currentColor", strokeWidth: "2" }),
                      /* @__PURE__ */ jsx("path", { d: "M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6", stroke: "currentColor", strokeWidth: "2" }),
                      /* @__PURE__ */ jsx("path", { d: "M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6", stroke: "currentColor", strokeWidth: "2" })
                    ] }) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute bottom-6 right-2 sm:bottom-10 sm:right-4 md:bottom-12 md:-right-6 z-40 will-change-transform transform-gpu",
                    initial: true,
                    style: { rotate: -10 },
                    animate: floatTilt(-10, 0.3),
                    whileHover: { y: -8, rotate: -6, scale: 1.02 },
                    children: /* @__PURE__ */ jsxs("div", { className: "w-[180px] h-[120px] sm:w-[200px] sm:h-[140px] rounded-2xl bg-slate-900 text-white shadow-2xl p-4 grid grid-rows-[auto_1fr_auto] gap-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "h-6 w-6 rounded-full bg-slate-600/60" }),
                        /* @__PURE__ */ jsx("span", { className: "h-6 w-6 rounded-full bg-slate-700/80" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm tracking-wide opacity-90", children: "Credit Crad" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between opacity-90", children: [
                        /* @__PURE__ */ jsx("span", { className: "tracking-[0.3em] text-sm", children: "●●●● 1234" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs", children: "09/25" })
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute -bottom-10 left-4 sm:-bottom-12 sm:left-8 z-30 will-change-transform transform-gpu",
                    initial: true,
                    animate: float(10, 0.1),
                    whileHover: { y: -8, scale: 1.03 },
                    children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-2.5 sm:py-3 text-sm", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-[11px] sm:text-xs", children: "Total Income" }),
                      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "$245.00" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute right-4 bottom-2 sm:right-10 sm:bottom-3 z-30 will-change-transform transform-gpu",
                    initial: true,
                    animate: float(8, 0.7),
                    children: /* @__PURE__ */ jsx("div", { className: "h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-orange-100 text-orange-700 shadow-soft", children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M21 11.5a7.5 7.5 0 0 1-10.5 6.8L5 20l1.7-4.7A7.5 7.5 0 1 1 21 11.5z",
                        stroke: "currentColor",
                        strokeWidth: "2"
                      }
                    ) }) })
                  }
                )
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "container-tight pb-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold", children: "More than 25,000 teams use Collabs" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-4 text-slate-500 opacity-60", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-md", children: /* @__PURE__ */ jsx("img", { src: "/images/unsplash-icon.svg", alt: "Unsplash", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[18px] sm:text-[22px]", children: "Unsplash" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-[4px]", children: /* @__PURE__ */ jsx("img", { src: "/images/notion-icon.svg", alt: "Notion", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[18px] sm:text-[22px]", children: "Notion" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-md tracking-tight", children: /* @__PURE__ */ jsx("img", { src: "/images/intercom-icon.svg", alt: "Intercom", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-wide uppercase text-[17px] sm:text-[21px]", children: "INTERCOM" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 border-[4px] sm:border-[5px] border-slate-500 rounded-md text-[24px] sm:text-[30px] font-semibold", children: "d" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold lowercase text-[18px] sm:text-[22px]", children: "descript" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full", children: /* @__PURE__ */ jsx("img", { src: "/images/grammarly-icon.svg", alt: "Grammarly", className: "grayscale opacity-70 w-full h-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[18px] sm:text-[22px]", children: "grammarly" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "product", className: "py-14 sm:py-16", children: /* @__PURE__ */ jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 md:gap-12 items-start bg-gray-50 ring-1 ring-emerald-50/70 p-6 sm:p-8 md:p-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold", children: "How we support our partner all over the world" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 text-slate-600", children: "SaaS becomes a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, and management software." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 sm:mt-8 flex flex-wrap gap-8 sm:gap-12", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(RatingStars, { rating: 4.9, size: 22, speed: 0.8 }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 font-semibold", children: "4.9 / 5 rating" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-sm", children: "databricks" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(RatingStars, { rating: 4.8, size: 22, speed: 0.8 }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 font-semibold", children: "4.8 / 5 rating" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-sm", children: "Chainalysis" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-7 sm:space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 sm:gap-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 12h4l2-5 3 10 2-6h5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold", children: "Publishing" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 sm:gap-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M12 3v9h9A9 9 0 1 1 12 3z", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M12 12V3a9 9 0 0 1 9 9h-9z", fill: "currentColor" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold", children: "Analytics" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Analyze your performance and create gorgeous reports." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 sm:gap-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "18", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M9 7.5l6 0M7.5 8.8L10.5 15M16.5 8.8L13.5 15", stroke: "currentColor", strokeWidth: "2" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold", children: "Engagement" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Quickly navigate and engage with your audience." })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "features", className: "container-tight py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1.1fr,1.3fr,auto] gap-6 md:gap-8 items-center", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold", children: "Our Features you can get" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 md:text-center max-w-2xl justify-self-center text-[clamp(0.95rem,1.8vw,1.0625rem)]", children: "We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily" }),
        /* @__PURE__ */ jsx("div", { className: "md:text-right justify-self-start md:justify-self-end", children: /* @__PURE__ */ jsx("button", { onClick: scrollToId("contact"), className: "btn-primary", children: "Get Started" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 md:mt-10 grid md:grid-cols-3 gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-5 sm:p-6 glass hover:shadow-xl transition", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute left-6 top-6 space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "h-10 sm:h-12 w-24 rounded-lg bg-emerald-400/90" }),
              /* @__PURE__ */ jsx("div", { className: "h-9 sm:h-10 w-24 rounded-lg bg-emerald-300/90" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-[130px] sm:left-[150px] top-8 space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "h-3 w-24 sm:w-28 rounded-full bg-emerald-200" }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-20 sm:w-24 rounded-full bg-emerald-200" }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-16 sm:w-20 rounded-full bg-emerald-200" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute right-8 top-6 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-emerald-300 grid place-items-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", className: "-rotate-12", children: /* @__PURE__ */ jsx("path", { d: "M3 11l17-7-7 17-2-6-6-4z", fill: "#059669" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-8 bottom-6 flex items-center gap-3 sm:gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-sky-100" }),
              /* @__PURE__ */ jsx("span", { className: "h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-sky-500" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute right-8 bottom-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-400 grid place-items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-white/90" }),
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-white/90" }),
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-white/90" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 sm:mt-6 text-lg sm:text-xl font-semibold", children: "Collboration Teams" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2", children: "Here you can handle projects together with team virtually" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-5 sm:p-6 glass hover:shadow-xl transition", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-50", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-4 rounded-xl bg-white shadow" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "absolute left-8 right-16 top-6 h-16 sm:h-20 rounded-xl shadow-lg overflow-hidden",
                style: { background: "linear-gradient(135deg,#34d399 0%,#22c55e 70%)" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-3 sm:top-4 text-white font-semibold text-sm sm:text-base", children: "Document File" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-8 sm:top-9 text-white/90 text-[11px] sm:text-xs", children: "456 GB | 1056 Items" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute right-8 top-6 h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white shadow grid place-items-center", children: /* @__PURE__ */ jsx("div", { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-sm bg-emerald-400" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute right-6 top-10 h-24 sm:h-28 w-2.5 sm:w-3 rounded-lg bg-sky-500" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-12 sm:left-14 right-12 sm:right-14 bottom-6 h-14 sm:h-16 rounded-xl bg-white shadow border border-slate-100", children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 16", className: "absolute top-0 left-0 right-0 w-full h-4", children: [
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "dots", width: "6", height: "6", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("circle", { cx: "1.5", cy: "3", r: "1", fill: "#d1fae5" }) }) }),
                /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#dots)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute left-6 bottom-3 sm:bottom-4 flex items-end gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2.5 sm:w-3 h-6 sm:h-7 rounded bg-emerald-500" }),
                /* @__PURE__ */ jsx("span", { className: "w-2.5 sm:w-3 h-8 sm:h-10 rounded bg-emerald-400" }),
                /* @__PURE__ */ jsx("span", { className: "w-2.5 sm:w-3 h-5 sm:h-6 rounded bg-emerald-500" }),
                /* @__PURE__ */ jsx("span", { className: "w-2.5 sm:w-3 h-7 sm:h-9 rounded bg-emerald-400" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 sm:mt-6 text-lg sm:text-xl font-semibold", children: "Cloud Storage" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2", children: "No need to worry about storage because we provide storage up to 2 TB" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-5 sm:p-6 glass hover:shadow-xl transition", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 -translate-x-1/2 top-4 h-16 sm:h-20 w-28 sm:w-32", children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 80", className: "w-full h-full", children: [
                /* @__PURE__ */ jsx("path", { d: "M10,70 A50,50 0 0 1 82,22", stroke: "#0ea5e9", strokeWidth: "18", fill: "none", strokeLinecap: "round" }),
                /* @__PURE__ */ jsx("path", { d: "M82,22 A50,50 0 0 1 110,70", stroke: "#facc15", strokeWidth: "18", fill: "none", strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] h-9 sm:h-10 w-9 sm:w-10 rounded-full bg-white shadow grid place-items-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", className: "text-sky-500", children: /* @__PURE__ */ jsx("path", { d: "M12 3s5 6.2 5 9.2A5 5 0 1 1 7 12.2C7 9.2 12 3 12 3z", fill: "currentColor" }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-black font-bold", children: "60%" }),
              /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-black font-bold", children: "40%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-6 right-6 top-[88px] sm:top-[92px] space-y-2.5 sm:space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "h-11 sm:h-12 rounded-xl bg-white shadow flex items-center gap-3 px-3", children: [
                /* @__PURE__ */ jsx("span", { className: "h-6 sm:h-7 w-6 sm:w-7 rounded-lg bg-sky-100" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-32 sm:w-40 rounded bg-slate-200" }),
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-20 sm:w-24 rounded bg-emerald-400" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "h-11 sm:h-12 rounded-xl bg-white shadow flex items-center gap-3 px-3", children: [
                /* @__PURE__ */ jsx("span", { className: "h-6 sm:h-7 w-6 sm:w-7 rounded-lg bg-sky-100" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-28 sm:w-36 rounded bg-slate-200" }),
                  /* @__PURE__ */ jsx("div", { className: "h-2.5 w-24 sm:w-28 rounded bg-emerald-400" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-6 bottom-6 h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-emerald-100 grid place-items-center", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", className: "text-emerald-600", children: [
              /* @__PURE__ */ jsx("path", { d: "M4 17V7a2 2 0 0 1 2-2h7l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M13 5v4h4", stroke: "currentColor", strokeWidth: "2" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 sm:mt-6 text-lg sm:text-xl font-semibold", children: "Daily Analytics" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2", children: "We always provide useful information to make it easier for you every day" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "benefits", className: "py-14 sm:py-16 bg-gradient-to-r from-emerald-50/60 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container-tight grid md:grid-cols-2 gap-10 md:gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold", children: "What Benifit Will You Get" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 sm:mt-8 space-y-4 sm:space-y-5", children: [
          "Free Consulting With Experet Saving Money",
          "Online Banking",
          "Investment Report Every Month",
          "Saving Money For The Future",
          "Online Transection"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[clamp(1rem,2vw,1.125rem)]", children: item })
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative isolate w-full max-w-[680px] md:ml-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/laptop.png",
            alt: "Laptop",
            className: "block w-full h-[340px] sm:h-[400px] md:h-[420px] object-cover grayscale contrast-110"
          }
        ) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute -top-6 left-6 sm:-top-8 sm:left-12 z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(8, 0.15),
            whileHover: { y: -10, scale: 1.03 },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-soft px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3", children: [
              /* @__PURE__ */ jsx("img", { src: "/images/amanda.jpg", alt: "Amanda Young", className: "h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover" }),
              /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm sm:text-base", children: "Amanda Young" }),
                /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-[11px] sm:text-xs", children: "Expert Saving Money" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "ml-1.5 sm:ml-2 grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-500 text-white", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M10 17l5-5-5-5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-[140px] right-2 sm:top-[160px] sm:right-4 z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(10, 0.25),
            whileHover: { y: -8, scale: 1.03 },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-soft px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm flex items-center gap-2.5 sm:gap-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-[11px] sm:text-xs", children: "Total Income" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "$245.00" })
              ] }),
              /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", className: "text-emerald-600", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M4 18V10m6 8V6m6 12v-4m4 4V8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute left-[200px] top-[170px] sm:left-[260px] sm:top-[185px] rotate-12 z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(6, 0.35),
            whileHover: { scale: 1.06, rotate: 8 },
            children: /* @__PURE__ */ jsxs("div", { className: "h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-emerald-100 text-emerald-600 shadow-soft grid place-items-center", children: [
              /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 5h18v12H8l-5 4V5z", stroke: "currentColor", strokeWidth: "2" }) }),
              "``"
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute -bottom-6 left-[110px] sm:-bottom-7 sm:left-[150px] z-20 will-change-transform transform-gpu",
            initial: true,
            animate: float(8, 0.45),
            whileHover: { y: -8, scale: 1.02 },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-800 text-sm sm:text-base", children: "Money Transfer Successfull" })
            ] })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "pricing", className: "container-tight py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold", children: "Choose Plan That’s Right For You" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-slate-500", children: "Choose plan that works best for you, feel free to contact us" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex rounded-2xl bg-white shadow-soft ring-1 ring-slate-100 p-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setBilling("monthly"),
              className: `px-4 sm:px-5 py-2 rounded-xl font-medium ${billing === "monthly" ? "text-white bg-emerald-500 shadow" : "text-slate-600 hover:bg-slate-50"}`,
              children: "Bil Monthly"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setBilling("yearly"),
              className: `px-4 sm:px-5 py-2 rounded-xl font-medium ${billing === "yearly" ? "text-white bg-emerald-500 shadow" : "text-slate-600 hover:bg-slate-50"}`,
              children: "Bil Yearly"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 md:mt-10 grid md:grid-cols-3 gap-6 items-stretch", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[28px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[520px] md:min-h-[560px]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold", children: "Free" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-slate-500", children: "Have a go and test your superpowers" }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] sm:gap-[20px] items-center leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-400 -mb-1 text-[18px] sm:text-[20px]", children: "$" }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: 0, className: "text-5xl sm:text-6xl font-extrabold" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5 space-y-3.5 sm:space-y-4", children: ["2 Users", "2 Files", "Public Share & Comments", "Chat Support", "New income apps"].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "w-full rounded-2xl px-5 py-3 bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 font-medium",
              children: "Signup for free"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[28px] overflow-hidden border border-emerald-500 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[560px] md:min-h-[600px] bg-emerald-500 text-white", children: [
          /* @__PURE__ */ jsx("div", { className: "hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-24 w-[560px] h-[560px] rounded-full bg-emerald-400/55" }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-[92px] w-[560px] h-[560px] rounded-full border border-emerald-300/70" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-[1]", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold", children: "Pro" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-emerald-50/90", children: "Experiment the power of infinite possibilities" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] sm:gap-[20px] items-center leading-none", children: [
                /* @__PURE__ */ jsx("span", { className: "opacity-90 -mb-1 text-[18px] sm:text-[20px]", children: "$" }),
                /* @__PURE__ */ jsx(AnimatedNumber, { value: proPrice, className: "text-5xl sm:text-6xl font-extrabold" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 inline-block rounded-full bg-emerald-600/70 px-3 py-1 text-sm", children: "Save $50 a year" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-white text-slate-900 p-4 sm:p-5 space-y-3.5 sm:space-y-4 shadow", children: [
              "4 Users",
              "All apps",
              "Unlimited editable exports",
              "Folders and collaboration",
              "All incoming apps"
            ].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative z-[1] mt-auto pt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "w-full rounded-2xl px-5 py-3 bg-white text-emerald-600 hover:bg-emerald-900 hover:text-white font-medium",
              children: "Go to pro"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[28px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[520px] md:min-h-[560px]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold", children: "Business" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-slate-500", children: "Unveil new superpowers and join the Design League" }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] sm:gap-[20px] items-center leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-400 -mb-1 text-[18px] sm:text-[20px]", children: "$" }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: businessPrice, className: "text-5xl sm:text-6xl font-extrabold" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5 space-y-3.5 sm:space-y-4", children: [
              "All the features of pro plan",
              "Account success Manager",
              "Single Sign-On (SSO)",
              "Co-conception program",
              "Collaboration-Soon"
            ].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "w-full rounded-2xl px-5 py-3 bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 font-medium",
              children: "Goto Business"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "scroll-mt-[88px] bg-[#0F172A] text-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-tight py-16 lg:py-20 grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight", children: [
            "People are Saying",
            /* @__PURE__ */ jsx("br", {}),
            "About DoWhith"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 text-slate-400 max-w-md", children: "Everything you need to accept to payment and grow your money of manage anywhere on planet" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 text-6xl sm:text-7xl leading-none text-white", children: "“" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 max-w-xl relative h-[84px] sm:h-[96px] overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs("div", { className: "mt-3 sm:mt-4 text-slate-400", children: [
            "_ ",
            people[active].name
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4", children: [
            people.map((p, i) => {
              const isActive = i === active;
              return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                motion.button,
                {
                  type: "button",
                  onClick: () => setActive(i),
                  whileTap: { scale: 0.95 },
                  animate: { scale: isActive ? 1.18 : 0.96, opacity: isActive ? 1 : 0.85 },
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                  className: "h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden ring-2 ring-slate-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/30",
                  "aria-label": `${p.name}'s comment`,
                  children: /* @__PURE__ */ jsx("img", { src: p.avatar, alt: p.name, className: "h-full w-full object-cover" })
                }
              ) }, p.name);
            }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: goNext,
                className: "h-10 w-10 sm:h-12 sm:w-12 rounded-full grid place-items-center border border-slate-500 text-slate-300 hover:border-slate-300 hover:text-white transition",
                "aria-label": "Next testimonial",
                title: "Next",
                children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M9 5l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-md md:ml-auto", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#1B2330] text-white shadow-soft px-6 sm:px-8 py-7 sm:py-9 ring-1 ring-slate-700", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid place-items-center", children: [
            /* @__PURE__ */ jsxs("svg", { width: "44", height: "44", viewBox: "0 0 24 24", className: "text-emerald-400", fill: "none", children: [
              /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "6", rx: "6", ry: "3", stroke: "currentColor", strokeWidth: "1.8" }),
              /* @__PURE__ */ jsx("path", { d: "M6 6v7c0 1.7 2.7 3 6 3s6-1.3 6-3V6", stroke: "currentColor", strokeWidth: "1.8" }),
              /* @__PURE__ */ jsx("path", { d: "M6 13v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5", stroke: "currentColor", strokeWidth: "1.8" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-3 text-xl sm:text-2xl font-semibold", children: "Get Started" })
          ] }),
          /* @__PURE__ */ jsxs("form", { className: "mt-5 sm:mt-6 space-y-3.5 sm:space-y-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Email" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Enter your email",
                  className: "mt-2 w-full rounded-lg bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Message" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  rows: 3,
                  placeholder: "What are you say ?",
                  className: "mt-2 w-full rounded-lg bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-2.5 sm:py-3",
                children: "Request Demo"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-end text-slate-400 text-sm", children: [
              "or ",
              /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:underline", children: "Start Free Trial" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx("hr", { className: "border-slate-700/60" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-extrabold text-emerald-400", children: "Biccas" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-400", children: "Get started now try our product" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-5", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Enter your email here",
                className: "w-full rounded-full bg-transparent border border-slate-600 px-4 sm:px-5 py-2.5 sm:py-3 pr-12 sm:pr-14 text-slate-200 placeholder:text-slate-500 outline-none"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "absolute right-1 top-1 bottom-1 rounded-full px-4 sm:px-5 grid place-items-center bg-emerald-500 hover:bg-emerald-700 text-white",
                "aria-label": "Submit email",
                children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 5l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:ml-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Support" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-slate-300", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Help centre" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Account information" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "About" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Contact us" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Help and Solution" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-slate-300", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Talk to support" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Support docs" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "System status" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Covid responde" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Product" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-slate-300", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Update" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Security" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Beta test" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Pricing product" }) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container-tight pb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-slate-400 text-sm", children: [
        /* @__PURE__ */ jsx("div", { children: "© 2022 Biccas Inc. Copyright and rights reserved" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Terms and Conditions" }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
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
const serverManifest = { "entry": { "module": "/assets/entry.client-Dz35UTVL.js", "imports": ["/assets/components-JNPPpeZA.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-DWsyOmig.js", "imports": ["/assets/components-JNPPpeZA.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DXhxFDcA.js", "imports": ["/assets/components-JNPPpeZA.js"], "css": [] } }, "url": "/assets/manifest-470ac601.js", "version": "470ac601" };
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
