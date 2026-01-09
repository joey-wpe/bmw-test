import { BlockFeaturedTabsTabsContent } from "@/__generated__/graphql";
import { clsx } from "clsx";
import Image from "next/image";

interface TabViewProps {
  content: BlockFeaturedTabsTabsContent;
}

export function TabView({
  content: { alignment, primaryImage, secondaryImage, textBlocks },
}: TabViewProps) {
  return (
    <div
      className={clsx([
        "flex flex-col gap-3",
        alignment === "left" ? "md:flex-row" : "md:flex-row-reverse",
      ])}
    >
      {primaryImage && (
        <div className="flex-1">
          <div className="relative h-full min-h-[357px] md:min-h-[632px]">
            <Image
              fill
              src={primaryImage.node.sourceUrl}
              alt={primaryImage.node.altText}
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
      {(secondaryImage || textBlocks) && (
        <div className="grid flex-1 grid-rows-1 gap-3 md:grid-rows-2">
          {secondaryImage && (
            <div className="hidden md:block">
              <div className="relative h-full">
                <Image
                  fill
                  src={secondaryImage.node.sourceUrl}
                  alt={secondaryImage.node.altText}
                  className="object-cover object-center"
                />
              </div>
            </div>
          )}
          {textBlocks && (
            <div className="bg-stone-900 p-3">
              {textBlocks.map(({ heading, body }, i) => (
                <div
                  key={i}
                  className="max-w-[547px] border-b pb-3 pt-3 first:pt-0 last:border-0"
                >
                  {heading && (
                    <h4 className="max-w-[466px] font-bold">{heading}</h4>
                  )}
                  {body && (
                    <p className="mt-3 max-w-[466px] font-light">{body}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
