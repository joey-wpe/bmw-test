import { gql } from "@/__generated__";

export default {
  displayName: "AcfCourseCard", // Must match __typename
  fragment: {
    key: "AcfCourseCardBlock",
    entry: gql(`
      fragment AcfCourseCardBlock on AcfCourseCard {
        blockCourseCard {
          course {
            nodes {
              ...CoursePost
            }
          }
        }
      }
    `),
  },
};
