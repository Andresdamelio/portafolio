<template>
  <div class="banner-container absolute top-0 left-0 w-full">
    <button
      aria-label="switch dark mode"
      :class="`button-mode ${
        $colorMode.preference === 'dark'
          ? 'bg-gradient-to-r from-indigo-300 to-white dark-selected'
          : 'bg-gradient-to-r from-indigo-700 to-gray-900 light-selected'
      }`"
      @click="changeMode($colorMode.preference)"
    >
      <div class="icon-mode"></div>
    </button>
    <img
      v-if="banner && Object.keys(banner).length"
      :src="banner.url"
      :alt="banner.alternativeText"
      class="w-full h-full banner-img object-cover"
      width="100%"
      height="100%"
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
  },
  methods: {
    changeMode(mode) {
      const newMode = mode === "dark" ? "light" : "dark"
      this.$colorMode.preference = newMode
    }
  }
}
</script>
<style lang="scss">
.button-mode {
  @apply absolute flex top-8 right-8 z-10 w-16 rounded-full p-1 transition-colors;
  div {
    @apply bg-cover bg-center h-6 w-6 block transition-transform duration-100;
  }
  &.light-selected {
    .icon-mode {
      @apply transform translate-x-0;
      background-image: url("assets/images/moon.webp");
    }
    .selector-mode {
      @apply bg-gray-700 rounded-full transform translate-x-2;
    }
  }
  &.dark-selected {
    .icon-mode {
      @apply transform translate-x-8;
      background-image: url("assets/images/contrast.webp");
    }
    .selector-mode {
      @apply bg-gray-900 rounded-full transform -translate-x-6;
    }
  }
}
</style>
