import type { CoreColumns } from "@/__generated__/graphql";
import { WordPressBlocksViewer, type WordPressBlock } from "@faustwp/blocks";
import { clsx } from "clsx";
import blockConfig from "./config";

// Override CoreColumns with custom template
export function CoreColumns(props: CoreColumns) {
  const { innerBlocks } = props;
  const blocks: WordPressBlock[] = (innerBlocks ??
    []) as unknown as WordPressBlock[];
  return (
    <div
      className={clsx([
        "grid gap-4",
        innerBlocks.length === 2 && "md:grid-cols-2",
      ])}
    >
      <WordPressBlocksViewer
        blocks={innerBlocks !== null && innerBlocks !== void 0 ? blocks : []}
      />
    </div>
  );
}

CoreColumns.displayName = blockConfig.displayName;
CoreColumns.fragments = blockConfig.fragment;
