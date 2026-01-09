import { gql } from "@/__generated__";

export default {
  displayName: "AcfHeroLarge", // Must match __typename
  fragment: {
    key: "AcfHeroLargeBlock",
    entry: gql(`
      fragment AcfHeroLargeBlock on AcfHeroLarge {
        blockHeroLarge {
          heading
          subHeading
          backgroundType
          image {
            node {
              ...Image
            }
          }
          videoUrl
        }
      }
    `),
  },
};
