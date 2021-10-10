<template>
  <div class="card post w-full md:w-1/3 py-2 px-0 md:px-3">
    <nuxt-link
      :to="`/blog/${article.slug}`"
      class="block bg-azure-100 dark:bg-white mb-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden"
    >
      <div class="h-auto md:h-36">
        <img
          class="w-full h-full object-cover"
          :src="article.image.url"
          :alt="article.image.alternativeText"
        />
      </div>
      <div class="card-body px-3 py-2">
        <VTag
          :name="article.category.name"
          other-class="bg-yellow-300 border-yellow-300 mb-2"
        />
        <div
          class="card-title mb-3 truncate-2 text-black-300 font-normal font-roboto text-base"
        >
          {{ article.title }}
        </div>
        <div
          class="flex justify-between text-gray-700 dark:text-black-300 text-sm font-thin font-roboto mt-2 pt-3 border-gray-400 border-t"
        >
          <div class="card-date">
            <span class="icon icon-calendar mr-1"></span>
            {{ article.created_at | transformDate }}
          </div>
          <div class="card-commentary">
            <span class="icon icon-commentary align-text-top mr-1"></span>
            <DisqusCount
              class="align-text-bottom"
              :identifier="`/blog/${article.slug}`"
            />
          </div>
        </div>
      </div>
    </nuxt-link>
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
  }
}
</script>

<style>
.card.post:hover img {
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
</style>
