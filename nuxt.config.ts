// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'worldwidedev',
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    dir: 'assets/img',
  },
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