// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  ignorePatterns: ['.eslintrc.js', 'lib/'],
  env: {
    browser: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  globals: {},
  rules: {
    'no-multi-str': 2,
    'no-debugger': 0,
    strict: 0,
    semi: 0,
    'linebreak-style': 0,
    'no-bitwise': 2,
    'no-cond-assign': 0,
    curly: 2,
    eqeqeq: 0,
    'no-eq-null': 0,
    'no-eval': 0,
    'no-unused-expressions': 0,
    'guard-for-in': 0,
    'wrap-iife': [2, 'any'],
    'no-use-before-define': [
      2,
      {
        functions: false,
      },
    ],
    'no-loop-func': 2,
    'no-caller': 2,
    'no-script-url': 2,
    'no-shadow': 2,
    'no-new-func': 0,
    'no-new-wrappers': 0,
    'no-undef': 2,
    'new-cap': 0,
    'no-empty': 2,
    'no-new': 0,
    'no-ternary': 2,
    'no-plusplus': 0,
    'dot-notation': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
});
