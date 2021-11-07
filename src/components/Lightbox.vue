<template>
  <div
    @click.self="$emit('close-lightbox')"
    class="
      fixed
      z-20
      w-screen
      h-screen
      top-0
      left-0
      bottom-0
      right-0
      flex
      justify-center
      items-center
      bg-black bg-opacity-80
    "
  >
    <div class="w-1/3 flex flex-col relative">
      <button class="flex w-full justify-end py-4">
        <i
          class="fas fa-times text-white text-2xl hover:text-orange"
          @click="$emit('close-lightbox')"
        ></i>
      </button>
      <img
        class="rounded-lg shadow-md"
        :src="require(`@/assets/images/${currentImage}.jpg`)"
        alt=""
      />
      <div class="hidden md:flex gap-x-4 mt-4">
        <div
          class="
            flex-1
            rounded-lg
            overflow-hidden
            shadow-lg
            border-4 border-transparent
            cursor-pointer
          "
          :class="{ active: index === productImages.indexOf(currentImage) }"
          v-for="(image, index) in thumbnailImages"
          :key="index"
          @click="$emit('change-current-img', index)"
        >
          <img :src="require(`@/assets/images/${image}.jpg`)" alt="" />
        </div>
      </div>
      <button
        class="absolute top-1/2 -left-10 rounded-full w-14 h-14 bg-white"
        @click="$emit('prev-slide')"
      >
        <i class="fas fa-chevron-left text-black text-xl hover:text-orange"></i>
      </button>
      <button
        class="absolute top-1/2 -right-10 rounded-full w-14 h-14 bg-white"
        @click="$emit('next-slide')"
      >
        <i
          class="fas fa-chevron-right text-black text-xl hover:text-orange"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["currentImage", "thumbnailImages", "productImages"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.active {
  border-color: hsl(26, 100%, 55%);
  position: relative;
}
.active::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
