// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  prettierConfig,
  {
    // Browser scripts in public/ run in the browser environment
    files: ['public/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
);
