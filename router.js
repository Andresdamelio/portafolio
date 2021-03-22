import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routeOptions = [
  { path: "/", name: "Home", redirect: "/sobre-mi" },
  { path: "/sobre-mi", name: "About" },
  { path: "/resumen", name: "Resume" },
  { path: "/portafolio", name: "Portfolio" },
  { path: "/blog", name: "Blog" },
  { path: "/contacto", name: "Contact" },
  { path: "/blog/:slug", name: "Post" }
]

const routes = routeOptions.map((route) => {
  if (route.redirect) return route

  return {
    ...route,
    component: () =>
      import(
        /* webpackChunkName: "[request]" */ `@/pages/${route.name}.vue`
      ).then((m) => m.default || m)
  }
})

export function createRouter() {
  return new Router({
    mode: "history",
    routes
  })
}
