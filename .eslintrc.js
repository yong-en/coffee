module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    'no-console': 'off',
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': true
    }],
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
  },

};
