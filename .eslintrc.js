module.exports = {
  root: true,
  plugins: ['simple-import-sort'],
  extends: ['plugin:prettier/recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-restricted-syntax': 'off',
    'object-curly-spacing': 'off',
    'space-infix-ops': [2],
    'rest-spread-spacing': ['error'],
    'import/prefer-default-export': ['off'],
    'no-underscore-dangle': ['off'],
    'no-multi-assign': ['off'],
    'max-classes-per-file': ['off'],
    'no-process-env': ['error'],
    // 'no-unused-vars': [2],
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'multiline-comment-style': 'off',
    'prettier/prettier': 'off',
    'max-lines': [
      'error',
      {
        max: 400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {
          new: false,
          '++': false,
        },
      },
    ],
    /**
     * blank line control, per airbnb coding styles:
     * https://github.com/airbnb/javascript#whitespace--after-blocks
     */
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: 'multiline-let', next: '*' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: 'function', next: '*' },
    ],
  },
};
