<template>
  <div v-if="post">
    <h1 class="text-3xl font-medium text-black-300 font-mitr">
      {{ post.title }}
    </h1>
    <p class="text-gray-700 text-sm font-thin font-roboto mt-3">
      Publicado el {{ post.created_at | transformDate("large") }}
    </p>
    <img
      class="w-full h-auto rounded-2xl mt-4"
      :src="post.image.url"
      alt="image.url"
    />
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: ""
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      try {
        const { data: post } = await this.$axios.get(
          `/posts?slug=${this.$route.params.slug}`
        )

        this.post = post[0]
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
