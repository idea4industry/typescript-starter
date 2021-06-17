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
    'prettier',
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
    'prettier/prettier': 'error',
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
    'max-len': ['error', { code: 300 }],
  }
}
