import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        pragma: 'React',
        fragment: 'Fragment',
        version: 'detect'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-explicit-any': 'off'
    },
    ignores: ['node_modules', 'package.json', 'tsconfig.json']
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
];
