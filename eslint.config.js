// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const reactPlugin = require("eslint-plugin-react");

// Initialize FlatCompat with a recommendedConfig setting
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended, // Use the recommended JS config
  baseDirectory: __dirname,
});

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  },
  ...compat.config({
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: ["react"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
  }),
];
