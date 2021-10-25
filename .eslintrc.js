module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'import'],
  parser: 'babel-eslint',
  root: true,
  globals: {
    localStorage: true,
    fetch: true,
    browser: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-case-declarations': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'eol-last': 0,
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'warn',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'no-restricted-syntax': 'warn',
    'guard-for-in': 'warn',
    'consistent-return': 'warn',
    'prefer-const': 'warn',
    'react/prop-types': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/require-default-props': 'warn',
    'no-shadow': 'warn',
    'spaced-comment': 'warn',
    'import/no-cycle': 'warn',
    'no-await-in-loop': 'warn',
    'no-continue': 'warn',
    'no-nested-ternary': 'warn',
    'react/self-closing-comp': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/no-unused-prop-types': 'warn',
    'no-underscore-dangle': 'warn',
    'react/no-array-index-key': 'warn',
    'no-use-before-define': 'warn',
    'no-eval': 'warn',
    'no-else-return': 'warn',
    'one-var': 'warn',
    'no-new-func': 'warn',
    'no-async-promise-executor': 'warn',
    'object-shorthand': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-destructuring': 'warn',
    'default-case': 'warn',
    'no-empty': 'warn',
    'no-multi-assign': 'warn',
    'no-return-assign': 'warn',
    'no-template-curly-in-string': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    eqeqeq: 'warn',
    'import/no-useless-path-segments': 'warn',
    radix: 'warn',
    'prefer-template': 'warn',
    'no-useless-escape': 'warn',
    'react/button-has-type': 'warn',
    'import/no-duplicates': 'warn',
    'import/extensions': 'warn',
    'no-dupe-keys': 'warn',
    'import/no-named-as-default': 'warn',
    'no-restricted-globals': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']]
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
