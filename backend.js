// Base eslint that should apply to all projects

module.exports = {

  globals: {},

  plugins: [],

  env: {
    "node": true,
    "shared-node-browser": true,
  },

  rules: {},

  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true,
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
    }
  },

  extends: "sardius",

};