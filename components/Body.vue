<template>
  <div class="flex flex-col-reverse md:flex-row mb-4 mt-4">
    <VNavBar
      class="w-full md:w-1/7 p-2 bg-white dark:bg-dark-400 rounded-0 md:rounded-20 mr-4"
    />
    <VContent
      class="w-full md:w-6/7 p-7 bg-white dark:bg-dark-400 rounded-20 relative"
    >
      <slot></slot>
    </VContent>
  </div>
</template>

<script>
export default {
  name: "MainBody"
}
</script>
