import { gql } from "@/__generated__";

export default {
  displayName: "AcfTwoColumnImageForm",
  fragment: {
    key: "AcfTwoColumnImageFormBlock",
    entry: gql(`
      fragment AcfTwoColumnImageFormBlock on AcfTwoColumnImageForm {
        blockTwoColumnImageForm {
          image {
            node {
              ...Image
            }
          }
          heading
          subtext
          formId
        }
      }
    `),
  },
};
