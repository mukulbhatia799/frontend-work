import { useEffect, useState } from "react";
import { useSpring, animate } from "framer-motion";

type Props = {
  value: number;
  duration?: number;     // seconds
  decimals?: number;     // default 0
  className?: string;
};

export default function AnimatedNumber({
  value,
  duration = 0.6,
  decimals = 0,
  className,
}: Props) {
  // spring holds the animated numeric value
  const spring = useSpring(value, { stiffness: 140, damping: 18 });
  const [display, setDisplay] = useState<string>(() =>
    decimals ? value.toFixed(decimals) : String(value)
  );

  useEffect(() => {
    // animate the spring to the new target
    const controls = animate(spring, value, { duration, ease: "easeOut" });
    // update text on every spring change
    const unsub = spring.on("change", (v) => {
      const num = Number(v);
      setDisplay(decimals ? num.toFixed(decimals) : String(Math.round(num)));
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, duration, decimals, spring]);

  return <span className={className}>{display}</span>;
}
