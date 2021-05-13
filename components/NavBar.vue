<template>
  <aside
    class="navbar z-50 flex flex-col items-center p-4 fixed md:sticky md:top-0 bottom-0 right-0 left-0"
  >
    <ul class="flex flex-wrap w-full px-0 my-0 md:px-2 md:my-2">
      <li
        class="block w-1/5 md:w-full mb-0 md:mb-4 text-center h-auto md:h-24 bg-transparent md:bg-yellow-200 rounded-lg"
      >
        <nuxt-link
          to="/sobre-mi"
          class="flex flex-col items-center justify-center h-full w-full text-black-300 text-xs md:text-lg font-medium font-mitr item-link outline-none"
        >
          <span class="flex icon icon-about-me-1 text-2xl md:text-3xl"></span>
          <span>Sobre mí</span>
        </nuxt-link>
      </li>

      <li
        class="block w-1/5 md:w-full mb-0 md:mb-4 text-center h-auto md:h-24 bg-transparent md:bg-yellow-200 rounded-lg"
      >
        <nuxt-link
          to="/resumen"
          class="flex flex-col items-center justify-center h-full w-full text-black-300 text-xs md:text-lg font-medium font-mitr item-link outline-none"
        >
          <span class="flex icon icon-resume-1 text-2xl md:text-3xl"></span>
          <span>Resumen</span>
        </nuxt-link>
      </li>

      <li
        class="block w-1/5 md:w-full mb-0 md:mb-4 text-center h-auto md:h-24 bg-transparent md:bg-yellow-200 rounded-lg"
      >
        <nuxt-link
          to="/portafolio"
          class="flex flex-col items-center justify-center h-full w-full text-black-300 text-xs md:text-lg font-medium font-mitr item-link outline-none"
        >
          <span class="flex icon icon-portfolio text-2xl md:text-3xl"></span>
          <span>Portafolio</span>
        </nuxt-link>
      </li>

      <li
        class="block w-1/5 md:w-full mb-0 md:mb-4 text-center h-auto md:h-24 bg-transparent md:bg-yellow-200 rounded-lg"
      >
        <nuxt-link
          to="/blog"
          class="flex flex-col items-center justify-center h-full w-full text-black-300 text-xs md:text-lg font-medium font-mitr item-link outline-none"
        >
          <span class="flex icon icon-blog text-2xl md:text-3xl"></span>
          <span>Blog</span>
        </nuxt-link>
      </li>

      <li
        class="block w-1/5 md:w-full text-center mb-0 md:mb-4 h-auto md:h-24 bg-transparent md:bg-yellow-200 rounded-lg"
      >
        <nuxt-link
          to="/contacto"
          class="flex flex-col items-center justify-center h-full w-full text-black-300 text-xs md:text-lg font-medium font-mitr item-link outline-none"
        >
          <span class="flex icon icon-contact-1 text-2xl md:text-3xl"></span>
          <span>Contacto</span>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "MainNavbar"
}
</script>

<style lang="scss">
.navbar {
  height: max-content;
}
.nuxt-link-active {
  @media (min-width: 768px) {
    background: #fac43d;
    border-radius: 15px;
    box-shadow: 1px 1px 4px rgba(49, 50, 56, 0.3);
  }

  @media (max-width: 768px) {
    border-bottom: 3px solid #fac43d;
  }
}

.item-link:hover {
  @media (min-width: 768px) {
    box-shadow: 1px 1px 4px rgba(49, 50, 56, 0.3);
    border-radius: 15px;
  }
}
</style>
