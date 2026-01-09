import { gql } from "@/__generated__";

export default {
  displayName: "AcfSectionHeader", // Must match __typename
  fragment: {
    key: "AcfSectionHeaderBlock",
    entry: gql(`
      fragment AcfSectionHeaderBlock on AcfSectionHeader {
        blockSectionHeader {
          heading
          subtext
        }
      }
    `),
  },
};
