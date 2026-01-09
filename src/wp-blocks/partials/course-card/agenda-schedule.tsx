import { CptCourseAgenda } from "@/__generated__/graphql";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ScheduleList } from "./schedule-list";

interface Props {
  agenda: CptCourseAgenda;
}

export function AgendaSchedule({ agenda }: Props) {
  const [summerScheduleActive, setSummerScheduleActive] = useState(false);

  if (!agenda) {
    return null;
  }
  const { schedule, addSummerSchedule, summerSchedule, summerScheduleLabel } =
    agenda;

  const toggleSummerSchedule = () => {
    setSummerScheduleActive(!summerScheduleActive);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {!summerScheduleActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            className="grid grid-cols-2 gap-x-12 gap-y-6 md:gap-x-6 lg:gap-x-12"
          >
            {schedule?.map(({ heading, subHeading, timeSlots }, i) => (
              <ScheduleList {...{ heading, subHeading, timeSlots }} key={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {summerScheduleActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            className="grid grid-cols-2 gap-x-12 gap-y-6 md:gap-x-6 lg:gap-x-12"
          >
            {addSummerSchedule && summerSchedule?.length > 0 && (
              <div>
                {summerSchedule.map(({ heading, subHeading, timeSlots }, i) => (
                  <ScheduleList
                    {...{ heading, subHeading, timeSlots }}
                    key={i}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {addSummerSchedule &&
        summerSchedule?.length > 0 &&
        summerScheduleLabel && (
          <p
            className="cursor-pointer underline underline-offset-2 hover:text-gray-400"
            onClick={toggleSummerSchedule}
          >
            {summerScheduleActive ? "See normal hours" : summerScheduleLabel}
          </p>
        )}
    </>
  );
}
