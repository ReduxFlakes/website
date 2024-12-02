import { DateTime } from "luxon";

export default {
  formatPostDate: (date) => {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  },
  formatLocaleDate: (date) => {
    return DateTime.fromJSDate(date)
      .setLocale("pt")
      .toLocaleString(DateTime.DATE_SHORT);
  },
  dateToISO: (date) => {
    return new Date(date).toISOString();
  },
  min: (...numbers) => {
    return Math.min.apply(null, numbers);
  },
};
