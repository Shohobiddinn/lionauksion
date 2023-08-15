// https://nuxt.com/docs/api/configuration/nuxt-config  
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['maz-ui/css/main.css', "~/assets/scss/main.scss",],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: "uz",
    locales: [
      {
        code: "uz",
        file: "uz.json"
      },
      {
        code: "ru",
        file: "ru.json"
      },
    ]
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://lionprintspringboot-production.up.railway.app/api/v1"
    }
  },
  build: {
    transpile: ['maz-ui'],
  },
  ssr: false
})
