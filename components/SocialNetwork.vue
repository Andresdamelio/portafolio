<template>
  <a
    :href="social.url"
    :aria-label="social.name"
    target="_blank"
    class="social-networks__link inline-block text-xl mr-1"
    rel="noopener"
  >
    <span :class="`flex icon icon-${social.icon}`"></span>
  </a>
</template>

<script>
export default {
  name: "SocialNewtwork",
  props: {
    social: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.social-networks__link {
  color: #fabf2b;
  padding: 7px;
  border-radius: 50%;
  border: 0.8px solid transparent;
  transition: background 0.2s ease-in, color 0.2s ease-in;
  &:hover {
    color: #4a575d;
    background: #fff7af;
    border: 0.8px solid #fabf2b;
    box-shadow: 1px 2px 3px rgba(49, 50, 56, 0.3);
  }
}
</style>
