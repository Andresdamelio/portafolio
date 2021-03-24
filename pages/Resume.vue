<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Resumen
    </h1>
    <section class="education mt-8">
      <h2 class="text-2xl font-medium font-mitr text-black-300 mb-4">
        <span class="icon icon-education text-3xl text-yellow-300 mr-1"></span>
        Educación
      </h2>
      <div class="items">
        <VItem
          v-for="education in educations"
          :key="education.id"
          :title="education.degree"
          :site="education.institute"
          :date="transformDatesToString(education.from, education.to)"
        ></VItem>
      </div>
    </section>
    <section class="work mt-8">
      <h2 class="text-2xl font-medium font-mitr text-black-300 mb-4">
        <span class="icon icon-work text-3xl text-yellow-300 mr-1"></span>
        Experiencia
      </h2>
      <div class="items">
        <VItem
          v-for="experience in experiences"
          :key="experience.id"
          type="work"
          :title="experience.position"
          :date="transformDatesToString(experience.from, experience.to)"
          :description="experience.description"
        ></VItem>
      </div>
    </section>
    <section class="certificates mt-8">
      <h2 class="text-2xl font-medium font-mitr text-black-300 mb-4">
        <span class="icon icon-badge text-3xl text-yellow-300 mr-1"></span>
        Certificados
      </h2>
      <div class="items">
        <VItem
          v-for="course in courses"
          :key="course.id"
          type="courses"
          :title="course.name"
          :site="course.platform"
          :date="transformDate(course.date)"
          :credential="course.credential"
        ></VItem>
      </div>
    </section>

    <VLoader v-if="showLoader"></VLoader>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      educations: null,
      experiences: null,
      courses: null,
      showLoader: false
    }
  },
  created() {
    this.getResume()
  },
  methods: {
    async getResume() {
      try {
        this.showLoader = true
        const { data } = await this.$axios.get("/resume")

        this.educations = data.educations
        this.experiences = data.experiences
        this.courses = data.courses

        setTimeout(() => (this.showLoader = false), 1000)
      } catch (error) {
        this.showLoader = false
        console.log(error)
      }
    },
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
