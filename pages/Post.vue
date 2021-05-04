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

    <p class="share pt-3 pb-6 text-black-300 font-medium font-mitr">
      Compartir en
      <button
        class="inline-block text-lg ml-2 mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md focus:outline-none"
        @click="shareFacebookPost"
      >
        <span class="icon icon-facebook flex"></span>
      </button>
      <button
        class="inline-block text-lg mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md focus:outline-none"
        @click="tweetPost"
      >
        <span class="icon icon-twitter flex"></span>
      </button>
      <button
        class="inline-block text-lg mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md focus:outline-none"
        @click="shareLinkedin"
      >
        <span class="icon icon-linkedin flex"></span>
      </button>
    </p>
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
          href: `${process.env.BASE_URL}/blog/${this.$route.params.slug}`
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
        url: `${process.env.BASE_URL}/blog/${this.$route.params.slug}`,
        mainImage: this.post.image?.url
      }
      return siteMeta(metaData)
    },
    urlShare() {
      return encodeURIComponent(window.location.href)
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
    },
    tweetPost() {
      window.open(
        `https://twitter.com/share?url=${this.urlShare}&via=andres_damelio`,
        "facebook-share-dialog",
        "width=700,height=400"
      )
      return false
    },
    shareFacebookPost() {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + this.urlShare,
        "facebook-share-dialog",
        "width=700,height=400"
      )
      return false
    },
    shareLinkedin() {
      window.open(
        "http://www.linkedin.com/shareArticle?mini=true&url=" +
          this.urlShare +
          "&title=HolaTitulo",
        "",
        "_blank, width=500, height=500, resizable=yes, scrollbars=yes"
      )
      return false
    }
  }
}
</script>
