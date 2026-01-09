import type { AcfTextBlock } from "@/__generated__/graphql";
import clsx from "clsx";
import blockConfig from "./config";

export function AcfTextBlock(props: AcfTextBlock) {
  const { blockTextBlock } = props;

  if (!blockTextBlock) {
    return null;
  }

  const { column } = blockTextBlock;

  if (!column || column.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-stone-900 p-4 md:h-auto">
      <div className="flex h-full flex-col bg-stone-850 p-4 pb-6">
        {column.map((item, index) => (
          <div
            key={index}
            className={clsx("flex flex-col", {
              "mb-3": index !== column.length - 1,
            })}
          >
            {item?.heading && (
              <p className="font-bold text-white">{item.heading}</p>
            )}
            {item?.description && (
              <div
                className="wysiwyg text-white"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

AcfTextBlock.displayName = blockConfig.displayName;
AcfTextBlock.fragments = blockConfig.fragment;
