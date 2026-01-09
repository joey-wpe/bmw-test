import { gql } from "@/__generated__";

export const CourseFragment = gql(`
  fragment CoursePost on Course {
    id
    title
    featuredImage {
      node {
        ...Image
      }
    }
    cptCourse {
      additionalInformation {
        bullets {
          bulletText
        }
        contentType
        heading
        text
      }
      agenda {
        addSummerSchedule
        agendaText
        heading
        schedule {
          heading
          subHeading
          timeSlots {
            description
            time
          }
        }
        subHeading
        summerSchedule {
          heading
          subHeading
          timeSlots {
            description
            time
          }
        }
        summerScheduleLabel
      }
      agendaFormat
      allCoursesUrl
      ctaType
      customLink {
        ...Link
      }
      displayTitle
      formId
      location
      price
      showAgenda
      upcomingCourses {
        courseUrl
        month
      }
      upcomingLabel
    }
  }
`);
