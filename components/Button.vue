<template>
  <a
    :href="[canDownload && link ? link : '#']"
    class="inline-flex rounded text-black-300 bg-yellow-300 border-yellow-300 text-base font-medium leading-4 btn-primary"
    :class="[hasExtraClasses ? classes : '']"
    v-bind="[canDownload ? { download: 'curriculum.pdf' } : '']"
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
    hasExtraClasses: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      required: false,
      default: ""
    },
    canDownload: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>
