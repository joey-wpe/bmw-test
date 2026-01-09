import dynamic from "next/dynamic";
import { ComponentProps, ReactNode } from "react";

const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  {
    ssr: false,
    loading: () => <div />,
  }
);

const MotionLi = dynamic(
  () => import("motion/react").then((mod) => mod.motion.li),
  {
    ssr: false,
    loading: () => <li />,
  }
);

const AnimatePresence = dynamic(
  () => import("motion/react").then((mod) => mod.AnimatePresence),
  {
    ssr: false,
    loading: () => <>{children}</>,
  }
);

interface LazyMotionDivProps extends ComponentProps<"div"> {
  children: ReactNode;
  animate?: any;
  initial?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  custom?: any;
}

interface LazyMotionLiProps extends ComponentProps<"li"> {
  children: ReactNode;
  animate?: any;
  initial?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  custom?: any;
}

interface LazyAnimatePresenceProps {
  children: ReactNode;
  mode?: "wait" | "sync" | "popLayout";
}

export function LazyMotionDiv(props: LazyMotionDivProps) {
  return <MotionDiv {...props} />;
}

export function LazyMotionLi(props: LazyMotionLiProps) {
  return <MotionLi {...props} />;
}

export function LazyAnimatePresence({ children, ...props }: LazyAnimatePresenceProps) {
  return <AnimatePresence {...props}>{children}</AnimatePresence>;
}