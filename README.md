# sardius-eslint
Basic eslint rules for all Sardius projects. Extends [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base). Also, this package includes the following packages (meaning no need for you to install):
- babel-eslint@8.2.2
- eslint@4.18.2
- eslint-config-airbnb-base@12.1.0
- eslint-plugin-import@2.9.0
- eslint-plugin-jsx-a11y@6.0.3
- eslint-plugin-react@^7.7.0

## Set Up
In your project directory, run:
```
npm install --save-dev eslint-config-sardius
```
In your project directory, create an .eslintrc file and extend Sardius. Your eslint file can look like the following:
```javascript
{ "extends": "sardius" }
```
You can still overwrite any rules from sardius-eslint by adding them here in your .eslintrc file


## Configs
There are four different eslint configurations that can be chosen. Choose whichever best fits your current projects environment.

### Base
Base rules that should apply to all projects. It is expected that your project is transpiled with babel.
#### Setup
.eslintrc
```javascript
"extends": "sardius"
```
#### Configuration
The default configuration. The rest of the configurations extend these options.
```javascript
"parser": "babel-eslint",

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
```

### Frontend
Used for front end JS/jQuery
#### Setup
.eslintrc
```javascript
"extends": "sardius/frontend"
```
#### Configuration
Extends the base package, and adds the following:
```javascript
"env": {
  "browser": true,
  "jquery": true
}
```

### Backend
Used for nodeJS environments
#### Setup
.eslintrc
```javascript
"extends": "sardius/backend"
```
#### Configuration
Extends the base package, and adds the following:
```javascript
"env": {
  "node": true,
  "shared-node-browser": true
},
"parserOptions": {
  "ecmaVersion": 7,
  "sourceType": "module",
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
    "experimentalDecorators": true
  }
}
```

### React
Used for reactJS environments
#### Setup
.eslintrc
```javascript
"extends": "sardius/react"
```
#### Configuration
Extends the base package, and adds the following:
```javascript
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
}
```
