import type { CoreColumn } from "@/__generated__/graphql";
import { WordPressBlocksViewer, type WordPressBlock } from "@faustwp/blocks";
import blockConfig from "./config";

// Override CoreColumns with custom template
export function CoreColumn(props: CoreColumn) {
  const { innerBlocks } = props;
  const blocks: WordPressBlock[] = (innerBlocks ??
    []) as unknown as WordPressBlock[];
  return (
    <div className="grid gap-4">
      <WordPressBlocksViewer
        blocks={innerBlocks !== null && innerBlocks !== void 0 ? blocks : []}
      />
    </div>
  );
}

CoreColumn.displayName = blockConfig.displayName;
CoreColumn.fragments = blockConfig.fragment;
