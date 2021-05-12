import siteMeta from "./utils/siteMeta"

const meta = siteMeta()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Andrés D'Amelio | Frontend Developer",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      ...meta,
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      {
        property: "og:site_name",
        content: "Andrés D'Amelio | Frontend Developer"
      },
      { property: "og:image:width", content: "680" },
      { property: "og:image:height", content: "356" },
      { name: "twitter:site", content: "@andres_damelio" },
      { name: "twitter:creator", content: "@andres_damelio" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "description",
        name: "description",
        content:
          "Andres D'Amelio, ingeniero en informática, desarrollador web frontend, estudiante de platzi, autodidacta, escribo aplicaciones web usando los frameworks de javascript vue y react"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "~/assets/css/icons.css",
    "~/assets/scss/main.scss",
    "swiper/swiper.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/filters.js",
    "~/plugins/disqus",
    { src: "~/plugins/vue-awesome-swiper.js", mode: "client" }
  ],

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

    "@nuxtjs/router",

    "@nuxtjs/google-fonts"
  ],

  googleFonts: {
    families: {
      Mitr: {
        wght: [100, 300, 500, 600]
      },
      Roboto: {
        wght: [100, 300, 400, 500, 600]
      }
    },
    display: "swap"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: ["markdown-it-prism"]
  },

  publicRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV === "production"
          ? "https://api.andresdamelio.tech"
          : "http://localhost:1337"
    },
    url: process.env.BASE_URL || "http://localhost:3000"
  },

  robots: {
    UserAgent: "*",
    Disallow: ""
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    minimize: true,
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        trimCustomFragments: true
      }
    },
    publicPath: "/_nuxt/"
  },

  sitemap: {
    path: "sitemap.xml",
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: false,
    exclude: [],
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  }
}
