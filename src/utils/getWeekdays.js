import { format, eachDayOfInterval } from "date-fns";

function getWeekdays(locale) {
  const daysOfWeek = eachDayOfInterval({
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 7)),
  });

  const weekdays = daysOfWeek.map((day) =>
    format(day, "eeeeee", { locale: locale })
  );
  // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return weekdays;
}

export default getWeekdays;
