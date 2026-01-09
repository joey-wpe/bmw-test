import { SecondLevelMenuItemFragment } from "@/__generated__/graphql";
import ChevronRightIcon from "@root/public/img/chevron-right.svg";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { BreadcrumbsState } from "./mobile-menu";
import { ThirdLevelMenu } from "./third-level-menu";

interface Props {
  menuItems: SecondLevelMenuItemFragment[];
  isActive: boolean;
  setBreadcrumbs: Dispatch<SetStateAction<BreadcrumbsState[]>>;
  isBreadcrumb: (id: string) => boolean;
}

export function SecondLevelMenu({
  menuItems,
  isActive,
  setBreadcrumbs,
  isBreadcrumb,
}: Props) {
  const openSubMenu = (item: SecondLevelMenuItemFragment) => {
    setBreadcrumbs((breadcrumbs) => [
      ...breadcrumbs,
      { id: item.id, label: item.label },
    ]);
  };

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          className="absolute left-0 top-0 h-full w-full border-l border-stone-950 border-opacity-50 bg-stone-900 pt-6 text-base-sm font-bold"
          initial={{ x: "50%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
        >
          <ul className="grid gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.childItems.nodes.length > 0 ? (
                  <>
                    <div
                      className="flex h-full cursor-pointer items-center justify-between hover:bg-stone-750 active:bg-stone-750"
                      onClick={() => openSubMenu(item)}
                    >
                      <span className="flex-1 px-9 py-2 font-bold">
                        {item.label}
                      </span>
                      <span className="py-2 pl-8 pr-9">
                        <ChevronRightIcon />
                      </span>
                    </div>
                    <ThirdLevelMenu
                      menuItems={item.childItems.nodes}
                      isActive={isBreadcrumb(item.id)}
                    />
                  </>
                ) : (
                  <Link
                    href={item.uri}
                    target={item.target}
                    className="remove-underline block flex-1 px-9 py-2 font-bold hover:bg-stone-750 active:bg-stone-750"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
