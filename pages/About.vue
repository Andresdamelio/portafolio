<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Sobre mí
    </h1>
    <div class="about-me">
      <p
        class="my-4 text-black-200 font-roboto font-light text-lg text-justify"
      >
        {{ about }}
      </p>
      <h2 class="text-3xl border-line font-medium text-black-300 font-mitr">
        Lo que hago
      </h2>
      <div class="flex flex-wrap mt-4">
        <VCard v-for="skill in skills" :key="skill.id" :data="skill"></VCard>
      </div>
    </div>

    <VLoader v-if="showLoader"></VLoader>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: null,
      about: "",
      showLoader: false
    }
  },
  created() {
    this.getInfoAbout()
  },
  methods: {
    async getInfoAbout() {
      try {
        this.showLoader = true
        const { data } = await this.$axios.get("/about")
        this.about = data.about
        this.skills = data.skills
        setTimeout(() => (this.showLoader = false), 1000)
      } catch (error) {
        console.log(error)
        this.showLoader = false
      }
    }
  }
}
</script>
