module.exports = {

  "plugins": ["react"],

  "env": {
    "browser": true,
    "jquery": true
  },

  "rules": {
    "jsx-quotes": ["error", "prefer-single"],
    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-handler-names": 1,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-deprecated": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-is-mounted": 1,
    "react/no-multi-comp": 0,
    "react/no-set-state": 0,
    "react/no-string-refs": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1
  },

  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true
    }
  },

  "extends": "sardius"

};
