import { gql } from "@/__generated__";

export default {
  displayName: "AcfImageLargeHeadingText",
  fragment: {
    key: "AcfImageLargeHeadingTextBlock",
    entry: gql(`
      fragment AcfImageLargeHeadingTextBlock on AcfImageLargeHeadingText {
        blockImageLargeHeadingText {
          image {
            node {
              ...Image
            }
          }
          heading
          sub
          cta {
            ...Link
          }
        }
      }
    `),
  },
};
