import { motion } from "framer-motion";

type Props = {
  rating: number;          // e.g. 4.9
  count?: number;          // total stars
  size?: number;           // px
  color?: string;          // filled color
  emptyColor?: string;     // outline color
  speed?: number;          // seconds per twinkle cycle
};

export default function RatingStars({
  rating,
  count = 5,
  size = 22,
  color = "#F59E0B",       // amber-500
  emptyColor = "#CBD5E1",  // slate-300
  speed = 0.9,
}: Props) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  const path =
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z";

  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => {
        const filled = i < full;
        const half = !filled && hasHalf && i === full;
        const delay = i * 0.25; // left -> right stagger

        if (filled) {
          // Animate a wrapper DIV + a glow overlay so scale/glow always render
          return (
            <motion.div
              key={i}
              className="relative inline-flex"
              style={{
                width: size,
                height: size,
                transformOrigin: "50% 50%",
                willChange: "transform, filter, box-shadow",
              }}
              initial={false}
              animate={{
                scale: [1, 1.18, 1],
                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
              }}
              transition={{
                duration: speed,
                delay,
                repeat: Infinity,
                repeatDelay: 0.15,
                ease: "easeInOut",
              }}
            >
              <svg width={size} height={size} viewBox="0 0 24 24" className="block">
                <path d={path} fill={color} />
              </svg>

              {/* glow layer */}
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full"
                initial={false}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(245,158,11,0)",
                    "0 0 14px rgba(245,158,11,0.95)",
                    "0 0 0px rgba(245,158,11,0)",
                  ],
                }}
                transition={{
                  duration: speed,
                  delay,
                  repeat: Infinity,
                  repeatDelay: 0.15,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          );
        }

        if (half) {
          // Half star: left half filled, no animation
          return (
            <svg key={i} width={size} height={size} viewBox="0 0 24 24" className="block">
              <defs>
                <clipPath id={`half-${i}`}>
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
              <path d={path} fill="none" stroke={color} strokeWidth="2" />
              <path d={path} fill={color} clipPath={`url(#half-${i})`} />
            </svg>
          );
        }

        // Empty star (outline)
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" className="block">
            <path d={path} fill="none" stroke={emptyColor} strokeWidth="2" />
          </svg>
        );
      })}
    </div>
  );
}
