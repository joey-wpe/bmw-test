import { gql } from "@/__generated__";

export default {
  displayName: "AcfTwoColumnBanner",
  fragment: {
    key: "AcfTwoColumnBannerBlock",
    entry: gql(`
      fragment AcfTwoColumnBannerBlock on AcfTwoColumnBanner {
        blockTwoColumnBanner {
          image {
            node {
              ...Image
            }
          }
          content {
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
