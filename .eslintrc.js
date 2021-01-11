"use strict";

module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    "jest/globals": true,
    node: true,
  },

  extends: [
    "hardcore",
    "hardcore/node",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:node/recommended",
  ],

  plugins: ["inclusive-language", "jest", "woke"],

  parserOptions: {
    ecmaVersion: 11,
  },

  rules: {
    "inclusive-language/use-inclusive-words": "error",
    "woke/all": "error",
  },
};
