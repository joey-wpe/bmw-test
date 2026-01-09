import { gql } from "@/__generated__";

export default {
  displayName: "AcfThreeColImages", // Must match __typename
  fragment: {
    key: "AcfThreeColImagesBlock",
    entry: gql(`
      fragment AcfThreeColImagesBlock on AcfThreeColImages {
        blockThreeColumnImages {
          sectionHeading
          tabStyle
          headingSize
          textBackground
          columns {
            tabHeader
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
      }
    `),
  },
};
