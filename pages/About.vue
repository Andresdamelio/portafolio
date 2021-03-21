<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Sobre mí
    </h1>
    <div class="about-me">
      <p
        class="my-4 text-black-200 font-roboto font-light text-lg text-justify"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
        libero ut erat feugiat aliquam. Nam tempor enim a nisl maximus, id
        rutrum lacus luctus. Duis sodales vulputate augue, sit amet volutpat
        diam mollis laoreet. Sed non velit sit amet odio finibus euismod eget in
        tortor. Maecenas hendrerit eleifend congue. Phasellus sed consectetur
        eros, sit amet elementum arcu. Vivamus elementum rhoncus turpis, eget
        euismod nisi aliquet eleifend.
      </p>
      <h2 class="text-3xl border-line font-medium text-black-300 font-mitr">
        Lo que hago
      </h2>
      <div class="flex flex-wrap mt-4">
        <VCard
          v-for="service in services"
          :key="service.id"
          :data="service"
        ></VCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      services: [
        {
          id: "1",
          title: "Diseño Web",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit.",
          image: "web-design.png",
          alt: "Fondo diseño web"
        },
        {
          id: "2",
          title: "Desarrollo Web",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit.",
          image: "web-development.png",
          alt: "Fondo desarrollo web"
        },
        {
          id: "3",
          title: "Diseño lógico de aplicaciones",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit.",
          image: "documentation.png",
          alt: "Fondo diseño lógico de aplicaciones"
        },
        {
          id: "4",
          title: "Desarrollo Móvil",
          description:
            "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit.",
          image: "mobile.png",
          alt: "Desarrollo móvil"
        }
      ]
    }
  }
}
</script>
