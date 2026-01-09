import { gql } from "@/__generated__";

export default {
  displayName: "AcfFaq",
  fragment: {
    key: "AcfFaqBlock",
    entry: gql(`
      fragment AcfFaqBlock on AcfFaq {
        blockFaq {
          faq {
            question
            answer
          }
        }
      }
    `),
  },
};
