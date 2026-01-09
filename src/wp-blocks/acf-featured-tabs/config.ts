import { gql } from "@/__generated__";

export default {
  displayName: "AcfFeaturedTabs", // Must match __typename
  fragment: {
    key: "AcfFeaturedTabsBlock",
    entry: gql(`
      fragment AcfFeaturedTabsBlock on AcfFeaturedTabs {
        blockFeaturedTabs {
          heading
          tabs {
            tabHeading
            description
            content {
              alignment
              primaryImage {
                node {
                  ...Image
                }
              }
              secondaryImage {
                node {
                  ...Image
                }
              }
              textBlocks {
                heading
                body
              }
            }
          }
        }
      }
    `),
  },
};
