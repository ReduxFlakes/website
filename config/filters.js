import { DateTime } from "luxon";
import markdownit from "markdown-it";
import * as cheerio from "cheerio";

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
  /* losely based on https://github.com/uncenter/eleventy-plugin-toc/ */
  generateTOC: (content = '') => {  
    const $ = cheerio.load(content);
    const $headings = $("h2[id], h3[id], h4[id]");
  
    function createItem($h) {
      if (!$h) return { level: 0, children: [] };
      return {
        slug: $h.attr("id"),
        text: $h.text().trim(),
        level: +$h.get(0).tagName.slice(1),
        children: [],
      };
    }
  
    function getParent(prev, current) {
      if (current.level > prev.level) return prev;
      else if (current.level === prev.level) return prev.parent;
      else return getParent(prev.parent, current);
    }
  
    function generateItemMarkup(item) {
      if (!item.slug && item.level !== 0) return "";
      let html = "";
      if (item.slug && item.text) {
        html += `<li><a href="#${item.slug}">${item.text}</a>`;
      }
      if (item.children.length) {
        html += `<ol>${item.children.map(generateItemMarkup).join("\n")}</ol>`;
      }
      if (item.slug && item.text) {
        html += `</li>`;
      }
      return html;
    }
  
    const root = createItem(null);
    let previous = root;
  
    $headings.each((_, el) => {
      const $el = $(el);
      $el.find("a").remove();
      const current = createItem($el);
      const parent = getParent(previous, current);
      current.parent = parent;
      parent.children.push(current);
      previous = current;
    });
    if (!root.children.length) {
      return ``;
    }
    return `<nav class="box toc" id="toc" aria-labelledby="toc-label">
      <h2 id="toc-label">Table of Contents<sup><a href="#toc" title="Target table of contents" aria-label="Hyperlink to table of contents"><img src="/public/icons/woocons-link.png" alt="Paperclip" class="icon"></a></sup></h2>
      <ol>${root.children.map(generateItemMarkup).join("\n")}</ol>
    </nav>`;
  }
  
};
