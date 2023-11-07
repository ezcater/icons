module.exports = {
  ...require('@ezcater/prettier-config'),
  plugins: [
    ...(require('@ezcater/prettier-config').plugins ?? []),
    require('prettier-plugin-tailwindcss'),
  ],
};
