import { gql } from "@/__generated__";

export default {
  displayName: "CoreColumn", // Must match __typename
  fragment: {
    key: `CustomCoreColumnBlock`,
    entry: gql(`
      fragment CustomCoreColumnBlock on CoreColumn {
        innerBlocks {
          ...AcfCourseCardBlock
          ...AcfCourseCardImageBlock
          ...AcfImageBlockBlock
          ...AcfTextBlockBlock
        }
      }
    `),
  },
};
