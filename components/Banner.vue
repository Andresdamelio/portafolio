<template>
  <div class="banner-container absolute top-0 left-0 w-full">
    <img
      v-if="banner && Object.keys(banner).length"
      :src="banner.url"
      :alt="banner.alternativeText"
      class="w-full h-full banner-img object-cover"
    />
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  props: {
    banner: {
      type: Object,
      required: true
    }
  }
}
</script>
