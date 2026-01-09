import { gql } from "@/__generated__";

export default {
  displayName: "AcfTableBlock", // Must match __typename
  fragment: {
    key: "AcfTableBlockBlock",
    entry: gql(`
      fragment AcfTableBlockBlock on AcfTableBlock {
        blockTableBlock {
          heading
          subtext
          tableHeader {
            headerText
          }
          rows {
            eventName
            halfDay
            fullDay
          }
        }
      }
    `),
  },
};
