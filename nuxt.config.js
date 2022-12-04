import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Fictional Company',
    title: 'Fictional Company',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon.svg',
      },
      {
        rel: 'icon',
        type: 'image/svg',
        sizes: '192x192',
        href: '/favicon.svg',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  loading: {
    color: 'rgba(153,153,153)',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000/',
    generate: true,
    // route: async () => {
    //   const data = await axios.get(`${proces.env.API_BASE_URL}/v1/jobs`)
    //   return data.map((post) => `/jobs/${post.slug}`
    // }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.purple,
          accent: colors.shades.black,
          secondary: colors.grey.darken1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.accent3,
          success: colors.green.accent3,
        },
      },
    },
    defaultAssets: {
      font: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
