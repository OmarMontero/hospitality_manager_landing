module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'import/no-useless-path-segments': 'warn',
    'eol-last': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'semi': 'warn',
    'indent': 'warn',
    'max-len': 'warn',
    'eol-last': 'warn',
    'comma-dangle': 'warn',
    'no-unused-vars': 'warn',
    'vue/no-unused-vars': 'off',
    'no-multiple-empty-lines': 'warn',
    'no-trailing-spaces': 'off',
    'space-before-blocks': 'warn',
    'object-curly-spacing': 'warn',
    'padded-blocks': 'warn',
    'no-useless-escape': 'warn',
    'arrow-body-style': 'warn',
    'no-unreachable': 'warn',
    'lines-between-class-members': 'warn',
    'import/extensions': 'warn',
    'class-methods-use-this': 'warn',
    'no-useless-return': 'warn',
    'no-tabs':'warn',
    'space-before-function-paren':'warn',
    'no-spaced-func':'warn',
    'func-call-spacing':'warn',
    'function-paren-newline':'warn',
    'arrow-spacing':'warn',
    'spaced-comment':'warn',
    'no-unused-labels':'warn',
    "import/no-extraneous-dependencies": "warn",
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
