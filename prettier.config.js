module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  "eslint linebreak-style": ["error", "windows"],
  bracketSameLine: false,
  jsxSingleQuote: false,
  parser: "typescript",
  printWidth: 240,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html",
      },
    },
    {
      files: "*.yaml",
      options: {
        parser: "yaml",
      },
    },
    {
      files: "*.yml",
      options: {
        parser: "yaml",
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
};
