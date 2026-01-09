import { gql } from "@/__generated__";

export default {
  displayName: "AcfCoursesTable",
  fragment: {
    key: "AcfCoursesTableBlock",
    entry: gql(`
      fragment AcfCoursesTableBlock on AcfCoursesTable {
        blockCoursesTable {
          heading
          sub
          tableHeader
          courses {
            coursesName
            courseLink {
              link {
              ...Link
              }
            }
          }
          ctaLink {
            ...Link
          }
        }
      }
    `),
  },
};
