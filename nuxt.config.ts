// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages:true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-swiper'
  ]
})
