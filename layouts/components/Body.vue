<template>
  <div class="flex flex-col-reverse md:flex-row mb-4 mt-4">
    <v-nav-bar
      class="w-full md:w-1/7 p-2 bg-white rounded-0 md:rounded-20 mr-4"
    ></v-nav-bar>
    <v-content class="w-full md:w-6/7 p-7 bg-white rounded-20"></v-content>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Content from "./Content.vue";

export default {
  name: "main-body",
  components: {
    "v-nav-bar": NavBar,
    "v-content": Content
  }
};
</script>
