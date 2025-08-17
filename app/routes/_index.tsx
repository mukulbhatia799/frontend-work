import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Nav } from "../components/Nav";
import { useState, useEffect } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import { scrollToId } from "../utils/scroll";
import RatingStars from "../components/RatingStars";

export default function Index() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");
  const proPrice = billing === "monthly" ? 2 : 8;
  const businessPrice = billing === "monthly" ? 4 : 16;

  const people = [
    {
      name: "Aria Zinanrio",
      avatar: "/images/amanda.jpg",
      comment:
        "I am very helped by this E-wallet application, my days are easy to use this application and it's very helpful in my life, even I can pay in a short time 😊",
    },
    {
      name: "James Bailey",
      avatar: "/images/p2.jpg",
      comment:
        "This E-wallet is super convenient, I can handle my transactions anytime and anywhere, it saves me a lot of time in my daily activities and makes me feel stress-free 🙌",
    },
    {
      name: "Lucas Wang",
      avatar: "/images/p3.jpg",
      comment:
        "I really enjoy using this application, it makes my payments so simple and fast, I don’t need to carry cash anymore and that makes my everyday life more comfortable 😍",
    },
    {
      name: "Maria Gomez",
      avatar: "/images/p4.jpg",
      comment:
        "Such an amazing tool, this app has changed the way I manage my money, paying bills and shopping feels effortless now, and I love how smooth it works 💳✨",
    },
  ];

  const [active, setActive] = useState(0);
  const goNext = () => setActive((i) => (i + 1) % people.length);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % people.length), 4000);
    return () => clearInterval(id);
  }, []);

  const prefersReduced = useReducedMotion();

  const float = (distance = 10, delay = 0) =>
    prefersReduced
      ? {}
      : {
          y: [0, -distance, 0],
          transition: {
            duration: 3.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay,
          },
        };

  const floatTilt = (base = -10, delay = 0) =>
    prefersReduced
      ? {}
      : {
          rotate: [base, base - 4, base],
          y: [0, -6, 0],
          transition: {
            duration: 3.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay,
          },
        };

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section
        id="hero"
        className="container-tight grid md:grid-cols-2 gap-10 lg:gap-12 pt-6 md:pt-10 pb-14 md:pb-24"
      >
        <div className="flex flex-col items-start justify-center">
          {/* Title + curved swoosh */}
          <div className="relative w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -15 }}
              transition={{ duration: 0.7 }}
              className="font-extrabold leading-[1.1] pb-10 md:pb-14
                         text-[clamp(2.1rem,6vw,3.75rem)] md:text-6xl"
            >
              We're here to <span className="text-emerald-600">Increase</span> your{" "}
              <span>Productivity</span>
            </motion.h1>

            {/* Curved swoosh (smaller; sits just under the word) */}
            <svg
              aria-hidden
              preserveAspectRatio="none"
              className="pointer-events-none select-none absolute left-0 bottom-2 md:bottom-3 w-[260px] sm:w-[360px] md:w-[520px]"
              viewBox="0 0 520 80"
              fill="none"
            >
              <path d="M6 62 C 120 20, 400 20, 514 62" stroke="#10B981" strokeWidth="10" strokeLinecap="round" />
              <path d="M6 62 C 120 32, 400 32, 514 62" stroke="#34D399" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>

          {/* Subtext */}
          <p className="mt-4 sm:mt-6 text-slate-600 max-w-xl font-semibold text-[clamp(0.95rem,1.8vw,1.125rem)]">
            Let's make your work more organized and easy using the Taskio dashboard with many of the latest
            features for managing work every day.
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#cta" className="btn-primary">
              Try free trial
            </a>
            <button className="btn-ghost">View Demo</button>
          </div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative p-2 sm:p-4 isolate">
            {/* Green board */}
            <div className="relative overflow-hidden rounded-3xl bg-emerald-300/40 border border-emerald-200 shadow-xl w-full max-w-[540px] h-[340px] sm:h-[400px] md:h-[430px] ml-auto">
              <svg
                className="absolute inset-0 w-full h-full opacity-70"
                viewBox="0 0 540 430"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 300 L120 220 L200 280 L250 160 L330 240 L410 140 L530 200"
                  stroke="#10B981"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M0 340 L90 260 L170 320 L230 220 L310 300 L390 180 L520 240"
                  stroke="#059669"
                  strokeOpacity="0.7"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
              <img
                src="/images/person.png"
                alt="Person"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[330px] sm:h-[390px] md:h-[420px] w-auto object-contain drop-shadow-2xl z-10"
              />
            </div>

            {/* TOP-LEFT: Enter amount + Send */}
            <motion.div
              className="absolute -top-10 left-2 sm:-top-12 sm:-left-10 md:-top-12 md:-left-12 z-30 will-change-transform transform-gpu"
              initial={true}
              animate={float(10, 0.2)}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <div className="flex items-center gap-3 bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base">
                <div>
                  <div className="text-slate-400 text-[11px] sm:text-xs">Enter amount</div>
                  <div className="font-semibold">$450.00</div>
                </div>
                <button className="rounded-xl bg-emerald-500 text-white font-medium px-3.5 py-1.5 sm:px-4 sm:py-2">
                  Send
                </button>
              </div>
            </motion.div>

            {/* LEFT-MIDDLE: purple tick */}
            <motion.div
              className="absolute left-2 top-[150px] sm:left-[-18px] sm:top-[165px] z-30 will-change-transform transform-gpu"
              initial={true}
              animate={float(8, 0.35)}
              whileHover={{ scale: 1.05, rotate: -4 }}
            >
              <div className="h-8 w-8 sm:h-9 sm:w-9 grid place-items-center rounded-xl bg-indigo-600 text-white shadow-soft">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* TOP-RIGHT: orange database icon */}
            <motion.div
              className="absolute top-2 right-3 sm:top-4 sm:right-6 z-30 will-change-transform transform-gpu"
              initial={true}
              animate={float(8, 0.5)}
            >
              <div className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-orange-100 text-orange-700 shadow-soft">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="12" cy="6" rx="6" ry="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </motion.div>

            {/* RIGHT-BOTTOM: tilted credit card */}
            <motion.div
              className="absolute bottom-6 right-2 sm:bottom-10 sm:right-4 md:bottom-12 md:-right-6 z-40 will-change-transform transform-gpu"
              initial={true}
              style={{ rotate: -10 }}
              animate={floatTilt(-10, 0.3)}
              whileHover={{ y: -8, rotate: -6, scale: 1.02 }}
            >
              <div className="w-[180px] h-[120px] sm:w-[200px] sm:h-[140px] rounded-2xl bg-slate-900 text-white shadow-2xl p-4 grid grid-rows-[auto_1fr_auto] gap-2">
                <div className="flex gap-2">
                  <span className="h-6 w-6 rounded-full bg-slate-600/60"></span>
                  <span className="h-6 w-6 rounded-full bg-slate-700/80"></span>
                </div>
                <div className="text-sm tracking-wide opacity-90">Credit Crad</div>
                <div className="flex items-end justify-between opacity-90">
                  <span className="tracking-[0.3em] text-sm">●●●● 1234</span>
                  <span className="text-xs">09/25</span>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM-LEFT: Total Income */}
            <motion.div
              className="absolute -bottom-10 left-4 sm:-bottom-12 sm:left-8 z-30 will-change-transform transform-gpu"
              initial={true}
              animate={float(10, 0.1)}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-2.5 sm:py-3 text-sm">
                <div className="text-slate-500 text-[11px] sm:text-xs">Total Income</div>
                <div className="font-semibold">$245.00</div>
              </div>
            </motion.div>

            {/* BOTTOM-RIGHT: chat bubble */}
            <motion.div
              className="absolute right-4 bottom-2 sm:right-10 sm:bottom-3 z-30 will-change-transform transform-gpu"
              initial={true}
              animate={float(8, 0.7)}
            >
              <div className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-orange-100 text-orange-700 shadow-soft">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 11.5a7.5 7.5 0 0 1-10.5 6.8L5 20l1.7-4.7A7.5 7.5 0 1 1 21 11.5z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TRUSTED BY */}
      <section className="container-tight pb-10">
        <div className="text-center">
          <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold">
            More than 25,000 teams use Collabs
          </h3>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-4 text-slate-500 opacity-60">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-md">
                <img src="/images/unsplash-icon.svg" alt="Unsplash" className="grayscale opacity-70 w-full h-full" />
              </span>
              <span className="font-semibold text-[18px] sm:text-[22px]">Unsplash</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-[4px]">
                <img src="/images/notion-icon.svg" alt="Notion" className="grayscale opacity-70 w-full h-full" />
              </span>
              <span className="font-semibold text-[18px] sm:text-[22px]">Notion</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-md tracking-tight">
                <img src="/images/intercom-icon.svg" alt="Intercom" className="grayscale opacity-70 w-full h-full" />
              </span>
              <span className="font-semibold tracking-wide uppercase text-[17px] sm:text-[21px]">INTERCOM</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 border-[4px] sm:border-[5px] border-slate-500 rounded-md text-[24px] sm:text-[30px] font-semibold">
                d
              </span>
              <span className="font-semibold lowercase text-[18px] sm:text-[22px]">descript</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full">
                <img src="/images/grammarly-icon.svg" alt="Grammarly" className="grayscale opacity-70 w-full h-full" />
              </span>
              <span className="font-semibold text-[18px] sm:text-[22px]">grammarly</span>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section id="product" className="py-14 sm:py-16">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start bg-gray-50 ring-1 ring-emerald-50/70 p-6 sm:p-8 md:p-12">
            <div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
                How we support our partner all over the world
              </h2>
              <p className="mt-3 sm:mt-4 text-slate-600">
                SaaS becomes a common delivery model for many business applications, including office
                software, messaging software, payroll processing software, DBMS software, and management
                software.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-8 sm:gap-12">
                <div>
                  <RatingStars rating={4.9} size={22} speed={0.8} />
                  <div className="mt-2 font-semibold">4.9 / 5 rating</div>
                  <div className="text-slate-500 text-sm">databricks</div>
                </div>
                <div>
                  <RatingStars rating={4.8} size={22} speed={0.8} />
                  <div className="mt-2 font-semibold">4.8 / 5 rating</div>
                  <div className="text-slate-500 text-sm">Chainalysis</div>
                </div>
              </div>
            </div>

            {/* RIGHT: three items */}
            <div className="space-y-7 sm:space-y-10">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="grid place-items-center shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 text-emerald-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h4l2-5 3 10 2-6h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Publishing</h3>
                  <p className="text-slate-600">Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <span className="grid place-items-center shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 text-emerald-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v9h9A9 9 0 1 1 12 3z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12 12V3a9 9 0 0 1 9 9h-9z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Analytics</h3>
                  <p className="text-slate-600">Analyze your performance and create gorgeous reports.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <span className="grid place-items-center shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 text-emerald-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 7.5l6 0M7.5 8.8L10.5 15M16.5 8.8L13.5 15" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Engagement</h3>
                  <p className="text-slate-600">Quickly navigate and engage with your audience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container-tight py-16 lg:py-20">
        <div className="grid md:grid-cols-[1.1fr,1.3fr,auto] gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold">Our Features you can get</h2>
          </div>

          <p className="text-slate-600 md:text-center max-w-2xl justify-self-center text-[clamp(0.95rem,1.8vw,1.0625rem)]">
            We offer a variety of interesting features that you can help increase your productivity at work and
            manage your project easily
          </p>

          <div className="md:text-right justify-self-start md:justify-self-end">
            <button onClick={scrollToId("contact")} className="btn-primary">
              Get Started
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
          {/* CARD 1 */}
          <div className="rounded-3xl p-5 sm:p-6 glass hover:shadow-xl transition">
            <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-50">
              <div className="absolute left-6 top-6 space-y-3">
                <div className="h-10 sm:h-12 w-24 rounded-lg bg-emerald-400/90" />
                <div className="h-9 sm:h-10 w-24 rounded-lg bg-emerald-300/90" />
              </div>
              <div className="absolute left-[130px] sm:left-[150px] top-8 space-y-3">
                <div className="h-3 w-24 sm:w-28 rounded-full bg-emerald-200" />
                <div className="h-3 w-20 sm:w-24 rounded-full bg-emerald-200" />
                <div className="h-3 w-16 sm:w-20 rounded-full bg-emerald-200" />
              </div>
              <div className="absolute right-8 top-6 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-emerald-300 grid place-items-center">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" className="-rotate-12">
                  <path d="M3 11l17-7-7 17-2-6-6-4z" fill="#059669" />
                </svg>
              </div>
              <div className="absolute left-8 bottom-6 flex items-center gap-3 sm:gap-4">
                <span className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-sky-100" />
                <span className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-sky-500" />
              </div>
              <div className="absolute right-8 bottom-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-400 grid place-items-center">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-white/90" />
                  <span className="h-2 w-2 rounded-full bg-white/90" />
                  <span className="h-2 w-2 rounded-full bg-white/90" />
                </div>
              </div>
            </div>
            <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold">Collboration Teams</h3>
            <p className="text-slate-600 mt-2">Here you can handle projects together with team virtually</p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl p-5 sm:p-6 glass hover:shadow-xl transition">
            <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-50">
              <div className="absolute inset-4 rounded-xl bg-white shadow" />
              <div
                className="absolute left-8 right-16 top-6 h-16 sm:h-20 rounded-xl shadow-lg overflow-hidden"
                style={{ background: "linear-gradient(135deg,#34d399 0%,#22c55e 70%)" }}
              >
                <div className="absolute left-5 top-3 sm:top-4 text-white font-semibold text-sm sm:text-base">
                  Document File
                </div>
                <div className="absolute left-5 top-8 sm:top-9 text-white/90 text-[11px] sm:text-xs">456 GB | 1056 Items</div>
              </div>
              <div className="absolute right-8 top-6 h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white shadow grid place-items-center">
                <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-sm bg-emerald-400" />
              </div>
              <div className="absolute right-6 top-10 h-24 sm:h-28 w-2.5 sm:w-3 rounded-lg bg-sky-500" />
              <div className="absolute left-12 sm:left-14 right-12 sm:right-14 bottom-6 h-14 sm:h-16 rounded-xl bg-white shadow border border-slate-100">
                <svg viewBox="0 0 200 16" className="absolute top-0 left-0 right-0 w-full h-4">
                  <defs>
                    <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                      <circle cx="1.5" cy="3" r="1" fill="#d1fae5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
                <div className="absolute left-6 bottom-3 sm:bottom-4 flex items-end gap-3 sm:gap-4">
                  <span className="w-2.5 sm:w-3 h-6 sm:h-7 rounded bg-emerald-500" />
                  <span className="w-2.5 sm:w-3 h-8 sm:h-10 rounded bg-emerald-400" />
                  <span className="w-2.5 sm:w-3 h-5 sm:h-6 rounded bg-emerald-500" />
                  <span className="w-2.5 sm:w-3 h-7 sm:h-9 rounded bg-emerald-400" />
                </div>
              </div>
            </div>
            <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold">Cloud Storage</h3>
            <p className="text-slate-600 mt-2">No need to worry about storage because we provide storage up to 2 TB</p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl p-5 sm:p-6 glass hover:shadow-xl transition">
            <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-50">
              <div className="absolute left-1/2 -translate-x-1/2 top-4 h-16 sm:h-20 w-28 sm:w-32">
                <svg viewBox="0 0 120 80" className="w-full h-full">
                  <path d="M10,70 A50,50 0 0 1 82,22" stroke="#0ea5e9" strokeWidth="18" fill="none" strokeLinecap="round" />
                  <path d="M82,22 A50,50 0 0 1 110,70" stroke="#facc15" strokeWidth="18" fill="none" strokeLinecap="round" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] h-9 sm:h-10 w-9 sm:w-10 rounded-full bg-white shadow grid place-items-center">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="text-sky-500">
                    <path d="M12 3s5 6.2 5 9.2A5 5 0 1 1 7 12.2C7 9.2 12 3 12 3z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-black font-bold">
                  60%
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-black font-bold">
                  40%
                </div>
              </div>

              <div className="absolute left-6 right-6 top-[88px] sm:top-[92px] space-y-2.5 sm:space-y-3">
                <div className="h-11 sm:h-12 rounded-xl bg-white shadow flex items-center gap-3 px-3">
                  <span className="h-6 sm:h-7 w-6 sm:w-7 rounded-lg bg-sky-100" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2.5 w-32 sm:w-40 rounded bg-slate-200" />
                    <div className="h-2.5 w-20 sm:w-24 rounded bg-emerald-400" />
                  </div>
                </div>
                <div className="h-11 sm:h-12 rounded-xl bg-white shadow flex items-center gap-3 px-3">
                  <span className="h-6 sm:h-7 w-6 sm:w-7 rounded-lg bg-sky-100" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2.5 w-28 sm:w-36 rounded bg-slate-200" />
                    <div className="h-2.5 w-24 sm:w-28 rounded bg-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="absolute left-6 bottom-6 h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-emerald-100 grid place-items-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="text-emerald-600">
                  <path d="M4 17V7a2 2 0 0 1 2-2h7l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M13 5v4h4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold">Daily Analytics</h3>
            <p className="text-slate-600 mt-2">We always provide useful information to make it easier for you every day</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-14 sm:py-16 bg-gradient-to-r from-emerald-50/60 to-white">
        <div className="container-tight grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold">What Benifit Will You Get</h2>
            <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {[
                "Free Consulting With Experet Saving Money",
                "Online Banking",
                "Investment Report Every Month",
                "Saving Money For The Future",
                "Online Transection",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 sm:gap-4">
                  <span className="grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-100 text-emerald-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[clamp(1rem,2vw,1.125rem)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Laptop + overlays */}
          <div className="relative isolate w-full max-w-[680px] md:ml-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="/images/laptop.png"
                alt="Laptop"
                className="block w-full h-[340px] sm:h-[400px] md:h-[420px] object-cover grayscale contrast-110"
              />
            </div>

            {/* 1) Amanda */}
            <motion.div
              className="absolute -top-6 left-6 sm:-top-8 sm:left-12 z-20 will-change-transform transform-gpu"
              initial={true}
              animate={float(8, 0.15)}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="bg-white rounded-2xl shadow-soft px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3">
                <img src="/images/amanda.jpg" alt="Amanda Young" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover" />
                <div className="leading-tight">
                  <div className="font-semibold text-sm sm:text-base">Amanda Young</div>
                  <div className="text-slate-500 text-[11px] sm:text-xs">Expert Saving Money</div>
                </div>
                <span className="ml-1.5 sm:ml-2 grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.div>

            {/* 2) Total Income */}
            <motion.div
              className="absolute top-[140px] right-2 sm:top-[160px] sm:right-4 z-20 will-change-transform transform-gpu"
              initial={true}
              animate={float(10, 0.25)}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="bg-white rounded-xl shadow-soft px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm flex items-center gap-2.5 sm:gap-3">
                <div>
                  <div className="text-slate-500 text-[11px] sm:text-xs">Total Income</div>
                  <div className="font-semibold">$245.00</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-600" fill="none">
                  <path d="M4 18V10m6 8V6m6 12v-4m4 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

            {/* 3) Message icon */}
            <motion.div
              className="absolute left-[200px] top-[170px] sm:left-[260px] sm:top-[185px] rotate-12 z-20 will-change-transform transform-gpu"
              initial={true}
              animate={float(6, 0.35)}
              whileHover={{ scale: 1.06, rotate: 8 }}
            >
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-emerald-100 text-emerald-600 shadow-soft grid place-items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5h18v12H8l-5 4V5z" stroke="currentColor" strokeWidth="2" />
                </svg>``
              </div>
            </motion.div>

            {/* 4) Money Transfer */}
            <motion.div
              className="absolute -bottom-6 left-[110px] sm:-bottom-7 sm:left-[150px] z-20 will-change-transform transform-gpu"
              initial={true}
              animate={float(8, 0.45)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-white rounded-2xl shadow-soft px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3">
                <span className="grid place-items-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-emerald-100 text-emerald-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-slate-800 text-sm sm:text-base">Money Transfer Successfull</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container-tight py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold">Choose Plan That’s Right For You</h2>
          <p className="mt-3 text-slate-500">Choose plan that works best for you, feel free to contact us</p>

          <div className="mt-6 inline-flex rounded-2xl bg-white shadow-soft ring-1 ring-slate-100 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-4 sm:px-5 py-2 rounded-xl font-medium ${
                billing === "monthly" ? "text-white bg-emerald-500 shadow" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Bil Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`px-4 sm:px-5 py-2 rounded-xl font-medium ${
                billing === "yearly" ? "text-white bg-emerald-500 shadow" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Bil Yearly
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-6 items-stretch">
          {/* FREE */}
          <div className="relative rounded-[28px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[520px] md:min-h-[560px]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">Free</h3>
              <p className="mt-1 text-slate-500">Have a go and test your superpowers</p>
              <div className="mt-6 text-center">
                <div className="flex flex-col gap-[16px] sm:gap-[20px] items-center leading-none">
                  <span className="text-slate-400 -mb-1 text-[18px] sm:text-[20px]">$</span>
                  <AnimatedNumber value={0} className="text-5xl sm:text-6xl font-extrabold" />
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5 space-y-3.5 sm:space-y-4">
                {["2 Users", "2 Files", "Public Share & Comments", "Chat Support", "New income apps"].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-6">
              <button
                type="button"
                className="w-full rounded-2xl px-5 py-3 bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 font-medium"
              >
                Signup for free
              </button>
            </div>
          </div>

          {/* PRO */}
          <div className="relative rounded-[28px] overflow-hidden border border-emerald-500 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[560px] md:min-h-[600px] bg-emerald-500 text-white">
            {/* hide big arcs on small screens */}
            <div className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-24 w-[560px] h-[560px] rounded-full bg-emerald-400/55"></div>
            <div className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-[92px] w-[560px] h-[560px] rounded-full border border-emerald-300/70"></div>

            <div className="relative z-[1]">
              <h3 className="text-xl sm:text-2xl font-bold">Pro</h3>
              <p className="mt-1 text-emerald-50/90">Experiment the power of infinite possibilities</p>

              <div className="mt-6 text-center">
                <div className="flex flex-col gap-[16px] sm:gap-[20px] items-center leading-none">
                  <span className="opacity-90 -mb-1 text-[18px] sm:text-[20px]">$</span>
                  <AnimatedNumber value={proPrice} className="text-5xl sm:text-6xl font-extrabold" />
                </div>
                <div className="mt-3 inline-block rounded-full bg-emerald-600/70 px-3 py-1 text-sm">Save $50 a year</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white text-slate-900 p-4 sm:p-5 space-y-3.5 sm:space-y-4 shadow">
                {[
                  "4 Users",
                  "All apps",
                  "Unlimited editable exports",
                  "Folders and collaboration",
                  "All incoming apps",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-[1] mt-auto pt-6">
              <button
                type="button"
                className="w-full rounded-2xl px-5 py-3 bg-white text-emerald-600 hover:bg-emerald-900 hover:text-white font-medium"
              >
                Go to pro
              </button>
            </div>
          </div>

          {/* BUSINESS */}
          <div className="relative rounded-[28px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-6 sm:p-7 flex flex-col min-h-[520px] md:min-h-[560px]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">Business</h3>
              <p className="mt-1 text-slate-500">Unveil new superpowers and join the Design League</p>

              <div className="mt-6 text-center">
                <div className="flex flex-col gap-[16px] sm:gap-[20px] items-center leading-none">
                  <span className="text-slate-400 -mb-1 text-[18px] sm:text-[20px]">$</span>
                  <AnimatedNumber value={businessPrice} className="text-5xl sm:text-6xl font-extrabold" />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5 space-y-3.5 sm:space-y-4">
                {[
                  "All the features of pro plan",
                  "Account success Manager",
                  "Single Sign-On (SSO)",
                  "Co-conception program",
                  "Collaboration-Soon",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                className="w-full rounded-2xl px-5 py-3 bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 font-medium"
              >
                Goto Business
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE ARE SAYING + GET STARTED + BICCAS + LINKS */}
      <section id="contact" className="scroll-mt-[88px] bg-[#0F172A] text-slate-100">
        <div className="container-tight py-16 lg:py-20 grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12">
          {/* LEFT: Testimonial */}
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight">
              People are Saying
              <br />
              About DoWhith
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-400 max-w-md">
              Everything you need to accept to payment and grow your money of manage anywhere on planet
            </p>

            <div className="mt-4 sm:mt-6 text-6xl sm:text-7xl leading-none text-white">“</div>

            {/* fixed-height comment box */}
            <div className="mt-4 sm:mt-6 max-w-xl relative h-[84px] sm:h-[96px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 text-slate-300 leading-6"
                >
                  {people[active].comment}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-3 sm:mt-4 text-slate-400">_ {people[active].name}</div>

            <ul className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4">
              {people.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.name}>
                    <motion.button
                      type="button"
                      onClick={() => setActive(i)}
                      whileTap={{ scale: 0.95 }}
                      animate={{ scale: isActive ? 1.18 : 0.96, opacity: isActive ? 1 : 0.85 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden ring-2 ring-slate-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/30"
                      aria-label={`${p.name}'s comment`}
                    >
                      <img src={p.avatar} alt={p.name} className="h-full w-full object-cover" />
                    </motion.button>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full grid place-items-center border border-slate-500 text-slate-300 hover:border-slate-300 hover:text-white transition"
                  aria-label="Next testimonial"
                  title="Next"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          {/* RIGHT: Get Started form */}
          <div className="w-full max-w-md md:ml-auto">
            <div className="rounded-2xl bg-[#1B2330] text-white shadow-soft px-6 sm:px-8 py-7 sm:py-9 ring-1 ring-slate-700">
              <div className="grid place-items-center">
                <svg width="44" height="44" viewBox="0 0 24 24" className="text-emerald-400" fill="none">
                  <ellipse cx="12" cy="6" rx="6" ry="3" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M6 6v7c0 1.7 2.7 3 6 3s6-1.3 6-3V6" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M6 13v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <h3 className="mt-3 text-xl sm:text-2xl font-semibold">Get Started</h3>
              </div>

              <form className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
                <label className="block">
                  <span className="text-sm text-slate-300">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-lg bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-slate-300">Message</span>
                  <textarea
                    rows={3}
                    placeholder="What are you say ?"
                    className="mt-2 w-full rounded-lg bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 outline-none"
                  />
                </label>

                <button
                  type="button"
                  className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-2.5 sm:py-3"
                >
                  Request Demo
                </button>
                <div className="text-end text-slate-400 text-sm">
                  or&nbsp;<a href="#" className="text-white hover:underline">Start Free Trial</a>
                </div>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="col-span-2">
            <hr className="border-slate-700/60" />
          </div>

          {/* LEFT: Biccas subscribe */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Biccas</h3>
            <p className="mt-2 text-slate-400">Get started now try our product</p>
            <div className="mt-4 sm:mt-5">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full rounded-full bg-transparent border border-slate-600 px-4 sm:px-5 py-2.5 sm:py-3 pr-12 sm:pr-14 text-slate-200 placeholder:text-slate-500 outline-none"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 bottom-1 rounded-full px-4 sm:px-5 grid place-items-center bg-emerald-500 hover:bg-emerald-700 text-white"
                  aria-label="Submit email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: link columns */}
          <div className="md:ml-auto w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              <div>
                <h4 className="font-semibold">Support</h4>
                <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-slate-300">
                  <li><a href="#" className="hover:text-white">Help centre</a></li>
                  <li><a href="#" className="hover:text-white">Account information</a></li>
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Help and Solution</h4>
                <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-slate-300">
                  <li><a href="#" className="hover:text-white">Talk to support</a></li>
                  <li><a href="#" className="hover:text-white">Support docs</a></li>
                  <li><a href="#" className="hover:text-white">System status</a></li>
                  <li><a href="#" className="hover:text-white">Covid responde</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Product</h4>
                <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-slate-300">
                  <li><a href="#" className="hover:text-white">Update</a></li>
                  <li><a href="#" className="hover:text-white">Security</a></li>
                  <li><a href="#" className="hover:text-white">Beta test</a></li>
                  <li><a href="#" className="hover:text-white">Pricing product</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="container-tight pb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-slate-400 text-sm">
            <div>© 2022 Biccas Inc. Copyright and rights reserved</div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <a href="#" className="hover:text-white">Terms and Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}