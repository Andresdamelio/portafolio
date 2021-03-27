<template>
  <div
    :class="[index === category.id ? 'bg-yellow-300' : 'hover:bg-yellow-100']"
    class="inline-flex text-base leading-4 btn-primary rounded-full font-roboto font-medium tracking-wide mr-2 cursor-pointer text-violet-300 border-yellow-300"
    @click="$emit('selected')"
  >
    {{ category.name }}
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: Object,
      default: 1
    }
  }
}
</script>
