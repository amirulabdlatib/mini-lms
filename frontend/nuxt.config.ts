// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    devServer: {
        host: "localhost",
    },

    modules: ["nuxt-auth-sanctum"],

    sanctum: {
        baseUrl: process.env.NUXT_SANCTUM_BASE_URL,
        redirect: {
            onAuthOnly: "/auth/login",
            onGuestOnly: "/dashboard",
            onLogout: "/auth/login",
        },
    },

    app: {
        head: {
            title: "Mini LMS",
            titleTemplate: "%s - Mini LMS",
            meta: [
                {
                    name: "description",
                    content: "A minimal learning management system",
                },
            ],
        },
    },
});
