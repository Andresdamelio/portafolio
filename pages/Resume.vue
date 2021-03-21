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
          title="Ingeniería informática"
          site="Universidad centroccidental Lisandro Alvarado"
          date="2014 - 2020"
        ></VItem>
        <VItem
          title="Ingeniería informática"
          site="Universidad centroccidental Lisandro Alvarado"
          date="2014 - 2020"
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
          type="work"
          title="Freelancer"
          date="2019 - actualidad"
          description="Programador Fullstack, desarollo de aplicaciones empresariales."
        ></VItem>
        <VItem
          type="work"
          title="Analista programador - ISA Systems Group"
          date="2019 - actualidad"
          description="Programador Fullstack, desarollo de aplicaciones empresariales."
        ></VItem>
        <VItem
          type="work"
          title="Freelancer"
          date="2019 - actualidad"
          description="Programador Fullstack, desarollo de aplicaciones empresariales."
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
          type="education"
          title="Scrum Foundation Professional Certificate"
          site="CertiProf"
          date="2020 - 2022"
        ></VItem>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Resume"
}
</script>
