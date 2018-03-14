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
