module.exports = {

  "plugins": ["react", "react-hooks"],

  "env": {
    "browser": true,
    "jquery": true
  },

  "rules": {
    'jsx-quotes': ['error', 'prefer-double'],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount'
      ]
    }],
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array', 'object'] }],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'off',
    'react/jsx-max-props-per-line': ['off', { maximum: 1 }],
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false
    }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: []
    }],
    'react/sort-prop-types': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false
    }],
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false
    }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-direct-mutation-state': 'off',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': ['error', { ignore: [], customValidators: [], skipUndeclared: true }],
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': ['off', { extensions: ['.jsx', '.js'] }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-tag-spacing': 'warn',
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true
    }],
    'react/wrap-multilines': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/no-comment-textnodes': 'off', // deprecated version
    'react/no-render-return-value': 'error',
    'react/require-optimization': ['off', { allowDecorators: [] }],
    'react/no-find-dom-node': 'error',
    'react/forbid-component-props': ['off', { forbid: [] }],
    'react/no-danger-with-children': 'error',
    'react/no-unused-prop-types': ['error', {
      customValidators: [
      ],
      skipShapeProps: false
    }],
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalDecorators": true
    }
  },

  "extends": ["sardius"]

};
