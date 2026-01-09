import { gql } from "@/__generated__";

export default {
  displayName: "AcfFourColImagesCta", // Must match __typename
  fragment: {
    key: "AcfFourColImagesCtaBlock",
    entry: gql(`
      fragment AcfFourColImagesCtaBlock on AcfFourColImagesCta {
        blockFourColumnImageWithCta {
          heading
          subHeading
          columns {
            image {
              node {
                ...Image
              }
            }
            banner
            subtext
            link {
              ...Link
            }
          }
        }
      }
    `),
  },
};
