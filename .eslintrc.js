module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'only-warn',
    'sonarjs',
    'jest', "json"
  ],
  extends: [
    // 'eslint:recommended',
    'airbnb-typescript/base',
    "plugin:json/recommended",
    "plugin:sonarjs/recommended",
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    "plugin:jest/recommended"
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './__dev__/tsconfig.json',
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', //["error", { "prefixWithI": "always" }]
    '@typescript-eslint/no-floating-promises': 'error',
    "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': "off",
    '@typescript-eslint/no-unused-vars-experimental': ["error"],
    'no-underscore-dangle': 'off',
    'import/named': 'off',
    'require-await': 'error',
    'import/prefer-default-export': 'off',
    "complexity": ["error", 10],
    "no-void": "off",
    // "no-multiple-empty-lines": [2, { "max": 0, "maxEOF": 0 }]
    // "comma-dangle": ["error", "never"]
    'max-len': ['error', { code: 300 }],
  }
}
