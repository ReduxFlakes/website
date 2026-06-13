import postcssImport from "postcss-import";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import process from "node:process";

const isProduction = process.env.BUILD_TYPE === 'production';

export default {
  plugins: [
    postcssImport({
      path: ["./_includes/styles/"],
    }),
    ...(isProduction ? [autoprefixer, cssnano] : []),
  ],
};
