import type { Course } from "@/__generated__/graphql";
import { Button, Form } from "@/components/ui";
import { clsx } from "clsx";
import { AgendaSchedule } from "./agenda-schedule";
import { UpcomingCourses } from "./upcoming-courses";

interface Props {
  course: Course;
}

export function CourseInfo({ course }: Props) {
  const {
    showAgenda,
    agendaFormat,
    agenda,
    additionalInformation,
    upcomingLabel,
    upcomingCourses,
    allCoursesUrl,
    ctaType,
    customLink,
    formId,
  } = course.cptCourse;

  return (
    <div className="mt-3 flex flex-1 flex-col items-start gap-3 bg-stone-850 p-4">
      {showAgenda && (
        <>
          {agendaFormat === "schedule" && <AgendaSchedule {...{ agenda }} />}
          {agendaFormat === "text" && (
            <div className="w-full">
              {agenda.heading && (
                <h5 className="font-bold uppercase">{agenda.heading}</h5>
              )}
              {agenda.subHeading && <p>{agenda.subHeading}</p>}
              {agenda.agendaText && (
                <div
                  className="wysiwyg mt-4"
                  dangerouslySetInnerHTML={{ __html: agenda.agendaText }}
                ></div>
              )}
            </div>
          )}
        </>
      )}
      {additionalInformation?.map(
        ({ heading, text, bullets, contentType }, i) => (
          <div
            className="w-full [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-3"
            key={i}
          >
            {heading && <h5 className="font-bold uppercase">{heading}</h5>}
            {contentType === "text" && text && (
              <div
                className="wysiwyg"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            )}
            {contentType === "bullets" && bullets && bullets.length > 0 && (
              <ul
                className={clsx([
                  "list-disc flex-col flex-wrap gap-x-4 pl-4 sm:flex md:block md:h-auto lg:flex",
                  bullets.length > 3 &&
                    bullets.length < 5 &&
                    "sm:h-[36px] lg:h-[36px]",
                  bullets.length >= 5 &&
                    bullets.length < 7 &&
                    "sm:h-[54px] lg:h-[54px]",
                  bullets.length >= 7 &&
                    bullets.length < 9 &&
                    "sm:h-[72px] lg:h-[72px]",
                  bullets.length >= 9 &&
                    bullets.length < 11 &&
                    "sm:h-[90px] lg:h-[90px]",
                  bullets.length >= 11 &&
                    bullets.length < 13 &&
                    "sm:h-1080px] lg:h-[108px]",
                ])}
              >
                {bullets.map(
                  ({ bulletText }, i) =>
                    bulletText && <li key={i}>{bulletText}</li>
                )}
              </ul>
            )}
          </div>
        )
      )}
      {upcomingCourses && upcomingCourses.length > 0 && (
        <UpcomingCourses
          courseTitle={course.title}
          {...{ upcomingLabel, upcomingCourses }}
        />
      )}
      {ctaType === "default" && allCoursesUrl && (
        <Button
          url={allCoursesUrl}
          target="_blank"
          label="See all available dates and book now"
          className="mt-auto"
        />
      )}
      {ctaType === "custom" && customLink && (
        <Button
          url={customLink?.url}
          target={customLink?.target}
          label={customLink?.title}
          className="mt-auto"
        />
      )}
      {ctaType === "form" && formId && (
        <div className="mt-auto w-full max-w-[308px]">
          <Form formId={formId} layout="inline" />
        </div>
      )}
    </div>
  );
}
