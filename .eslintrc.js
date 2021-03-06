module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/button-has-type': 0,
    'import/no-unresolved': 0,
    'no-nested-ternary': 0,
  },
};
