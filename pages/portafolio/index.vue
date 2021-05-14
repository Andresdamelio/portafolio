<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Portafolio
    </h1>
    <section class="flex flex-wrap flex-col md:flex-row mt-8">
      <div
        v-if="categories.length"
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
import siteMeta from "@/utils/siteMeta"
export default {
  name: "Projects",
  data() {
    return {
      indexActive: 1,
      showLoader: false,
      projects: [],
      categories: []
    }
  },
  head() {
    return {
      title: "Andrés D'Amelio | Portafolio",
      meta: [...this.meta]
    }
  },
  computed: {
    filterPost() {
      return this.indexActive === 1
        ? this.projects
        : this.projects.filter(
            (project) => project.category.id === this.indexActive
          )
    },
    meta() {
      const metaData = {
        title: "Andrés D'Amelio | Portafolio",
        url: `${this.$config.url}/portafolio`
      }
      return siteMeta(metaData)
    }
  },
  created() {
    this.getProjects()
  },
  methods: {
    async getProjects() {
      try {
        this.showLoader = true
        const { data: categories } = await this.$axios.get(
          "/categories?activeProjects=true&&_sort=created_at:ASC"
        )
        const { data: projects } = await this.$axios.get("/projects")

        this.projects = projects
        this.categories = categories

        setTimeout(() => (this.showLoader = false), 1000)
      } catch (error) {
        this.showLoader = false
      }
    },
    onActive(index) {
      this.indexActive = this.indexActive === index ? this.indexActive : index
    }
  }
}
</script>
