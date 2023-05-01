import React from "react";
import { format } from "date-fns";

const CalendarHeader = ({ date, changeMonth, resetCalendar, locale }) => {
  return (
    <nav className="calendar--nav">
      <button onClick={() => changeMonth("sub")}>&#8249;</button>
      <h1 onClick={resetCalendar}>
        {format(date, "LLLL", { locale })} <small>{format(date, "yyyy")}</small>
      </h1>
      <button onClick={() => changeMonth("add")}>&#8250;</button>
    </nav>
  );
};

export default CalendarHeader;
