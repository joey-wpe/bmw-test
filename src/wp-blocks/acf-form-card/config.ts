import { gql } from "@/__generated__";

export default {
  displayName: "AcfFormCard", // Must match __typename
  fragment: {
    key: "AcfFormCardBlock",
    entry: gql(`
      fragment AcfFormCardBlock on AcfFormCard {
        blockFormCard {
          heading
          subHeading
          additionalInfo
          formId
          formLoaderHeight
        }
      }
    `),
  },
};
