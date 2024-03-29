const config = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Icons'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['box-orient'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
  },
};

export default config;
