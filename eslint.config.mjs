import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierRecommended  from 'eslint-plugin-prettier/recommended';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'no-console': 'error',
      "@typescript-eslint/no-explicit-any": "off",
      'prettier/prettier': [
        'error',
      ]
    }
  }
];