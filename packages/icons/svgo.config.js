/** @type {import('svgo').Config} */
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: true,
          convertShapeToPath: false,
          removeUnusedNS: true,
        },
      },
    },
    'removeDimensions',
    'removeScriptElement',
    'removeXMLNS',
    'removeStyleElement',
    {
      name: 'removeAttrs',
      params: {
        attrs: '*:(stroke|fill):((?!^none$)(?!^currentColor$).)*',
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
};
