/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
  },
};
