import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@tailwindcss/vite",
    "@nuxt/icon", // <Icon name="uil:github" style="color: white" /> install extension "Iconify IntelliSense"
  ],
    fonts: {
    google: {
      families: ["Prompt:400,500,700"],
    },
  },
  //setup base URL like /localhost:3000/xxxx
  app: { baseURL: "/ISSDashBoard/" },
  nitro: {
    //setup API
    devProxy: {
      "/ISSDashBoard/iss": {
        target: "http://localhost:8081/ISSDashBoard/iss",
        changeOrigin: true,
      },
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
