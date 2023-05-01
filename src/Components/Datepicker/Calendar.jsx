import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import Days from "./Days";
import {
  subMonths,
  addMonths,
  isBefore,
  isSameDay,
  addDays,
  isAfter,
} from "date-fns";
import getLocale from "../../utils/getLocale";

const DEFAUT_STATE = {
  date: new Date(),
  startDate: addDays(new Date(), 1),
  endDate: addDays(new Date(), 3),
};

const Calendar = () => {
  const [state, setState] = useState(() => DEFAUT_STATE);

  const resetCalendar = () => {
    setState(DEFAUT_STATE);
  };

  const changeMonth = (operand) => {
    const { date } = state;

    const newDate = operand === "sub" ? subMonths(date, 1) : addMonths(date, 1);

    setState((prevState) => {
      return { ...prevState, date: newDate };
    });
  };

  const changeDate = (date) => {
    let { startDate, endDate } = state;

    if (
      startDate === null ||
      isBefore(date, startDate) ||
      !isSameDay(startDate, endDate)
    ) {
      return setState((prevState) => {
        return { ...prevState, startDate: date, endDate: date };
      });
    } else if (isSameDay(startDate, date) && isSameDay(endDate, date)) {
      return setState((prevState) => {
        return { ...prevState, startDate: null, endDate: null };
      });
    } else if (isAfter(date, startDate)) {
      return setState((prevState) => {
        return { ...prevState, endDate: date };
      });
    } else {
      return;
    }
  };

  const { date, startDate, endDate } = state;

  return (
    <div className="calendar">
      <CalendarHeader
        date={date}
        changeMonth={changeMonth}
        resetCalendar={() => resetCalendar()}
        locale={getLocale("ru")}
      />

      <Days
        date={date}
        onClick={changeDate}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Calendar;
