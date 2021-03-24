<template>
  <div class="card w-full md:w-1/3 py-2 px-0 md:px-3">
    <router-link
      to="/blog/how-to-make-a-wordPress-plugin-extensible"
      class="block bg-azure-100 mb-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden"
    >
      <img
        class="w-full object-cover"
        :src="article.image.url"
        :alt="article.image.alternativeText"
      />
      <div class="card-body px-3 py-2">
        <span
          class="inline-block mb-2 px-2 py-1 leading-none bg-yellow-300 text-black-300 border-yellow-300 border rounded-full font-roboto font-medium tracking-wide text-xs uppercase"
          >{{ article.category.name }}</span
        >
        <div class="card-title mb-3 truncate-2">
          {{ article.title }}
        </div>
        <div
          class="flex justify-between text-gray-700 text-sm font-thin font-roboto mt-2 pt-3 border-gray-400 border-t"
        >
          <div class="card-date">
            <span class="icon icon-calendar mr-1"></span>
            {{ transformDate(article.created_at) }}
          </div>
          <div class="card-commentary">
            <span class="icon icon-commentary align-text-top mr-1"></span>
            10
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    transformDate(date) {
      date = new Date(date)
      const options = { year: "numeric", month: "short", day: "numeric" }

      return new Intl.DateTimeFormat("ve-VE", options).format(date)
    }
  }
}
</script>
