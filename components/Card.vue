<template>
  <div class="w-full md:w-1/2 p-0 md:p-3">
    <div
      class="flex flex-col md:flex-row rounded overflow-hidden h-auto md:h-32 pb-4"
    >
      <div class="py-3 w-full md:w-40">
        <img
          class="block flex-none bg-cover mx-auto md:mx-0"
          :src="data.image.url"
          :alt="data.image.alternativeText"
        />
      </div>
      <div
        class="bg-white dark:bg-dark-400 rounded-b md:rounded-b-none md:rounded-r px-0 md:px-3 py-2 flex flex-col leading-normal text-center md:text-left"
      >
        <h2
          class="text-black-300 dark:text-white font-medium font-mitr text-xl mb-2 leading-tight"
        >
          {{ data.title }}
        </h2>
        <p
          class="text-black-20 dark:text-white text-base font-light font-roboto"
        >
          {{ data.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
