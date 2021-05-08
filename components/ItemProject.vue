<template>
  <div class="card w-full h-48 md:w-1/3 my-2 px-0 md:px-3 relative">
    <router-link
      :to="`/portafolio/${project.slug}`"
      class="block relative bg-azure-100 mb-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden h-full work"
    >
      <img
        class="w-full h-full"
        :src="project.thumbnail.url"
        :alt="project.thumbnail.alternativeText"
      />
      <div
        class="card-footer w-full absolute bottom-2 p-2 z-10 opacity-0 flex justify-between"
      >
        <h2 class="title text-base font-bold leading-5 text-white">
          {{ project.name }}
        </h2>
        <VTag
          :name="project.category.name"
          other-class="bg-yellow-200 border-yellow-200"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card {
  img {
    transition: transform 0.2s ease-in-out;
  }
  .work::before,
  .work::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &-footer {
    transition: opacity 0.3s ease-in-out;
  }
  .work::before {
    background: rgba(0, 0, 0, 0.6);
  }
  .work::after {
    background-image: url(~/assets/images/rocket.svg);
    margin: 3.5rem auto;
    width: 4rem;
    height: 4rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }

    .work::before,
    .work::after,
    .card-footer {
      opacity: 1;
    }
  }
}
</style>
