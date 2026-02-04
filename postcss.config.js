import postcssImport from "postcss-import";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    postcssImport({
      path: ["./_includes/styles/"],
    }),
    autoprefixer,
    cssnano,
  ],
};
