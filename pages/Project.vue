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
        </div>
      </div>
      <div class="w-full md:w-1/3 p-2">
        <h2
          class="text-black-300 font-medium font-mitr text-xl mb-2 leading-tight border-line"
        >
          Descripción
        </h2>

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

        <h2
          class="text-black-300 font-medium font-mitr text-xl mb-2 leading-tight border-line"
        >
          Galería
        </h2>
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
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      project: null
    }
  },
  created() {
    this.getProject()
  },
  methods: {
    async getProject() {
      try {
        const { data: project } = await this.$axios.get(
          `/projects?slug=${this.$route.params.slug}`
        )

        this.project = project[0]
      } catch (error) {
        console.log(error)
      }
    },
    showGalery() {
      console.log("Abriendo galeria")
    }
  }
}
</script>
