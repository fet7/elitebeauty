/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  require('@eslint/js').configs.recommended,

  ...require('typescript-eslint').configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'jsx-a11y/anchor-is-valid': 'warn',

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
    },
  },

  require('eslint-config-prettier'),
];
