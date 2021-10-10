<template>
  <div
    class="w-full left-0 top-0 bottom-0 flex justify-center items-center bg-white dark:bg-dark-400 z-60"
    :class="[type === 'full' ? 'h-screen fixed' : 'absolute rounded-20']"
  >
    <div class="loader">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    type: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style lang="scss">
.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 6px solid #fabf2b;
    opacity: 1;
    border-radius: 50%;
    animation: loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
}

@keyframes loader {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
