import postcssImport from "postcss-import";
import postcssMinify from "postcss-minify";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    postcssImport({
      path: ["./src/_includes/styles/"],
    }),
    postcssMinify,
    autoprefixer,
  ],
};
