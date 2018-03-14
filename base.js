module.exports = {

  "extends": "airbnb-base",

  "globals": {},

  "parser": "babel-eslint",

  "plugins": [],

  "env": {
    "es6": true
  },

  "rules": {
    "valid-jsdoc": [2, {
      "requireReturn": false,
      "prefer": {
        "returns": "return"
      }
    }]
  },

  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }

};


// "func-names": ["error", "as-needed"],
// "indent": ["error", 2],
// "maxlen": 100,
// "no-param-reassign": 0,
// "no-tabs": 0,
// "no-trailing-spaces": 0,
// "no-use-before-define": ["error", { "functions": false }],
// "no-unused-vars": ["error", { "args": "none" }],
// "no-var": 0,
// "object-shorthand": 0,
// "one-var-declaration-per-line": 0,
// "one-var": 0,
// "prefer-template": 0,
// "prefer-arrow-callback": 0,
// "quotes": [2, "single"],
// "radix": ["error", "as-needed"],
// "space-before-function-paren": [2, "never"],
// "strict": 0,
// "undef": 1,
// "unused": 1,
