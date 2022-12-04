module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
    'prettier',
  ],
  plugins: ['cypress', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
  },
}
