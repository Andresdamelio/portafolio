<template>
  <div>
    <header
      v-if="profile"
      class="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-dark-400 rounded-20 p-8"
    >
      <div
        class="pr-0 flex items-center flex-col relative line__right md:pr-8 md:items-start md:flex-row"
      >
        <VPicture :image="profile.image" />
        <div
          class="personal-info ml-0 md:ml-6 mb-4 md:mb-0 text-center md:text-left"
        >
          <h2
            class="text-black-300 dark:text-white text-3xl font-semibold leading-3xl font-mitr"
          >
            {{ profile.name }} {{ profile.lastname }}
          </h2>
          <h3
            class="inline-block text-black-300 dark:text-white text-lg font-light font-mitr border-line"
          >
            {{ profile.profession }}
          </h3>
          <div class="social-networks mt-2">
            <VSocialNetwork
              v-for="social in profile.social_medias"
              :key="social.id"
              :social="social"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 pl-0 md:mt-0 md:pl-8">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="mb-2">
            <h2
              class="text-black-200 dark:text-white text-lg font-thin font-mitr"
            >
              Título
            </h2>
            <p
              class="text-black-200 dark:text-white text-base font-thin font-mitr"
            >
              {{ profile.title }}
            </p>
          </div>
          <div class="mb-2">
            <h2
              class="text-black-200 dark:text-white text-lg font-thin font-mitr"
            >
              Ubicación
            </h2>
            <p
              class="text-black-200 dark:text-white text-base font-thin font-mitr"
            >
              {{ profile.location }}
            </p>
          </div>
          <div class="mb-2 flex items-center">
            <VButton
              text="Descargar CV"
              :link="transformUrlPdf(profile.curriculum.url)"
              :has-icon="true"
              icon="download"
            />
          </div>
        </div>
      </div>
    </header>

    <VLoader v-if="showLoader" type="full"></VLoader>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showLoader: false
    }
  },
  methods: {
    transformUrlPdf(url) {
      return url.replace("upload", "upload/fl_attachment")
    }
  }
}
</script>

<style lang="scss">
.line__right::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  height: 100%;
  border-left: 1px solid #d2e5e7;
  @media (max-width: 768px) {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: auto;
    border-left: none;
    border-bottom: 1px solid #d2e5e7;
  }
}

.social-networks {
  margin-left: -7px;
}
</style>
