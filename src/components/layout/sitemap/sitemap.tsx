import { TopLevelMenuItemFragment } from "@/__generated__/graphql";
import Link from "next/link";

interface SitemapProps {
  menuItems: TopLevelMenuItemFragment[];
}

export function Sitemap({ menuItems }: SitemapProps) {
  return (
    <div className="container md:px-[4rem] lg:px-[6rem]">
      <h1 className="mb-20 mt-12 text-center font-light uppercase">
        BMW PERFORMANCE DRIVING SCHOOL SITE MAP
      </h1>

      <div className="mx-auto max-w-7xl">
        {menuItems.map((topLevelItem) => {
          return (
            <div
              key={topLevelItem.id}
              className="pb-6 first:pt-0 last:border-b-0"
            >
              {/* Section Title - spans full width */}
              <h5 className="mb-4 border-b border-stone-700 pb-3 text-left font-bold text-white md:pb-3">
                {topLevelItem.label}
              </h5>

              {/* Wrapper with 35% left space and 60% content on right */}
              <div className="grid grid-cols-[10%_90%] gap-[5%] lg:grid-cols-[30%_70%]">
                {/* Empty left space */}
                <div></div>

                {/* Right side content - Grid only */}
                <div>
                  {topLevelItem.childItems?.nodes?.length > 0 ? (
                    (() => {
                      // Check if any second-level items have third-level children
                      const hasThirdLevelItems =
                        topLevelItem.childItems.nodes.some(
                          (item) => item.childItems?.nodes?.length > 0
                        );

                      return hasThirdLevelItems ? (
                        /* Grid layout when there are third-level items */
                        (() => {
                          const itemCount =
                            topLevelItem.childItems.nodes.length;
                          // Calculate starting column for right-to-left flow:
                          // MD (2 columns): If items <= 2, start from (3 - itemCount)
                          // LG (3 columns): Start from (4 - min(itemCount, 3))
                          const getColumnStart = (idx: number) => {
                            if (idx === 0) {
                              const mdStart = itemCount === 1 ? 2 : 1;
                              const lgStart = Math.max(
                                1,
                                4 - Math.min(itemCount, 3)
                              );
                              return `md:col-start-${mdStart} lg:col-start-${lgStart}`;
                            }
                            return "";
                          };

                          return (
                            <div className="grid grid-cols-1 gap-2 text-left md:grid-cols-2 lg:grid-cols-3">
                              {topLevelItem.childItems.nodes.map(
                                (secondLevelItem, idx) => (
                                  <div
                                    key={secondLevelItem.id}
                                    className={`w-full px-3 md:w-auto ${getColumnStart(idx)} ${idx > 0 ? "mt-4 md:mt-0" : ""}`}
                                  >
                                    {/* Column Header */}
                                    <h5 className="mb-3 font-bold text-white">
                                      {secondLevelItem.label}
                                    </h5>

                                    {/* Column Links */}
                                    {secondLevelItem.childItems?.nodes?.length >
                                      0 && (
                                      <ul className="space-y-4">
                                        {secondLevelItem.childItems.nodes.map(
                                          (thirdLevelItem) => (
                                            <li key={thirdLevelItem.id}>
                                              <Link
                                                className="no-underline hover:text-white"
                                                href={thirdLevelItem.uri || "#"}
                                                target={
                                                  thirdLevelItem.target ||
                                                  "_self"
                                                }
                                              >
                                                {thirdLevelItem.label}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          );
                        })()
                      ) : (
                        /* Vertical list when there are no third-level items */
                        <div className="grid grid-cols-1 gap-2 text-left md:grid-cols-2 lg:grid-cols-3">
                          {/* Empty spacers to push list to the end on larger screens */}
                          <div className="hidden md:block"></div>
                          <div className="hidden lg:block"></div>
                          <ul className="space-y-4 px-3">
                            {topLevelItem.childItems.nodes.map(
                              (secondLevelItem) => (
                                <li key={secondLevelItem.id}>
                                  <Link
                                    className="no-underline hover:text-white"
                                    href={secondLevelItem.uri || "#"}
                                    target={secondLevelItem.target || "_self"}
                                  >
                                    {secondLevelItem.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      );
                    })()
                  ) : (
                    /* Empty space if no submenu */
                    <div className="min-h-[2rem]"></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
