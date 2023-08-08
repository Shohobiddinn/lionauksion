// https://nuxt.com/docs/api/configuration/nuxt-config  
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["~/assets/scss/main.scss"],
  runtimeConfig:{
    public:{
      baseUrl:"https://lionprintspringboot-production.up.railway.app/api/v1"
    }
  },
  ssr:false
})
