// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@element-plus/nuxt',
    '@unocss/nuxt'
  ],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: [],
  },
  elementPlus: { /** Options */ },
  devtools: { enabled: true }
})
