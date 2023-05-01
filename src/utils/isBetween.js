import { isAfter, isBefore, isEqual, startOfDay } from "date-fns";

/**
 * isBetween function checks,
 * if dateToVerify that is being verified is between from or to,
 * or if it is equal to from and to or before or after them.
 * @param {Date} dateToVerify
 * @param {Date} from
 * @param {Date} to
 * @param {string} inclusivity
 * @returns {boolean}
 */
const isBetween = (dateToVerify, from, to) => {
  return (
    isBefore(dateToVerify, to) &&
    isAfter(dateToVerify, from) &&
    !isEqual(startOfDay(from), startOfDay(dateToVerify))
  );
};

export default isBetween;
