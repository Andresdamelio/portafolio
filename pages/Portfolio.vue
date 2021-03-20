<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Portafolio
    </h1>
    <section class="posts flex flex-wrap flex-col md:flex-row mt-8">
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in Array(6)"
          :key="index"
          class="card w-full h-48 md:w-1/3 py-2 px-0 md:px-3"
        >
          <router-link
            to="/blog/how-to-make-a-wordPress-plugin-extensible"
            class="block bg-azure-100 mb-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden h-full"
          >
            <img
              class="w-full h-full"
              src="~/assets/images/blog/post-1.jpg"
              alt="Image blog"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      indexActive: 0,
      categories: [
        {
          id: 0,
          name: "Todas"
        },
        {
          id: 1,
          name: "Javascript"
        },
        {
          id: 2,
          name: "Vue"
        },
        {
          id: 3,
          name: "Tips"
        },
        {
          id: 4,
          name: "Proyectos"
        }
      ]
    };
  },
  methods: {
    onActive(index) {
      this.indexActive = this.indexActive === index ? this.indexActive : index;
    }
  }
};
</script>

<style scoped>
.card:hover img {
  transform: scale(1.05);
}

.truncate-2 {
  max-height: 3rem;
  line-height: 1.5rem;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
}

@media (max-width: 768px) {
  .categories::-webkit-scrollbar {
    display: none;
  }
}
</style>
