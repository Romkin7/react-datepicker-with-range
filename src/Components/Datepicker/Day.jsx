import React from "react";
import clsx from "clsx";
import { isBefore, isSameDay } from "date-fns";
import isBetween from "../../utils/isBetween";

const Day = ({ date, startDate, endDate, onClick, dayToDisplay, today }) => {
  const isMuted = isBefore(date, today);
  const dayStyles = clsx({
    active: isSameDay(date, today),
    start: isSameDay(date, startDate),
    between: isBetween(date, startDate, endDate),
    end: isSameDay(date, endDate),
    muted: isMuted,
  });

  return (
    <>
      {isMuted ? (
        <span data-current-date={date} className={dayStyles}>
          {dayToDisplay}
        </span>
      ) : (
        <span
          onClick={() => onClick(date)}
          data-current-date={date}
          className={dayStyles}
        >
          {dayToDisplay}
        </span>
      )}
    </>
  );
};

export default Day;
