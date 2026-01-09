import { gql } from "@/__generated__";

export default {
  displayName: "AcfCourseCardImage", // Must match __typename
  fragment: {
    key: "AcfCourseCardImageBlock",
    entry: gql(`
      fragment AcfCourseCardImageBlock on AcfCourseCardImage {
        blockCourseCardImage {
          course {
            nodes {
              ...CoursePost
            }
          }
          excerpt
        }
      }
    `),
  },
};
