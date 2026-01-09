import { gql } from "@/__generated__";

export default {
  displayName: "AcfFourColImages", // Must match __typename
  fragment: {
    key: "AcfFourColImagesBlock",
    entry: gql(`
      fragment AcfFourColImagesBlock on AcfFourColImages {
        blockFourColImages {
          columns {
            banner
            bannerText
            image {
              node {
                ...Image
              }
            }
            link {
              ...Link
            }
          }
        }
      }
    `),
  },
};
