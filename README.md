# @salzpate eslint-config-nextjs

ESLint shareable config for next.js projects.

## Installation

```bash
npx install-peerdeps --dev @salzpate/eslint-config-nextjs
```

> eslint, eslint-config-next, eslint-config-prettier, eslint-plugin-jest, eslint-plugin-prettier, eslint-plugin-react-hooks, prettier, stylelint, stylelint-config-prettier, stylelint-config-recommended, stylelint-order and stylelint-prettier are peer dependencies and must be installed.

## Usage

Extend the shared eslint config in your `.eslintrc.js` file:

```javascript
module.exports = {
  "extends": "@salzpate",
  "rules": {
    // Your project-specific rules
  }
};
```

Extend the shared prettier config in your `prettier.config.js` file:

```javascript
module.exports = require('@salzpate/eslint-config/prettier.config');
```

Extend the shared eslint config in your `stylelint.config.js` file:

```javascript
module.exports = require('@salzpate/eslint-config/stylelint.config');
```

## Reference

- [eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Stylelint](https://stylelint.io)
- [Next.js](https://nextjs.org)

## License
Ronny Krammer is Open Source software released under the https://www.apache.org/licenses/LICENSE-2.0.html[Apache 2.0 license].
