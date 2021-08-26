module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['sfgov'],
  extends: [
    'plugin:sfgov/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
  },
  overrides: [
    {
      files: ['src/js/*.js', 'src/icons/index.js'],
      env: {
        browser: true
      },
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: 'lib/**/*.js',
      extends: ['plugin:sfgov/node'],
      env: {
        node: true
      }
    },
    {
      files: 'rollup.config.js',
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: 'scripts/*.js',
      rules: {
        'node/shebang': 0
      }
    }
  ]
}
