/** @type {import('@svgr/core').Config} */
module.exports = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
  ext: "tsx",
  typescript: true,
  expandProps: "end",
  ref: false,
  memo: false,
  jsxRuntime: "classic",
};
