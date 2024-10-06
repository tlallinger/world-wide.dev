// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'worldwidedev',
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/styles/css/main.css'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: {
    enabled: false,
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})
