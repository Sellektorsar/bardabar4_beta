export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700],
      'Open Sans': [300, 400, 500, 600, 700],
      Inter: [300, 400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'Бар-да-бар - Развлекательный центр',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Кафе Бар-да-бар - уютное место для отдыха с семьей и друзьями. Банкетный зал, спорт-бар, VIP-зал. Вкусная еда и отличная атмосфера.' },
        { name: 'keywords', content: 'кафе, ресторан, бар, банкет, спорт-бар, VIP-зал, семейное кафе' },
        { property: 'og:title', content: 'Бар-да-бар - Развлекательный центр' },
        { property: 'og:description', content: 'Кафе Бар-да-бар - уютное место для отдыха с семьей и друзьями' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  }
})
