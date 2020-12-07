module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "no-unused-vars": ["error", { "caughtErrors": "none" }]
  },
  globals: {
    module: false,
    inject: false,
    document: false
  }, env: {
    browser: true,
    amd: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
};
