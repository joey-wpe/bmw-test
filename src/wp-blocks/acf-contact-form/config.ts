import { gql } from "@/__generated__";

export default {
  displayName: "AcfContactForm",
  fragment: {
    key: "AcfContactFormBlock",
    entry: gql(`
      fragment AcfContactFormBlock on AcfContactForm {
        blockContactForm {
          formId
          locations {
            image {
              node {
                ...Image
              }
            }
            details
          }
        }
      }
    `),
  },
};
