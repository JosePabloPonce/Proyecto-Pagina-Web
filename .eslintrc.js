module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
	semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-undef': 'off',
	'react/prop-types': "off",

  },
};
