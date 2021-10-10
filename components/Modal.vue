<template>
  <div
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black-300 bg-opacity-50 z-60"
  >
    <div
      class="bg-white dark:bg-dark-400 rounded-lg shadow-lg w-10/12 md:w-1/3"
    >
      <div class="px-4 py-2 flex justify-between items-center">
        <h3
          class="font-medium text-lg text-black-300 dark:text-white font-mitr"
        >
          {{ title }}
        </h3>
      </div>
      <div class="flex justify-center items-center">
        <img
          class="w-36"
          :src="require(`~/assets/images/${image}`)"
          :alt="alt"
        />
      </div>
      <div
        class="p-4 text-black-200 font-roboto font-light text-lg text-center"
      >
        {{ message }}
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button
          class="bg-yellow-300 px-4 py-1 rounded font-mitr text-black-300 text-base font-medium mr-1 close-modal"
          @click="close"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      require: true,
      default: ""
    },
    image: {
      type: String,
      require: false,
      default: ""
    },
    alt: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    close() {
      this.$emit("close")
    }
  }
}
</script>
