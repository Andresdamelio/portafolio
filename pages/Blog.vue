<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Blog
    </h1>
    <section class="posts flex flex-wrap flex-col md:flex-row mt-8">
      <div
        v-if="categories"
        class="categories w-full flex px-0 overflow-x-scroll md:overflow-hidden md:px-3 py-4"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          :class="[
            indexActive === category.id
              ? 'bg-yellow-300'
              : 'hover:bg-yellow-100'
          ]"
          class="inline-flex text-base leading-4 btn-primary rounded-full font-roboto font-medium tracking-wide mr-2 cursor-pointer text-violet-300 border-yellow-300"
          @click="onActive(category.id)"
        >
          {{ category.name }}
        </div>
      </div>
      <div v-if="articles" class="flex flex-wrap">
        <VArticle
          v-for="article in articles"
          :key="article.id"
          :article="article"
        ></VArticle>
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
      categories: null,
      articles: null,
      showLoader: false
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

        setTimeout(() => (this.showLoader = false), 1000)
      } catch (error) {
        this.showLoader = false
        console.log(error)
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
