import { gql } from "@/__generated__";

export default {
  displayName: "AcfHeroSmall", // Must match __typename
  fragment: {
    key: "AcfHeroSmallBlock",
    entry: gql(`
      fragment AcfHeroSmallBlock on AcfHeroSmall {
        blockHeroSmall {
          heading
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
