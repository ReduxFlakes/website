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
    const res = arr.sort(({ [prop]: a }, { [prop]: b }) => b - a);
    return res;
  },
  tagCloud: (collection) => {
    const tagCount = {};
    collection.forEach((item) => {
      if (item.data.tags) {
        item.data.tags.forEach((tag) => {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
      } else if (item.tags) {
        item.tags.forEach((tag) => {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
      }
    });
    return tagCount;
  },
  strStarts: (str, value) => {
    return str.toString().startsWith(value);
  },
  excludeTag: (collection, tagToExclude) => {
    if (!collection) return [];
    return collection.filter(item => {
      const tags = item.data.tags || [];
      console.log(tags)
      return !tags.includes(tagToExclude);
    });
  },
  hasChildWithKey: (navCollection, parentKey, searchKey) => {
    const parentBranch = navCollection.find(item => item.key === parentKey);

    if (!searchKey || !parentBranch || !parentBranch.children)
      return false;
    const findKeyRecursive = (items, target) => {
      return items.some(item => {
        if (item.key === target) return true;
        if (item.children) return findKeyRecursive(item.children, target);
        return false;
      });
    };

    return findKeyRecursive(parentBranch.children, searchKey);
  },
}
