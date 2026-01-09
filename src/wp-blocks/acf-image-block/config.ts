import { gql } from "@/__generated__";

export default {
  displayName: "AcfImageBlock", // Must match __typename
  fragment: {
    key: "AcfImageBlockBlock",
    entry: gql(`
      fragment AcfImageBlockBlock on AcfImageBlock {
        blockImageBlock {
          image {
            node {
              ...Image
            }
          }
        }
      }
    `),
  },
};
