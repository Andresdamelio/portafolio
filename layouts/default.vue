<template>
  <main class="main">
    <VBanner v-if="banner" :banner="banner" />
    <div class="container mx-auto relative pt-60 px-4 pb-24 md:pb-0">
      <VHeader :profile="profile" />
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
      banner: null,
      profile: null
    }
  },
  async fetch() {
    const { data } = await this.$axios.get("/profile")
    this.profile = data
    this.banner = data.banner
  },
  methods: {
    setBanner(banner) {
      this.banner = banner
    }
  }
}
</script>
