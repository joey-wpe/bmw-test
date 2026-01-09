import { gql } from "@/__generated__";

export default {
  displayName: "AcfSpecialOffers", // Must match __typename
  fragment: {
    key: "AcfSpecialOffersBlock",
    entry: gql(`
      fragment AcfSpecialOffersBlock on AcfSpecialOffers {
        blockSpecialOffers {
          heading
          title
          description
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
