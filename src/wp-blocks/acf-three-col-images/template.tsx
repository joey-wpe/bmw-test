"use client";

import type { AcfThreeColImages } from "@/__generated__/graphql";
import blockConfig from "./config";
import { ColumnCard } from "./partials/column-card";
import { ColumnTab } from "./partials/column-tab";

export function AcfThreeColImages(props: AcfThreeColImages) {
  const { blockThreeColumnImages } = props;

  if (!blockThreeColumnImages) return null;

  const { sectionHeading, textBackground, columns, tabStyle } =
    blockThreeColumnImages;

  // Check if styled tabs are enabled
  const isStyledTab = tabStyle === "stylized";

  return (
    <section className="flex flex-col">
      {/* Section Header */}
      {sectionHeading && (
        <h2 className="mb-3 text-center font-light uppercase">
          {sectionHeading}
        </h2>
      )}

      {/* Three Columns Flex */}
      <div className="mx-auto flex max-w-full flex-col gap-3 md:flex-row md:flex-wrap">
        {columns?.map((col, index) => (
          <div
            key={index}
            className="relative flex w-full flex-col md:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
          >
            {/* Tab header positioned above card */}
            {col?.tabHeader && (
              <div className="relative left-0 top-0 z-10">
                <ColumnTab tabHeader={col.tabHeader} isStyled={isStyledTab} />
              </div>
            )}

            {/* Card Content - all cards align at same position */}
            <div className="flex-1">
              <ColumnCard column={col} textBackground={textBackground} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

AcfThreeColImages.displayName = blockConfig.displayName;
AcfThreeColImages.fragments = blockConfig.fragment;
