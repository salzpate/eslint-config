module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-html-link-for-pages': ['off'],
  },
};
