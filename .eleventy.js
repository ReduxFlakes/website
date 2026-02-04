import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import postcss from "postcss/lib/postcss";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import postcssConfig from "postcss-load-config";
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyLucideicons from "@grimlink/eleventy-plugin-lucide-icons";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import timeToRead from "eleventy-plugin-time-to-read";
import { DateTime } from "luxon";
import pluginTOC from "@uncenter/eleventy-plugin-toc";
import filters from "./config/filters.js";
import { getBlogPosts, getBlogPostsTags, getDigitalGardenCollections, getShrines, recommended } from "./config/collections.js";

export default async function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["./src/**", "./config/filters.js", "./config/collections.js"],
  });
  eleventyConfig.addPassthroughCopy("src/public/");

  //########## Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyLucideicons);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "jpeg"],
    widths: [480, 800, 1000],

    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
    pictureAttributes: {},
    sharpOptions: {
      animated: true,
    },
    sharpWebpOptions: {
      nearLossless: true
    },
    sharpJpegOptions: {
      quality: 92
    }
  });
  eleventyConfig.addPlugin(timeToRead);
  eleventyConfig.addPlugin(pluginTOC, {
    ignoredElements: ["a"],
    wrapper: function (toc) {
      return `<nav class="toc">${toc}</nav>`;
    },
  });

  //########## Layouts
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  //########## Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  /* custom date formats */
  eleventyConfig.addDateParsing(function (dateValue) {
    let localDate;
    if (typeof dateValue === "string") {
      localDate = DateTime.fromFormat(dateValue, "yyyy-MM-dd HH:mm:ss").setZone(
        "Europe/Lisbon"
      );
    }
    if (localDate?.isValid === false) {
      throw new Error(
        `Invalid \`date\` value (${dateValue}) is invalid for ${this.page.inputPath}: ${localDate.invalidReason}`
      );
    }
    return localDate;
  });

  //########## Collections
  eleventyConfig.addCollection('posts', getBlogPosts);
  eleventyConfig.addCollection('postTags', getBlogPostsTags);
  eleventyConfig.addCollection('digitalGarden', getDigitalGardenCollections);
  eleventyConfig.addCollection('shrines', getShrines);
  eleventyConfig.addCollection('recommended', recommended);


  /* plugins */
  const md = markdownIt({ html: true });
  md.use(markdownItAttrs, {
    leftDelimiter: "[-",
    rightDelimiter: "-]",
  });
  md.use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "anchor",
      symbol: "#",
      ariaHidden: false,
    }),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify"),
  });
  md.use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPreprocessor("macro-inject", "njk,md", (data, content) => {
    return (
      `{%- from "util/component.njk" import component with context -%}\n` +
      content
    );
  });

  /* shortcode */
  eleventyConfig.addShortcode("card", function (item) {
    const tags = item.tags ? item.tags.map(tag => `<span class="label">${tag}</span>`).join('') : '';
    const actions = item.actions ? item.actions.map(action => `<a href="${action.url}" class="button">${action.label}</a>`).join('') : '';
    return `<section class="card stack" style="--spacer:0.5em;">
    <h3>${item.title}</h3>
    ${tags ? `<div class="auto-flex">${tags}</div>` : ''}
    <p>${item.description}</p>
    ${actions ? `<div class="auto-flex">${actions}</div>` : ''}
    </section>`;
  });



  /* bundles & html and css optimization */
  eleventyConfig.addBundle("html")
  eleventyConfig.addBundle("css", {
    transforms: [
      async function (content) {
        const { plugins } = await postcssConfig();
        let result = await postcss(plugins).process(content, {
          from: this.page.inputPath,
          to: null,
        });
        return result.css;
      },
    ],
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "11ty.js",
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/",
      includes: "../_includes",
      layouts: "../_layouts",
      data: "../_data",
      output: "_site",
    },
  };
}
