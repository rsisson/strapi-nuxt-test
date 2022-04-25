import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/strapi'],
    css: ['tailwindcss/tailwind.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    strapi: {
        url: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:1337',
        version: 'v4',
    },
    runtimeConfig: {
        apiToken: '',
        public: {
            apiBase: 'http://localhost:1337',
        },
    },
})
