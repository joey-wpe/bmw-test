import { TopLevelMenuItemFragment } from "@/__generated__/graphql";
import { useDebounceMotionHover } from "@/hooks";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface MenuItemProps {
  item: TopLevelMenuItemFragment;
}

export function TopLevelMenuItem({ item }: MenuItemProps) {
  const { isHovering, handleMouseEnter, handleMouseLeave } =
    useDebounceMotionHover();

  return (
    <motion.li
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      className="flex h-full cursor-pointer items-center text-base hover:bg-stone-900 lg:px-4 xl:px-7"
    >
      {item.childItems.nodes.length > 0 ? (
        <>
          <span className="font-bold">{item.label}</span>
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-15 z-0 w-[753px] bg-stone-900 pb-10 pl-11 pr-8 pt-6 shadow-lg"
              >
                <ul className="flex justify-between gap-12">
                  {item.childItems.nodes.map((subItem) => (
                    <li key={subItem.id}>
                      <div className="mb-3 font-bold">{subItem.label}</div>
                      {subItem.childItems.nodes.length > 0 && (
                        <div className="text-sm font-light">
                          <ul>
                            {subItem.childItems.nodes.map((subSubItem) => (
                              <li key={subSubItem.id}>
                                <Link
                                  href={subSubItem.uri}
                                  target={item.target}
                                  className="inline-block pb-2 pt-1"
                                >
                                  {subSubItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.uri}
          target={item.target}
          className="remove-underline font-bold"
        >
          {item.label}
        </Link>
      )}
    </motion.li>
  );
}
