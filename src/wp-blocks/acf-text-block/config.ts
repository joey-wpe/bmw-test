import { gql } from "@/__generated__";

export default {
  displayName: "AcfTextBlock", // Must match __typename
  fragment: {
    key: "AcfTextBlockBlock",
    entry: gql(`
      fragment AcfTextBlockBlock on AcfTextBlock {
        blockTextBlock {
          column {
            heading
            description
          }
        }
      }
    `),
  },
};
