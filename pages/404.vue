<template>
  <div class="flex flex-col justify-center items-center h-full">
    <img
      class="h-60 md:h-80"
      src="~/assets/images/404.svg"
      alt="Ilustration 404"
    />
    <h2
      class="text-black-300 text-3xl font-semibold leading-3xl font-mitr mt-3 text-center"
    >
      Parece que estás perdido
    </h2>
    <p class="inline-block text-black-300 text-lg font-light font-mitr mt-2">
      La página que buscas no existe. Haz click en el boton para ir al inicio
    </p>
    <div class="flex justify-center w-1/2 mt-4">
      <VButton
        text="Ir al inicio"
        :has-icon="false"
        type="action"
        @action="$router.push({ path: 'sobre-mi' })"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
  head() {
    return {
      title: "404 página no encontrada"
    }
  }
}
</script>
