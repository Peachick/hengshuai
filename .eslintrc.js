// https://eslint.org/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    withDefaults: 'readonly',
    defineExpose: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-cond-assign': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 0,
    'vue/require-default-prop': 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
  },
};
