import { CptCourseUpcomingCourses } from "@/__generated__/graphql";
import Link from "next/link";

interface Props {
  courseTitle: string;
  upcomingLabel: string;
  upcomingCourses: CptCourseUpcomingCourses[];
}

export function UpcomingCourses({
  courseTitle,
  upcomingLabel,
  upcomingCourses,
}: Props) {
  const isMonthCurrentFuture = (dateStr: string) => {
    const [year, month] = dateStr.split("T")[0].split("-").map(Number); // Ignores timezone
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    return (
      year > currentYear || (year === currentYear && month >= currentMonth)
    );
  };
  return (
    <div className="grid w-full gap-2 [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-3">
      <h5 className="font-bold uppercase">
        {upcomingLabel
          ? upcomingLabel
          : `Upcoming ${courseTitle} Driving Events`}
      </h5>
      <ul className="grid gap-1 font-bold">
        {upcomingCourses.map(({ month, courseUrl }, i) => {
          if (!month || !courseUrl) {
            return null;
          }

          if (!isMonthCurrentFuture(month)) {
            return null;
          }

          const date = new Date(month);
          const formattedMonth = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            timeZone: "UTC",
          });

          return (
            <li key={i}>
              <Link href={courseUrl} target="_blank">
                {formattedMonth}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
