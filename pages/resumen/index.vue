<template>
  <div>
    <VSocialHead
      title="Andrés D'Amelio | Resumen"
      :url="`${$config.url}/resumen`"
    />
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Resumen
    </h1>
    <section class="education mt-8">
      <h2 class="text-2xl font-medium font-mitr text-black-300 mb-4">
        <span class="icon icon-education text-3xl text-yellow-300 mr-1"></span>
        Educación
      </h2>
      <div v-if="educations" class="items">
        <VItem
          v-for="education in educations"
          :key="education.id"
          :title="education.degree"
          :site="education.institute"
          :date="transformDatesToString(education.from, education.to)"
        />
      </div>
    </section>
    <section class="work mt-8">
      <h2 class="text-2xl font-medium font-mitr text-black-300 mb-4">
        <span class="icon icon-work text-3xl text-yellow-300 mr-1"></span>
        Experiencia
      </h2>
      <div v-if="experiences" class="items">
        <VItem
          v-for="experience in experiences"
          :key="experience.id"
          type="work"
          :title="experience.position"
          :date="transformDatesToString(experience.from, experience.to)"
          :description="experience.description"
        />
      </div>
    </section>
    <section class="certificates mt-8">
      <h2 class="text-2xl font-medium font-mitr text-black-300 mb-4">
        <span class="icon icon-badge text-3xl text-yellow-300 mr-1"></span>
        Certificados
      </h2>
      <div v-if="courses" class="items">
        <VItem
          v-for="course in courses"
          :key="course.id"
          type="courses"
          :title="course.name"
          :site="course.platform"
          :date="transformDate(course.date)"
          :credential="course.credential"
        />
      </div>
    </section>

    <VLoader v-if="showLoader" />
  </div>
</template>

<script>
export default {
  name: "Resume",
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/resume")
    return {
      educations: data.educations,
      experiences: data.experiences,
      courses: data.courses,
      showLoader: true
    }
  },
  head() {
    return {
      title: "Andrés D'Amelio | Resumen",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.url}/resumen`
        }
      ]
    }
  },
  created() {
    setTimeout(() => (this.showLoader = false), 1000)
  },
  methods: {
    transformDatesToString(from, to) {
      from = this.transformDate(from)
      to = to ? this.transformDate(to) : "actualidad"

      return `${from} - ${to}`
    },
    transformDate(date) {
      date = new Date(date)
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset())

      const options = { year: "numeric", month: "long" }

      return new Intl.DateTimeFormat("ve-VE", options).format(date)
    }
  }
}
</script>
