<template>
  <div
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black-300 bg-opacity-50 z-60"
  >
    <div class="bg-white rounded-lg shadow-lg w-10/12 md:w-1/2">
      <div class="px-4 py-2 flex justify-between items-center">
        <h3 class="font-medium text-lg text-black-300 font-mitr">
          {{ title }}
        </h3>
      </div>
      <div class="gallery">
        <client-only>
          <swiper
            ref="swiperGallery"
            class="swiper gallery-tops"
            :options="swiperOptions"
            @ready="handleSwiperReadied"
          >
            <swiper-slide v-for="image in images" :key="image.id">
              <img
                class="w-full swiper-lazy"
                :data-src="image.url"
                :alt="image.alternativeText"
              />
              <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
            <div
              slot="button-next"
              class="swiper-button-next swiper-button-white"
            ></div>
            <div
              slot="button-prev"
              class="swiper-button-prev swiper-button-white"
            ></div>
          </swiper>
          <swiper
            ref="swiperThumbs"
            class="swiper gallery-thumbs"
            :options="swiperOptionThumbs"
          >
            <swiper-slide v-for="image in images" :key="image.id">
              <img
                class="w-full"
                :src="image.url"
                :alt="image.alternativeText"
              />
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button
          class="bg-yellow-300 px-4 py-1 rounded font-mitr text-black-300 text-base font-medium mr-1 close-modal"
          @click="close"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        lazy: true,
        setWrapperSize: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  methods: {
    close() {
      this.$emit("close")
    },
    handleSwiperReadied() {
      this.$nextTick(() => {
        const swiperGallery = this.$refs.swiperGallery.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper

        swiperGallery.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperGallery
      })
    }
  }
}
</script>

<style lang="scss">
.gallery {
  height: auto;
  background-color: #fff;
}
.swiper {
  &-slide {
    background-size: cover;
    background-position: center;
    position: relative;

    img[data-src] {
      height: 300px;
    }
  }
  &.gallery-tops {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 1rem 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

  &-button-prev,
  &-button-next {
    position: absolute;
    top: 50%;
    width: calc(44px / 44 * 27);
    height: 44px;
    margin-top: calc(-1 * 44px / 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    &.swiper-button-disabled {
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }

    &.swiper-button-white {
      --swiper-navigation-color: #ffffff;
    }

    &.swiper-button-black {
      --swiper-navigation-color: #000000;
    }

    &-button-lock {
      display: none;
    }

    &::after {
      font-family: swiper-icons;
      font-size: 44px;
      text-transform: none !important;
      letter-spacing: 0;
      text-transform: none;
      font-variant: initial;
      line-height: 1;
    }

    &:focus {
      outline: none;
    }
  }

  &-button-prev,
  &-container-rtl &-button-next {
    left: 10px;
    right: auto;

    &::after {
      content: "prev";
    }
  }

  &-button-next,
  &-container-rtl &-button-prev {
    right: 10px;
    left: auto;

    &::after {
      content: "next";
    }
  }

  &-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    z-index: 10;
    animation: swiper-preloader-spin 1s infinite linear;
    box-sizing: border-box;
    border: 4px solid #fabf2b;
    border-radius: 50%;
    border-top-color: transparent;
  }
  @keyframes swiper-preloader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
