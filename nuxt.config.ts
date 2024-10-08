// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'worldwidedev',
    }
  },
  image: {
    dir: 'assets/img',
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
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
    recipientEmail: '',
    private: {
      smtpHost: '',
      smtpPort: '',
      smtpUser: '',
      smtpPass: '',
    },
  },
})