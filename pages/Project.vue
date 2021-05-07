<template>
  <div v-if="project">
    <h1 class="text-3xl font-medium text-black-300 font-mitr">
      {{ project.name }}
    </h1>
    <div class="flex flex-col md:flex-row mt-4">
      <div class="w-full md:w-2/3 py-2 mr-0 md:mr-4">
        <div class="image">
          <img
            class="w-full h-auto rounded-2xl"
            :src="project.image.url"
            :alt="project.image.urlalternativeText"
          />
          <VShareLinks padding="py-3" />
        </div>
      </div>
      <div class="w-full md:w-1/3 p-2 pl-0 md:pl-2">
        <h2
          class="text-black-300 font-medium font-mitr text-xl mb-2 leading-tight border-line"
        >
          Acerca de
        </h2>
        <div class="description my-3 font-roboto font-medium">
          <p v-if="project.url" class="url-project text-black-300 mb-3">
            <i class="icon icon-link"></i>
            <a class="align-text-bottom" :href="project.url" target="_blank"
              >Visitar {{ project.name }}</a
            >
          </p>

          <p class="date-project text-black-300 mb-3">
            <i class="icon icon-calendar"></i>
            <span class="align-text-bottom">
              {{ project.date | transformDate("short") }}
            </span>
          </p>

          <p class="description-project text-black-300 mb-3">
            {{ project.short_description }}
          </p>
        </div>

        <h2
          class="text-black-300 font-medium font-mitr text-xl mb-2 leading-tight border-line"
        >
          Tecnologías
        </h2>
        <VTag
          v-for="technology in project.technologies"
          :key="technology.id"
          :name="technology.name"
          other-class="bg-yellow-300 border-yellow-300 mb-2 mr-2"
        />
        <div class="my-3">
          <VButton
            v-if="project.gallery.length"
            text="Ver galeria"
            :has-icon="true"
            icon="send-1"
            type="action"
            :flex="true"
            @action="showGalery"
          />
        </div>
      </div>
    </div>

    <h2
      class="text-black-300 font-medium font-mitr text-xl my-4 leading-tight border-line"
    >
      Sobre el proyecto
    </h2>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="text-blakc-300 text-lg font-light font-roboto"
      v-html="$md.render(project.description)"
    ></div>

    <h2
      class="text-black-300 font-medium font-mitr text-xl my-4 leading-tight border-line"
    >
      Que hice
    </h2>

    <div
      class="text-blakc-300 text-lg font-light font-roboto"
      v-html="$md.render(project.contributions)"
    ></div>

    <VGallery
      v-if="showGallery"
      :title="project.name"
      :images="project.gallery"
      @close="close"
    />

    <VLoader v-if="showLoader" />
  </div>
</template>

<script>
import siteMeta from "@/utils/siteMeta"
export default {
  name: "Project",
  data() {
    return {
      project: "",
      showGallery: false,
      showLoader: false
    }
  },
  head() {
    return {
      title: this.project.name,
      meta: [...this.meta],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.BASE_URL}/portafolio/${this.$route.params.slug}`
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.project.name,
        description: this.project.short_description,
        url: `${process.env.BASE_URL}/portafolio/${this.$route.params.slug}`,
        mainImage: this.project.image?.url
      }
      return siteMeta(metaData)
    }
  },
  created() {
    this.getProject()
  },
  methods: {
    async getProject() {
      try {
        this.showLoader = true
        const { data: project } = await this.$axios.get(
          `/projects?slug=${this.$route.params.slug}`
        )

        this.project = project[0]
        setTimeout(() => (this.showLoader = false), 1000)
      } catch (error) {
        this.showLoader = false
      }
    },
    showGalery() {
      this.showGallery = true
    },
    close() {
      this.showGallery = false
    }
  }
}
</script>
