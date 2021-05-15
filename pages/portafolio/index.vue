<template>
  <div>
    <VSocialHead
      title="Andrés D'Amelio | Portafolio"
      :url="`${$config.url}/portafolio`"
    />
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Portafolio
    </h1>
    <section class="flex flex-wrap flex-col md:flex-row mt-8">
      <div
        v-if="categories"
        class="categories w-full flex px-0 overflow-x-scroll md:overflow-hidden md:px-3 py-4"
      >
        <VCategory
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :index="indexActive"
          @selected="onActive(category.id)"
        />
      </div>
      <div class="flex flex-wrap w-full">
        <VItemProject
          v-for="project in filterPost"
          :key="project.index"
          :project="project"
        />
      </div>
    </section>
    <VLoader v-if="showLoader" />
  </div>
</template>

<script>
export default {
  name: "Projects",
  async asyncData({ $axios }) {
    const { data: categories } = await $axios.get(
      "/categories?activeProjects=true&&_sort=created_at:ASC"
    )
    const { data: projects } = await $axios.get("/projects")

    return { categories, projects, showLoader: true }
  },
  data() {
    return {
      indexActive: 1
    }
  },
  head() {
    return {
      title: "Andrés D'Amelio | Portafolio",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.url}/portafolio`
        }
      ]
    }
  },
  computed: {
    filterPost() {
      return this.indexActive === 1
        ? this.projects
        : this.projects.filter(
            (project) => project.category.id === this.indexActive
          )
    }
  },
  created() {
    setTimeout(() => (this.showLoader = false), 1000)
  },
  methods: {
    onActive(index) {
      this.indexActive = this.indexActive === index ? this.indexActive : index
    }
  }
}
</script>
