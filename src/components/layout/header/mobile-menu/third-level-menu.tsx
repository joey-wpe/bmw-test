import { MenuItemFragment } from "@/__generated__/graphql";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface Props {
  menuItems: MenuItemFragment[];
  isActive: boolean;
}

export function ThirdLevelMenu({ menuItems, isActive }: Props) {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          className="absolute left-0 top-0 h-full w-full border-l border-stone-950 border-opacity-50 bg-stone-900 pt-6 text-base-sm font-bold"
          initial={{ x: "50%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
        >
          <ul className="grid">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex h-full cursor-pointer items-center justify-between"
              >
                <Link
                  href={item.uri}
                  target={item.target}
                  className="remove-underline flex-1 px-9 py-2 text-sm font-light hover:bg-stone-750 active:bg-stone-750"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
