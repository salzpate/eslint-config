import customTestConfig from "./index.js";
export default [
  {
    ...customTestConfig,
    rules: {
      '@next/next/no-html-link-for-pages': ['off'],
    },
  }
];
