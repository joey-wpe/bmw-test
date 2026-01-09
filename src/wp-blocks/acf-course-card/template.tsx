import type { AcfCourseCard, Course } from "@/__generated__/graphql";
import { CourseInfo } from "../partials/course-card/course-info";
import blockConfig from "./config";

export function AcfCourseCard(props: AcfCourseCard) {
  const { blockCourseCard } = props;

  if (!blockCourseCard) {
    return null;
  }

  const course = blockCourseCard.course?.nodes[0] as Course;

  if (!course) {
    return null;
  }

  const { displayTitle, price } = course.cptCourse;

  return (
    <div className="flex flex-col bg-stone-900 p-4">
      <div className="text-center">
        {course.title && (
          <h3 className="uppercase">{displayTitle || course.title}</h3>
        )}
        {price && <h3 className="font-bold">{price}</h3>}
      </div>
      <CourseInfo {...{ course }} />
    </div>
  );
}

AcfCourseCard.displayName = blockConfig.displayName;
AcfCourseCard.fragments = blockConfig.fragment;
