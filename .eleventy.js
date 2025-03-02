import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import postcss from "postcss/lib/postcss";
import htmlMin from "html-minifier-terser";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import postcssConfig from "postcss-load-config";
import pluginTOC from "@uncenter/eleventy-plugin-toc";
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyLucideicons from "@grimlink/eleventy-plugin-lucide-icons";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import filters from "./config/filters.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyLucideicons);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });

  eleventyConfig.addPassthroughCopy("src/public");

  /* layout aliases */
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("page", "page.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");

  /* filters */
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  /* plugins */
  const md = markdownIt({ html: true });
  md.use(markdownItAttrs, {
    leftDelimiter: "[-",
    rightDelimiter: "-]",
  });
  md.use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "header-anchor",
      symbol: "#",
      ariaHidden: false,
    }),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify"),
  });
  md.use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3", "h4"],
    ignoredElements: ["a"],
    flat: true,
  });

  eleventyConfig.addPreprocessor("macro-inject", "njk,md", (data, content) => {
    return (
      `{%- from "util/component.njk" import component with context -%}\n` +
      content
    );
  });

  /* collections */
  eleventyConfig.addCollection("posts", function (collection) {
    return [
      ...collection.getFilteredByGlob("src/pages/posts/content/**/*.md"),
    ].reverse();
  });

  /* html and css optimization */
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
  eleventyConfig.addTransform("html-minify", (content, path) => {
    if (path && path.endsWith(".html")) {
      return htmlMin.minify(content, {
        includeAutoGeneratedTags: false,
        collapseBooleanAttributes: true,
        noNewlinesBeforeTagClose: true,
        collapseWhitespace: true,
        decodeEntities: true,
        removeComments: true,
        sortAttributes: true,
        sortClassName: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
  };
}
