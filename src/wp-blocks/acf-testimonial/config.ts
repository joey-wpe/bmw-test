import { gql } from "@/__generated__";

export default {
  displayName: "AcfTestimonial",
  fragment: {
    key: "AcfTestimonialBlock",
    entry: gql(`
      fragment AcfTestimonialBlock on AcfTestimonial {
        blockTestimonial {
          backgroundImage {
            node {
              ...Image
            }
          }
          topLine
          middleLine
          bottomLine
          attribution
        }
      }
    `),
  },
};
