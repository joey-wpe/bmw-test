import { gql } from "@/__generated__";

export default {
  displayName: "AcfInstructors", // Must match __typename
  fragment: {
    key: "AcfInstructorsBlock",
    entry: gql(`
      fragment AcfInstructorsBlock on AcfInstructors {
        blockInstructors {
          sectionHeading
          instructorBios {
            image {
              node {
                ...Image
              }
            }
            name
            title
            bio
          }
        }
      }
    `),
  },
};
