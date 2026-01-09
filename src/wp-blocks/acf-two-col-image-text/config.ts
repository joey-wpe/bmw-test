import { gql } from "@/__generated__";

export default {
  displayName: "AcfTwoColImageText", // Must match __typename
  fragment: {
    key: "AcfTwoColImageTextBlock",
    entry: gql(`
      fragment AcfTwoColImageTextBlock on AcfTwoColImageText {
        blockTwoColImageText {
          alignment
          bodyText
          heading
          subHeading
          ctas {
            link {
              ...Link
            }
          }
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
