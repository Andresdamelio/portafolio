<template>
  <button
    v-if="type === 'action'"
    class="inline-flex rounded text-black-300 bg-yellow-300 border-yellow-300 text-base font-medium leading-4 btn-primary justify-center"
    :class="[!flex ? 'w-full md:w-1/3' : '']"
    @click="action"
  >
    <span v-if="hasIcon" :class="[`icon icon-${icon} mr-1`]"></span>
    {{ text }}
  </button>
  <a
    v-else
    :href="link"
    class="inline-flex rounded text-black-300 bg-yellow-300 border-yellow-300 text-base font-medium leading-4 btn-primary"
    download="curriculum.pdf"
  >
    <span v-if="hasIcon" :class="[`icon icon-${icon} mr-1`]"></span>
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    text: {
      type: String,
      required: true
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    link: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: ""
    },
    flex: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    action() {
      this.$emit("action")
    }
  }
}
</script>
