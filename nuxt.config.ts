// https://nuxt.com/docs/api/configuration/nuxt-config  
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['maz-ui/css/main.css',"~/assets/scss/main.scss"],
  runtimeConfig:{
    public:{
      baseUrl:"https://lionprintspringboot-production.up.railway.app/api/v1"
    }
  },
  build: {
    transpile: ['maz-ui'],
  },
  ssr:false
})
