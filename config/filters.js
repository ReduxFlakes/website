import { DateTime } from "luxon";

export default {
  formatPostDate: (date) => {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  },
  formatStringDate: (date) => {
    if (!date) {
      return "Invalid Date"; // Handle invalid date case
    }
    const jsDate = new Date(date); // Convert string to Date
    if (isNaN(jsDate)) {
      return "Invalid Date"; // Check if the date is valid
    }
    return DateTime.fromJSDate(jsDate).toFormat("dd LLL yyyy");
  },
  formatLocaleDate: (date) => {
    return DateTime.fromJSDate(date)
      .setLocale("pt")
      .toLocaleString(DateTime.DATE_SHORT);
  },
  dateToISO: (date) => {
    return new Date(date).toISOString();
  },
  limit: (arr, limit) => {
    return arr.slice(0, limit);
  },
  getKeys: (target) => {
    return Object.keys(target).toString();
  },
  tagCloud: (collection) => {
    const tagCount = {};
    collection.forEach((item) => {
      if (item.data.tags) {
        item.data.tags.forEach((tag) => {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
      }
    });
    return tagCount;
  },
  stat: (file, field = "birthtime") => {
    return DateTime.fromJSDate(fs.statSync(file)[field]).toISO();
  },
};
