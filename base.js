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
    "no-trailing-spaces": 0,
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": true,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ]
  },

  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }

};
