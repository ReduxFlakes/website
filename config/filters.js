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
};
