<template>
  <main class="main">
    <v-banner v-if="banner" :banner="banner"></v-banner>
    <div class="container mx-auto relative pt-60 px-4 pb-24 md:pb-0">
      <v-header @change="setBanner"></v-header>
      <v-body></v-body>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Body from "../components/Body.vue";

export default {
  name: "Main",
  data() {
    return {
      banner: null
    };
  },
  components: {
    "v-header": Header,
    "v-banner": Banner,
    "v-body": Body
  },
  methods: {
    setBanner(banner) {
      this.banner = banner;
    }
  }
};
</script>
