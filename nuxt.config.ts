// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'worldwidedev',
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/styles/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: {
    enabled: false,
  },
  runtimeConfig: {
    public: {
      underConstruction: process.env.UNDER_CONSTRUCTION || 'false',
    },
  },
})
