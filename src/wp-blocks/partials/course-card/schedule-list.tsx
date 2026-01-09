import {
  CptCourseAgendaScheduleTimeSlots,
  CptCourseAgendaSummerScheduleTimeSlots,
} from "@/__generated__/graphql";

interface Props {
  heading: string;
  subHeading: string;
  timeSlots:
    | CptCourseAgendaScheduleTimeSlots[]
    | CptCourseAgendaSummerScheduleTimeSlots[];
}

export function ScheduleList({ heading, subHeading, timeSlots }: Props) {
  return (
    <div className="col-span-2 sm:col-span-1">
      {heading !== "" && (
        <h5 className="whitespace-break-spaces font-bold uppercase">
          {heading}
        </h5>
      )}
      {subHeading !== "" && (
        <p className="whitespace-break-spaces">{subHeading}</p>
      )}
      {timeSlots?.length > 0 && (
        <div className="mt-3 grid gap-3">
          {timeSlots.map(({ time, description }, i) => (
            <div className="" key={i}>
              {time && <p className="font-bold">{time}</p>}
              {description && (
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
