import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['assets/scss/index.scss'],
    runtimeConfig: {
        base: process.env.BASE,
        key: process.env.KEY,
        pw: process.env.PW
    }
})
