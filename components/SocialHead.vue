<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "website"
    },
    url: {
      type: String,
      default: "https://andresdamelio.tech"
    },
    title: {
      type: String,
      default: "Andrés D'Amelio | Frontend Developer"
    },
    description: {
      type: String,
      default:
        "Andres D'Amelio, ingeniero en informática, desarrollador web frontend, estudiante de platzi, autodidacta, escribo aplicaciones web usando los frameworks de javascript vue y react."
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dbo1xysmj/image/upload/v1620008296/opengraph_50d38bd52b.png"
    }
  },

  head() {
    return {
      meta: [
        {
          hid: "og:type",
          property: "og:type",
          content: this.type
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.url
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.title
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: this.url
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title
        }
      ]
    }
  }
}
</script>
