module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['node_modules/'],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'no-multiple-empty-lines': 'off',
        'no-unused-expressions': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['prettier', 'svelte3'],
  rules: {
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
  },
};
