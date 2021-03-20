<template>
  <div class="banner-container absolute top-0 left-0 w-full">
    <img
      :src="banner.url"
      :alt="banner.alternativeText"
      class="w-full h-full banner-img"
      v-if="banner && Object.keys(banner).length"
    />
  </div>
</template>

<script>
export default {
  name: "main-banner",
  props: {
    banner: {
      type: Object,
      required: true
    }
  }
};
</script>
