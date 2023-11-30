import js from "@eslint/js";
import next from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  ts.configs.recommended,
  next,
  prettierConfig,
  {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    languageOptions: {
      parser: tsParser
    },
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
    plugins: {
      ts: ts,
      prettier: prettierPlugin,
    },
    rules: {
      'import/extensions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  }
];
