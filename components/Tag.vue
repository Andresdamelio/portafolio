<template>
  <span
    class="inline-block px-2 py-1 leading-none text-black-300 border rounded-full font-roboto font-medium tracking-wide text-xs uppercase"
    :class="[otherClass ? otherClass : '']"
    >{{ name }}</span
  >
</template>

<script>
export default {
  name: "Tag",
  props: {
    name: {
      type: String,
      required: true
    },
    otherClass: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>
