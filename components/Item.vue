<template>
  <article class="item pb-2 px-6 pt-0 ml-4">
    <h3 class="item-title dark:text-white">
      {{ title }} {{ company ? " - " + company : "" }}
    </h3>
    <template v-if="type === 'education'">
      <p class="item-subtitle dark:text-white">
        {{ site }}
      </p>
      <p class="item-subtitle dark:text-white mt-2 mb-3">
        {{ date }}
      </p>
    </template>
    <template v-else-if="type === 'courses'">
      <p class="item-subtitle dark:text-white">{{ site }} - {{ date }}</p>
      <a
        :href="credential"
        target="_blank"
        rel="noopener"
        class="block mt-1 mb-2 text-sm text-blue-600 dark:text-yellow-300 font-medium"
        >Ver credencial</a
      >
    </template>
    <template v-else>
      <p class="item-subtitle dark:text-white"></p>
      <p class="item-subtitle dark:text-white">
        {{ date }}
      </p>
      <p class="item-subtitle dark:text-white mt-2 mb-3">
        {{ description }}
      </p>
    </template>
  </article>
</template>

<script>
export default {
  name: "Item",
  props: {
    type: {
      type: String,
      default: "education"
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    date: {
      type: String,
      required: true,
      default: ""
    },
    site: {
      type: String,
      required: false,
      default: ""
    },
    description: {
      type: String,
      required: false,
      default: ""
    },
    credential: {
      type: String,
      required: false,
      default: ""
    },
    company: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>
