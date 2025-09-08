// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    devServer: {
        host: "localhost",
    },

    modules: ["nuxt-auth-sanctum"],

    sanctum: {
        baseUrl: "http://localhost:8000",
    },
});
