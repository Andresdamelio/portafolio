<template>
  <div>
    <VSocialHead title="Andrés D'Amelio | Blog" :url="`${$config.url}/blog`" />
    <h1
      class="text-3xl border-line font-medium text-black-300 dark:text-white font-mitr"
    >
      Blog
    </h1>
    <section class="posts flex flex-wrap flex-col md:flex-row mt-8">
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
        <VArticle
          v-for="article in filterPost"
          :key="article.id"
          :article="article"
        />
      </div>

      <div
        v-if="!filterPost.length"
        class="w-full h-full flex flex-col items-center py-32"
      >
        <img class="w-20" src="~/assets/images/open-box.svg" alt="open box" />
        <p class="font-medium text-black-300 font-mitr mt-3">
          No hay posts con esta categoria
        </p>
      </div>
    </section>

    <VLoader v-if="showLoader" />
  </div>
</template>

<script>
export default {
  name: "Blog",
  async asyncData({ $axios }) {
    const { data: categories } = await $axios.get(
      "/categories?activeBlog=true&&_sort=created_at:ASC"
    )
    const { data: articles } = await $axios.get("/posts")

    return { categories, articles, showLoader: true }
  },
  data() {
    return {
      indexActive: 1
    }
  },
  head() {
    return {
      title: "Andrés D'Amelio | Blog",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.url}/blog`
        }
      ]
    }
  },
  computed: {
    filterPost() {
      return this.indexActive === 1
        ? this.articles
        : this.articles.filter(
            (article) => article.category.id === this.indexActive
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

<style scoped>
@media (max-width: 768px) {
  .categories::-webkit-scrollbar {
    display: none;
  }
}
</style>
