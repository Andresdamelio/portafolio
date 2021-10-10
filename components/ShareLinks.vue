<template>
  <p
    class="share text-black-300 dark:text-white font-medium font-mitr"
    :class="[padding]"
  >
    Compartir en
    <button
      class="inline-block text-lg ml-2 mr-2 text-black-300 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md focus:outline-none"
      aria-label="Compartir en facebook"
      @click="shareFacebook"
    >
      <span class="icon icon-facebook flex"></span>
    </button>
    <button
      class="inline-block text-lg mr-2 text-black-300 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md focus:outline-none"
      aria-label="Compartir en twitter"
      @click="shareTwitter"
    >
      <span class="icon icon-twitter flex"></span>
    </button>
    <button
      class="inline-block text-lg mr-2 text-black-300 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md focus:outline-none"
      aria-label="Compartir en linkedin"
      @click="shareLinkedin"
    >
      <span class="icon icon-linkedin flex"></span>
    </button>
  </p>
</template>

<script>
export default {
  name: "ShareLinks",
  props: {
    padding: {
      type: String,
      required: true,
      default: "py-3"
    }
  },
  computed: {
    urlShare() {
      return encodeURIComponent(window.location.href)
    }
  },
  methods: {
    shareTwitter() {
      window.open(
        `https://twitter.com/share?url=${this.urlShare}&via=andres_damelio`,
        "facebook-share-dialog",
        "width=700,height=400"
      )
      return false
    },
    shareFacebook() {
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
        "_blank, width=700, height=400, resizable=yes, scrollbars=yes"
      )
      return false
    }
  }
}
</script>
