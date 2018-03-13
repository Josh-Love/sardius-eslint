// Base eslint that should apply to all projects

module.exports = {

  globals: {},

  parser: "babel-eslint",

  plugins: [],

  env: {
    "es6": true,
  }

  rules: {
    "class-methods-use-this": 0,
    "quotes": [2, "single"],
    "eqeqeq": 0,
    "strict": 0,
    "indent": ["error", 2],
    "func-names": ["error", "as-needed"],
    "no-param-reassign": 0,
    "no-tabs": 0,
    "no-trailing-spaces": 0,
    "no-use-before-define": ["error", {"functions": false}],
    "no-unused-vars": ["error", { "args": "none" }],
    "space-before-function-paren": [2, "never"],
    "valid-jsdoc": [2, {
      "requireReturn": false,
      "prefer": {
          "returns": "return"
      }
    }],
    "prefer-template": 0,
    "prefer-arrow-callback": 0,
    "object-shorthand": 0,
    "no-var": 0,
    "one-var-declaration-per-line": 0,
    "one-var": 0,
    "radix": ["error", "as-needed"],
  }

  parserOptions: {}

};
