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
    }],
    "padded-blocks": ["error", { "classes": "always" }],
    "no-trailing-spaces": 0
  },

  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }

};
