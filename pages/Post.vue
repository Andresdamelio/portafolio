<template>
  <div v-if="post">
    <h1 class="text-3xl font-medium text-black-300 font-mitr">
      {{ post.title }}
    </h1>
    <p class="text-gray-700 text-sm font-thin font-roboto mt-3">
      Publicado el {{ post.created_at | transformDate("large") }}
    </p>
    <img
      class="w-full h-auto rounded-2xl my-6"
      :src="post.image.url"
      :alt="post.image.alternativeText"
    />
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="text-blakc-300 text-lg font-light font-roboto"
      v-html="$md.render(post.content)"
    ></div>

    <div class="comments mt-8">
      <Disqus lang="es_ES" />
    </div>

    <VLoader v-if="showLoader" />
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      showLoader: false,
      post: ""
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      try {
        this.showLoader = true
        const { data: post } = await this.$axios.get(
          `/posts?slug=${this.$route.params.slug}`
        )

        this.post = post[0]

        setTimeout(() => (this.showLoader = false), 1000)
      } catch (error) {
        this.showLoader = false
      }
    }
  }
}
</script>
