// Simplified lazy motion components - removing complex type wrappers to avoid conflicts
import dynamic from "next/dynamic";

// Export direct dynamic imports for simpler usage
export const LazyMotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  {
    ssr: false,
    loading: () => <div className="animate-pulse" />,
  }
);

export const LazyMotionLi = dynamic(
  () => import("motion/react").then((mod) => mod.motion.li),
  {
    ssr: false,
    loading: () => <li />,
  }
);

export const LazyAnimatePresence = dynamic(
  () => import("motion/react").then((mod) => mod.AnimatePresence),
  {
    ssr: false,
    loading: () => <></>,
  }
);