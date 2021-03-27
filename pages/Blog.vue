<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Blog
    </h1>
    <section class="posts flex flex-wrap flex-col md:flex-row mt-8">
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
        ></VCategory>
      </div>
      <div v-if="articles.length" class="flex flex-wrap w-full">
        <VArticle
          v-for="article in filterPost"
          :key="article.id"
          :article="article"
        ></VArticle>
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

    <VLoader v-if="showLoader"></VLoader>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      indexActive: 1,
      categories: [],
      articles: [],
      showLoader: false
    }
  },
  computed: {
    filterPost() {
      return this.indexActive === 1
        ? this.articles
        : this.articles.filter(
            (article) => article.category.id === this.indexActive
          )
    },
    categoriesWithArticles() {
      return true
    }
  },
  created() {
    this.getBlog()
  },
  methods: {
    async getBlog() {
      try {
        this.showLoader = true
        const { data: categories } = await this.$axios.get("/categories")
        const { data: articles } = await this.$axios.get("/posts")

        this.categories = categories
        this.articles = articles

        console.log(this.categories)

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

<style scoped>
.card:hover img {
  transform: scale(1.05);
}

.truncate-2 {
  max-height: 3rem;
  line-height: 1.5rem;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
}

@media (max-width: 768px) {
  .categories::-webkit-scrollbar {
    display: none;
  }
}
</style>
