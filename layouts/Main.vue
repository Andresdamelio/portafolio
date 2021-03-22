<template>
  <main class="main">
    <VBanner v-if="banner" :banner="banner"></VBanner>
    <div class="container mx-auto relative pt-60 px-4 pb-24 md:pb-0">
      <VHeader @change="setBanner"></VHeader>
      <VBody>
        <Nuxt />
      </VBody>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      banner: null
    }
  },
  methods: {
    setBanner(banner) {
      this.banner = banner
    }
  }
}
</script>
