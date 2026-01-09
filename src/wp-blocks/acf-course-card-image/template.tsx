import type { AcfCourseCardImage, Course } from "@/__generated__/graphql";
import Image from "next/image";
import { CourseInfo } from "../partials/course-card/course-info";
import blockConfig from "./config";

export function AcfCourseCardImage(props: AcfCourseCardImage) {
  const { blockCourseCardImage } = props;

  if (!blockCourseCardImage) {
    return null;
  }
  const course = blockCourseCardImage.course?.nodes[0] as Course;
  const { excerpt } = blockCourseCardImage;

  if (!course) {
    return null;
  }
  const { title, featuredImage, cptCourse } = course;

  if (!cptCourse) {
    return null;
  }
  const { displayTitle, price } = cptCourse;

  return (
    <div className="flex flex-col">
      {title && (
        <div className="w-fit bg-stone-900 px-4 py-2 md:min-w-[335px]">
          <h4 className="font-bold uppercase">{displayTitle || title}</h4>
        </div>
      )}
      {featuredImage && featuredImage.node && (
        <div className="relative h-[250px]">
          <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            fill
            className="object-cover object-center"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col bg-stone-900 p-4">
        {excerpt && (
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        )}
        {price && (
          <div className="mt-3 border-t pt-3">
            <h4 className="font-bold uppercase">{price}</h4>
          </div>
        )}
        <CourseInfo {...{ course }} />
      </div>
    </div>
  );
}

AcfCourseCardImage.displayName = blockConfig.displayName;
AcfCourseCardImage.fragments = blockConfig.fragment;
