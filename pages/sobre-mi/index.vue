<template>
  <div>
    <VSocialHead
      title="Andrés D'Amelio | Sobre mí"
      :description="about"
      :url="`${$config.url}/sobre-mi`"
    />
    <h1
      class="text-3xl border-line font-medium text-black-300 dark:text-white font-mitr"
    >
      Sobre mí
    </h1>
    <div class="about-me">
      <p
        v-if="about"
        class="my-4 text-black-200 dark:text-white font-roboto font-light text-lg text-justify"
      >
        {{ about }}
      </p>
      <h2
        class="text-3xl border-line font-medium text-black-300 dark:text-white font-mitr"
      >
        Lo que hago
      </h2>
      <div v-if="skills" class="flex flex-wrap mt-4">
        <VCard v-for="skill in skills" :key="skill.id" :data="skill" />
      </div>
    </div>

    <VLoader v-if="showLoader" />
  </div>
</template>

<script>
export default {
  name: "About",
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/about")
    return { about: data.about, skills: data.skills, showLoader: true }
  },
  head() {
    return {
      title: "Andrés D'Amelio | Sobre mí",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.url}/sobre-mi`
        }
      ]
    }
  },
  created() {
    setTimeout(() => (this.showLoader = false), 1000)
  }
}
</script>
