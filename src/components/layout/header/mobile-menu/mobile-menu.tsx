import { TopLevelMenuItemFragment } from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import ChevronLeftIcon from "@root/public/img/chevron-left.svg";
import ChevronRightIcon from "@root/public/img/chevron-right.svg";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { SecondLevelMenu } from "./second-level-menu";

interface MobileMenuProps {
  menuActive: boolean;
  menuItems: TopLevelMenuItemFragment[];
}

export interface BreadcrumbsState {
  id: string;
  label: string;
}

export function MobileMenu({ menuActive, menuItems }: MobileMenuProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsState[]>([]);

  const isBreadcrumb = (id: string) => {
    return (
      breadcrumbs.length > 0 && !!breadcrumbs.find((item) => item.id === id)
    );
  };

  const activeItem = () => {
    const itemsLength = breadcrumbs.length;
    let item = "";
    if (itemsLength > 0) {
      item = breadcrumbs[itemsLength - 1].label;
    }
    return item;
  };

  const openSubMenu = (item: TopLevelMenuItemFragment) => {
    setBreadcrumbs((breadcrumbs) => [
      ...breadcrumbs,
      { id: item.id, label: item.label },
    ]);
  };

  const handleBack = () => {
    setBreadcrumbs((breadcrumbs) => breadcrumbs.slice(0, -1));
  };

  return (
    <AnimatePresence>
      {menuActive && (
        <motion.div
          initial={{ y: "-50%" }}
          animate={{ y: 0 }}
          exit={{ y: " -100%" }}
          className="absolute left-0 top-[50px] z-10 flex max-h-screen min-h-[490px] w-full flex-col overflow-hidden bg-stone-900 shadow-lg"
        >
          <div className="h-[40px] pr-3">
            {activeItem() && (
              <div
                className="inline-flex h-full cursor-pointer items-center justify-start gap-4 pl-3 pr-4 text-base-sm font-bold"
                onClick={handleBack}
              >
                <ChevronLeftIcon />
                {activeItem()}
              </div>
            )}
          </div>

          <Button
            url={`/`}
            variant="primary"
            label="Book Now"
            className="w-full"
          />
          <nav className="relative flex-1 pt-6 lg:gap-5 xl:gap-7">
            <ul className="grid gap-4">
              {(Array.isArray(menuItems) ? menuItems : []).map((item) => (
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
                      <SecondLevelMenu
                        menuItems={item.childItems.nodes}
                        isActive={isBreadcrumb(item.id)}
                        {...{ setBreadcrumbs, isBreadcrumb }}
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
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
