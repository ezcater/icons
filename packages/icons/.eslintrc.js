module.exports = {
  extends: '../../.eslintrc.js',
  env: {
    node: true,
  },
  rules: {
    'import/no-commonjs': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'filenames/match-regex': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    curly: 'off',
    'no-param-reassign': 'off',
    'import/no-dynamic-require': 'off',
    'no-continue': 'off',
  },
};
