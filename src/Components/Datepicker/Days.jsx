import React from "react";
import Day from "./Day";
import {
  format,
  getDaysInMonth,
  subMonths,
  startOfMonth,
  getDay,
  subDays,
  addDays,
  endOfMonth,
} from "date-fns";
import getWeekdays from "../../utils/getWeekdays";
import getLocale from "../../utils/getLocale";

const Days = ({ date, startDate, endDate, onClick }) => {
  const today = new Date();
  const daysInMonth = getDaysInMonth(date);
  const firstDayDate = startOfMonth(date);
  const previousMonth = subMonths(date, 1);
  const previousMonthDays = getDaysInMonth(previousMonth);
  // Sets weekdays array
  const weekDays = getWeekdays(getLocale("ru"));
  let days = [];

  const labels = weekDays.map((weekDay) => {
    return (
      <span key={weekDay} className="label">
        {weekDay}
      </span>
    );
  });

  for (let i = getDay(firstDayDate); i > 1; i--) {
    let previousMonthsDay = previousMonthDays - i + 2;
    let newPreviousMonthDate = subDays(firstDayDate, i - 1);

    days.push(
      <Day
        key={format(newPreviousMonthDate, "dd MM yyyy")}
        onClick={onClick}
        date={newPreviousMonthDate}
        today={today}
        dayToDisplay={previousMonthsDay}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    let newCurrentMonthDate = addDays(endOfMonth(previousMonth), i);
    days.push(
      <Day
        key={format(newCurrentMonthDate, "dd MM yyyy")}
        onClick={onClick}
        dayToDisplay={i}
        date={newCurrentMonthDate}
        today={today}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= 42 - daysCount; i++) {
    let newNextmonthDate = addDays(endOfMonth(date), i);
    days.push(
      <Day
        key={format(newNextmonthDate, "dd MM yyyy")}
        onClick={onClick}
        today={today}
        dayToDisplay={i}
        date={newNextmonthDate}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <article className="calendar--days">
      {labels.concat()}
      {days.concat()}
    </article>
  );
};

export default Days;
