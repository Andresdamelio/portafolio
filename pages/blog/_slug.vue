<template>
  <div v-if="post">
    <VSocialHead
      type="article"
      :title="post.title"
      :description="post.short_description"
      :url="`${$config.url}/blog/${$route.params.slug}`"
      :image="post.image.url"
    />
    <h1 class="text-3xl font-medium text-black-300 font-mitr">
      {{ post.title }}
    </h1>
    <p class="text-gray-700 text-sm font-thin font-roboto mt-3">
      Publicado el {{ post.created_at | transformDate("large") }}
    </p>
    <img
      class="w-full h-auto rounded-2xl mt-6"
      :src="post.image.url"
      :alt="post.image.alternativeText"
    />
    <VShareLinks padding="pt-3 pb-6" />
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="text-black-300 text-lg font-light font-roboto"
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
  async asyncData({ params, $axios }) {
    const { data: post } = await $axios.get(`/posts?slug=${params.slug}`)
    return { post: post[0], showLoader: true }
  },
  head() {
    return {
      title: this.post.title
    }
  },
  created() {
    setTimeout(() => (this.showLoader = false), 1000)
  }
}
</script>
