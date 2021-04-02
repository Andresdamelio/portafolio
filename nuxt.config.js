export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Andrés D'Amelio | Frontend Developer",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "~/assets/css/icons.css",
    "~/assets/scss/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/filters.js", "~/plugins/disqus"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      {
        path: "~/components",
        prefix: "V"
      }
    ]
  },

  loading: {
    color: "#fac43d",
    height: "3px"
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",

    "@nuxtjs/router"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/markdownit"],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: "http://localhost:1337"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false
  }
}
