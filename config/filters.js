import { DateTime } from "luxon";

export default {
  formatPostDate: (date) => {
    return DateTime.fromJSDate(date).toFormat("dd, LLL yyyy");
  },
  formatDateTime: (date) => {
    const dt = DateTime.fromFormat(date, "yyyy-MM-dd HH:mm:ss").setZone(
      "Europe/Lisbon"
    );
    return dt.toFormat("dd, LLL yyyy, HH:mm");
  },
  formatEUDate: (date) => {
    const dt = DateTime.fromFormat(date, "yyyy-MM-dd HH:mm:ss").setZone(
      "Europe/Lisbon"
    );
    return dt.toFormat("dd/MM/yyyy");
  },
  dateToISO: (date) => {
    return new Date(date).toISOString();
  },
  limit: (arr, limit) => {
    return arr.slice(0, limit);
  },
  filterByKey: (arr, key, value) => {
    return arr.filter(item => {
      return item[key] === value;
    });
  },
  sortBy: (arr, prop) => {
    var res = arr.sort(({ [prop]: a }, { [prop]: b }) => b - a);
    return res;
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
