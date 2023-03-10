module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multi-spaces': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-spacing': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
