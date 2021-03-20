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
  name: "item",
  props: {
    type: {
      type: String,
      default: "education"
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    site: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  }
};
</script>
