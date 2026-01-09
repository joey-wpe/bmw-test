import { BlockFeaturedTabsTabs } from "@/__generated__/graphql";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";

interface TabSwitcherProps {
  tabs: BlockFeaturedTabsTabs[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export function TabSwitcher({
  tabs,
  activeTab,
  setActiveTab,
}: TabSwitcherProps) {
  const [direction, setDirection] = useState(1);
  const [prev, setPrev] = useState(-1);

  const toggleActive = (id: number) => {
    setPrev(activeTab);

    if (activeTab < id) {
      setDirection(1);
      setActiveTab(id);
    } else if (activeTab > id) {
      setDirection(-1);
      setActiveTab(id);
    }
  };

  return (
    <div className="flex items-center justify-center gap-7">
      {tabs &&
        tabs.map(({ tabHeading }, id) => (
          <div
            className={clsx([
              "relative flex max-w-[232px] flex-1 cursor-pointer items-center justify-center overflow-hidden border-b border-stone-600 py-4 text-base font-bold",
              activeTab === id ? "text-white" : "text-stone-600",
            ])}
            key={id}
            onClick={() => toggleActive(id)}
          >
            {tabHeading}
            <AnimatePresence initial={false}>
              {activeTab === id && direction === 1 && (
                <motion.div
                  className="absolute bottom-0 h-[1px] w-full bg-white transition-transform"
                  initial={{ translateX: "-100%" }}
                  animate={{ translateX: 0 }}
                ></motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {prev === id && direction === 1 && (
                <motion.div
                  className="absolute bottom-0 h-[1px] w-full bg-white transition-transform"
                  initial={{ translateX: 0 }}
                  animate={{ translateX: "100%" }}
                ></motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {activeTab === id && direction === -1 && (
                <motion.div
                  className="absolute bottom-0 h-[1px] w-full bg-white transition-transform"
                  initial={{ translateX: "100%" }}
                  animate={{ translateX: 0 }}
                ></motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {prev === id && direction === -1 && (
                <motion.div
                  className="absolute bottom-0 h-[1px] w-full bg-white transition-transform"
                  initial={{ translateX: 0 }}
                  animate={{ translateX: "-100%" }}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
    </div>
  );
}
