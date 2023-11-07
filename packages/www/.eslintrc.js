/** @type{import('@types/eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['plugin:@next/next/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  plugins: [],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    process: 'readonly',
  },
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
