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
          <p class="share py-3 text-black-300 font-medium font-mitr">
            Compartir en
            <a
              href="#"
              class="inline-block text-lg ml-2 mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md"
            >
              <span class="icon icon-facebook flex"></span>
            </a>
            <a
              href="#"
              class="inline-block text-lg mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md"
            >
              <span class="icon icon-twitter flex"></span>
            </a>
            <a
              href="#"
              class="inline-block text-lg mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md"
            >
              <span class="icon icon-instagram flex"></span>
            </a>
            <a
              href="#"
              class="inline-block text-lg mr-2 bg-yellow-200 hover:bg-yellow-300 border-yellow-300 p-2 rounded-md"
            >
              <span class="icon icon-linkedin flex"></span>
            </a>
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-2 pl-0 md:pl-2">
        <h2
          class="text-black-300 font-medium font-mitr text-xl mb-2 leading-tight border-line"
        >
          Acerca de
        </h2>
        <div class="description my-3 font-roboto font-medium">
          <p class="url-project text-black-300 mb-3">
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
      class="text-black-300 font-medium font-mitr text-xl mb-2 leading-tight border-line"
    >
      Que hice
    </h2>
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
export default {
  name: "Project",
  data() {
    return {
      project: null,
      showGallery: false,
      showLoader: false
    }
  },
  created() {
    console.log(process.env.NODE_ENV)
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
