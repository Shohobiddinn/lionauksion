export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['maz-ui/css/main.css', "~/assets/scss/main.scss",],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      title: 'LionPrint',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/image26.svg',sizes: 'any'},
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
        name: "uzb",
        file: "uz.json"
      },
      {
        code: "ru",
        name: "рус",
        file: "ru.json"
      },
    ]
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://localhost:8981/api/v1"
    }
  },
  build: {
    transpile: ['maz-ui'],
  },
  ssr: false
})
//shuni olavering angular emasmanu
