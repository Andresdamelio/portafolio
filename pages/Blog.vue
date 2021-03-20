<template>
  <div>
    <h1 class="text-3xl border-line font-medium text-black-300 font-mitr">
      Blog
    </h1>
    <section class="posts flex flex-wrap flex-col md:flex-row mt-8">
      <div
        class="categories w-full flex px-0 overflow-x-scroll md:overflow-hidden md:px-3 py-4"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          :class="[
            indexActive === category.id
              ? 'bg-yellow-300'
              : 'hover:bg-yellow-100'
          ]"
          class="inline-flex text-base leading-4 btn-primary rounded-full font-roboto font-medium tracking-wide mr-2 cursor-pointer text-violet-300 border-yellow-300"
          @click="onActive(category.id)"
        >
          {{ category.name }}
        </div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in Array(6)"
          :key="index"
          class="card w-full md:w-1/3 py-2 px-0 md:px-3"
        >
          <router-link
            to="/blog/how-to-make-a-wordPress-plugin-extensible"
            class="block bg-azure-100 mb-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden"
          >
            <img
              class="w-full object-cover"
              src="~/assets/images/blog/post-1.jpg"
              alt="Image blog"
            />
            <div class="card-body px-3 py-2">
              <span
                class="inline-block mb-2 px-2 py-1 leading-none bg-yellow-300 text-black-300 border-yellow-300 border rounded-full font-roboto font-medium tracking-wide text-xs uppercase"
                >Javascript</span
              >
              <div class="card-title mb-3 truncate-2">
                How to Make a WordPress Plugin Extensible
              </div>
              <div
                class="flex justify-between text-gray-700 text-sm font-thin font-roboto mt-2 pt-3 border-gray-400 border-t"
              >
                <div class="card-date">
                  <span class="icon icon-calendar mr-1"></span>
                  04 Dec 2019
                </div>
                <div class="card-commentary">
                  <span class="icon icon-commentary align-text-top mr-1"></span>
                  10
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog",
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
