import { gql } from "@/__generated__";

export default {
  displayName: "CoreColumns", // Must match __typename
  fragment: {
    key: `CustomCoreColumnsBlock`,
    entry: gql(`
      fragment CustomCoreColumnsBlock on CoreColumns {
        innerBlocks {
          ...CustomCoreColumnBlock
        }
      }
    `),
  },
};
