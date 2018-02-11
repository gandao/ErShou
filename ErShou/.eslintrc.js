// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent':0 ,
        'no-tabs':0,
        'space-before-function-paren':0,
        'comma-spacing':0,
        'camelcase':0,
        'brace-style':0, 
        'quotes':0,
        'no-mixed-spaces-and-tabs': 0,
        'no-trailing-spaces': 0,
        'no-undef': 0,
        "no-irregular-whitespace": 0,
        "block-spacing": 0,
        "no-unused-vars": 0,
        "no-labels": 0,
        "eol-last": 0
  }
}
