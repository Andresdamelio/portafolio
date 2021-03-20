<template>
  <div>
    <header
      class="grid grid-cols-1 md:grid-cols-2 bg-white rounded-20 p-8"
      v-if="profile"
    >
      <div
        class="pr-0 flex items-center flex-col relative line__right md:pr-8 md:items-start md:flex-row"
      >
        <v-picture :image="profile.image"></v-picture>
        <div
          class="personal-info ml-0 md:ml-6 mb-4 md:mb-0 text-center md:text-left"
        >
          <h2
            class="text-black-300 text-3xl font-semibold leading-3xl font-mitr"
          >
            {{ profile.name }} {{ profile.lastname }}
          </h2>
          <h3
            class="inline-block text-blakc-300 text-lg font-light font-mitr border-line"
          >
            {{ profile.profession }}
          </h3>
          <div class="social-networks mt-2">
            <v-social-network
              v-for="social in profile.social_medias"
              :key="social.id"
              :social="social"
            >
            </v-social-network>
          </div>
        </div>
      </div>
      <div class="mt-4 pl-0 md:mt-0 md:pl-8">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="mb-2">
            <h2 class="text-black-200 text-lg font-thin font-mitr">
              Email
            </h2>
            <p class="text-black-200 text-base font-thin font-mitr">
              {{ profile.email }}
            </p>
          </div>
          <div class="mb-2">
            <h2 class="text-black-200 text-lg font-thin font-mitr">
              Ubicación
            </h2>
            <p class="text-black-200 text-base font-thin font-mitr">
              {{ profile.location }}
            </p>
          </div>
          <div class="mb-2">
            <h2 class="text-black-200 text-lg font-thin font-mitr">
              Título
            </h2>
            <p class="text-black-200 text-base font-thin font-mitr">
              {{ profile.title }}
            </p>
          </div>
          <div class="mb-2 flex items-center">
            <v-button
              text="Descargar CV"
              :link="transformUrlPdf(profile.curriculum.url)"
              :hasIcon="true"
              icon="download"
              :canDownload="true"
            ></v-button>
          </div>
        </div>
      </div>
    </header>
    <v-loader v-if="false"></v-loader>
  </div>
</template>

<script>
import Picture from "./Picture";
import SocialNetwork from "./SocialNetwork";
import Button from "~/pages/components/Button";
import Loader from "~/pages/components/Loader";

export default {
  name: "main-header",
  components: {
    "v-loader": Loader,
    "v-button": Button,
    "v-picture": Picture,
    "v-social-network": SocialNetwork
  },
  data() {
    return {
      profile: null
    };
  },
  methods: {
    async getPerson() {
      try {
        let { body } = await this.$http.get("profile");
        this.profile = body;

        console.log(this.profile);
        this.$emit("change", this.profile.banner);
      } catch (error) {
        console.log(error);
      }
    },
    transformUrlPdf(url) {
      return url.replace("upload", "upload/fl_attachment");
    }
  },
  created() {
    this.getPerson();
  }
};
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
