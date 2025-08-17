import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Person = {
  name: string;
  role?: string;
  avatar: string;   // e.g. "/images/p1.png"
  comment: string;
};

type Props = {
  /** Position this whole widget relative to its parent */
  className?: string;
  /** Colors so you can exactly match your Figma */
  bubbleBg?: string;       // e.g. "bg-white" or "bg-slate-900"
  bubbleText?: string;     // e.g. "text-slate-800" or "text-white"
  ringActive?: string;     // e.g. "ring-emerald-500"
  ringIdle?: string;       // e.g. "ring-slate-200"
  /** People + comments (4 required) */
  people?: Person[];
  /** Auto-rotate (seconds). Set 0 to disable. */
  autoplaySeconds?: number;
};

export default function QuadComments({
  className,
  bubbleBg = "bg-white",
  bubbleText = "text-slate-800",
  ringActive = "ring-emerald-500",
  ringIdle = "ring-slate-200",
  autoplaySeconds = 4,
  people = [
    { name: "Ava", avatar: "/images/amanda.jpg", comment: "Amazing interface and smooth flow!" },
    { name: "Ben", avatar: "/images/p2.jpg", comment: "The reports help our team every day." },
    { name: "Cara", avatar: "/images/p3.jpg", comment: "Love the speed and reliability." },
    { name: "Dan", avatar: "/images/p4.jpg", comment: "Collaboration feels effortless now." },
  ],
}: Props) {
  const [active, setActive] = useState(0);
  const goNext = () => setActive((i) => (i + 1) % people.length);

  useEffect(() => {
    if (!autoplaySeconds) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % people.length);
    }, autoplaySeconds * 1000);
    return () => clearInterval(id);
  }, [autoplaySeconds, people.length]);

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Comment bubble above the column of people */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-20 w-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`${bubbleBg} ${bubbleText} rounded-2xl shadow-soft px-4 py-3 relative`}
          >
            <p className="text-sm leading-snug">{people[active].comment}</p>
            {/* tail */}
            <div className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-3 w-3 rotate-45 ${bubbleBg} shadow`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical stack of 4 avatars */}
      <ul className="flex flex-col items-center gap-4 z-10">
        {people.map((p, i) => {
          const isActive = i === active;
          return (
            <li key={p.name}>
              <motion.button
                onClick={() => setActive(i)}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: isActive ? 1.16 : 0.96,
                  opacity: isActive ? 1 : 0.85,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={[
                  "h-12 w-12 rounded-full overflow-hidden ring-2 focus:outline-none focus:ring-4",
                  isActive ? ringActive : ringIdle,
                ].join(" ")}
                aria-label={`${p.name} comment`}
              >
                <img src={p.avatar} alt={p.name} className="h-full w-full object-cover" />
              </motion.button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
