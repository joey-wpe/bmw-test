import { gql } from "@/__generated__";

export default {
  displayName: "AcfEventCard",
  fragment: {
    key: "AcfEventCardBlock",
    entry: gql(`
      fragment AcfEventCardBlock on AcfEventCard {
        blockEventCard {
          tabHeader
          image {
            node {
              ...Image
            }
          }
          heading
          subtext
          ctaType
          link {
            ...Link
          }
          formId
        }
      }
    `),
  },
};
