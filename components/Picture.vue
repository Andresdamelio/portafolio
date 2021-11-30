<template>
  <div class="-mt-16 mb-4 md:mb-0 h-40 w-40 rounded-full overflow-hidden">
    <img
      width="150"
      height="150"
      :src="image.url"
      :alt="image.alternativeText"
      class="w-full h-full border-solid border-5 border-azure-100 dark:border-dark-500 rounded-full"
    />
  </div>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}
</script>
