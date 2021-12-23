// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true, ignore: ['lib'] }],
    'import/no-commonjs': ['error'],
    'no-process-env': ['error'],
  },
  globals: {
    expect: true,
    process: true,
    describe: true,
    before: true,
    after: true,
    beforeEach: true,
    suite: true,
    test: true,
    it: true,
  },
}
