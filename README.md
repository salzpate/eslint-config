# @salzpate eslint-config-nextjs

ESLint shareable config for next.js projects.

## Installation

```bash
npx install-peerdeps --dev @salzpate/eslint-config-nextjs
```

> eslint, eslint-config-next, eslint-config-prettier, eslint-plugin-jest, eslint-plugin-prettier, eslint-plugin-react-hooks, prettier, stylelint, stylelint-config-prettier, stylelint-config-recommended, stylelint-order and stylelint-prettier are peer dependencies and must be installed.

## Usage

Extend the shared eslint config in your `.eslintrc.json` file:

```json
module.exports = {
  "extends": "@salzpate/eslint-config-nextjs",
  "rules": {
    // Your project-specific rules
  }
};
```

Extend the shared eslint config in your `.prettierrc.rc` file:

```json
module.exports = require('eslint-config-gusto/.prettierrc');
```

## Reference

- [eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Stylelint](https://stylelint.io)
- [Next.js](https://nextjs.org)

## License
Ronny Krammer is Open Source software released under the https://www.apache.org/licenses/LICENSE-2.0.html[Apache 2.0 license].
