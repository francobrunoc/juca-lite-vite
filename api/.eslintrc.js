module.exports = {
  env: {
    node: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'never'],
    'import/no-named-as-default': 0
  }
}
