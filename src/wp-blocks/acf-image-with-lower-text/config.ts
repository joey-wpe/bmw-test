import { gql } from "@/__generated__";

export default {
  displayName: "AcfImageWithLowerText", // Must match __typename
  fragment: {
    key: "AcfImageWithLowerTextBlock",
    entry: gql(`
      fragment AcfImageWithLowerTextBlock on AcfImageWithLowerText {
        blockImageWithLowerText {
          image {
            node {
              ...Image
            }
          }
          heading
          subtext
          cta {
            ...Link
          }
        }
      }
    `),
  },
};
