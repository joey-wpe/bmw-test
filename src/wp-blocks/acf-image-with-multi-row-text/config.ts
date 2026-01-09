import { gql } from "@/__generated__";

export default {
  displayName: "AcfImageWithMultiRowText",
  fragment: {
    key: "AcfImageWithMultiRowTextBlock",
    entry: gql(`
      fragment AcfImageWithMultiRowTextBlock on AcfImageWithMultiRowText {
        blockImageWithMultiRowText {
          image {
            node {
              ...Image
            }
          }
          textRows {
            heading
            subtext
          }
        }
      }
    `),
  },
};
