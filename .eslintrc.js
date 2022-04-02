/*
 * Copyright (c) 2008-2019 by teambits GmbH, Darmstadt, Germany (http://www.teambits.de). All rights reserved.
 * This is CONFIDENTIAL code. Use is subject to license terms.
 */

// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
  },

  env: {
    browser: true,
    node: true,
  },

  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential", // TODO NOW plugin:vue/vue3-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "@vue/prettier",
  ],

  // required to lint *.vue files
  plugins: ["vue"],

  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/require-prop-type-constructor": "off",
    "vue/require-valid-default-prop": "off",
  },
}
