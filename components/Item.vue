<template>
  <article class="item pb-2 px-6 pt-0 ml-4">
    <h3 class="item-title">{{ title }}</h3>
    <template v-if="type === 'education'">
      <p class="item-subtitle">
        {{ site }}
      </p>
      <p class="item-subtitle mt-2 mb-3">
        {{ date }}
      </p>
    </template>
    <template v-else-if="type === 'courses'">
      <p class="item-subtitle">{{ site }} - {{ date }}</p>
      <a
        :href="credential"
        target="_blank"
        rel="noopener"
        class="block mt-1 mb-2 text-sm text-blue-600 font-medium"
        >Ver credencial</a
      >
    </template>
    <template v-else>
      <p class="item-subtitle">
        {{ date }}
      </p>
      <p class="item-subtitle mt-2 mb-3">
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
    }
  }
}
</script>
