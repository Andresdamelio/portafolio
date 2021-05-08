<template>
  <div v-if="post">
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
import siteMeta from "@/utils/siteMeta"
export default {
  name: "Post",
  data() {
    return {
      showLoader: false,
      post: ""
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.post.published_at
        },
        {
          property: "article:modified_time",
          content: this.post.updated_at
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.url}/blog/${this.$route.params.slug}`
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.post.title,
        description: this.post.short_description,
        url: `${this.$config.url}/blog/${this.$route.params.slug}`,
        mainImage: this.post.image?.url
      }
      return siteMeta(metaData)
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
