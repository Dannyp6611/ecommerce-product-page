<template>
  <Lightbox
    v-if="showLightbox"
    @close-lightbox="toggleLightbox"
    :currentImage="currentImage"
    :thumbnailImages="thumbnailImages"
    :productImages="productImages"
    @prev-slide="prevSlide"
    @next-slide="nextSlide"
    @change-current-img="changeCurrentImage"
  />
  <div
    class="
      home
      md:items-center
      mx-auto
      md:container md:px-4
      flex flex-col
      gap-x-12 gap-y-4
      md:flex-row
    "
  >
    <!-- Thumbnail Image -->
    <div class="flex-1 relative">
      <img
        :src="require(`@/assets/images/${currentImage}.jpg`)"
        class="object-cover md:rounded-lg"
        alt=""
      />
      <button
        @click="prevSlide"
        class="
          md:hidden
          absolute
          top-1/3
          left-6
          rounded-full
          w-14
          h-14
          bg-white
        "
      >
        <i class="fas fa-chevron-left text-black text-xl hover:text-orange"></i>
      </button>
      <button
        @click="nextSlide"
        class="
          md:hidden
          absolute
          top-1/3
          right-4
          rounded-full
          w-14
          h-14
          bg-white
        "
      >
        <i
          class="fas fa-chevron-right text-black text-xl hover:text-orange"
        ></i>
      </button>
      <div class="hidden md:flex gap-x-4 mt-4">
        <div
          class="
            flex-1
            rounded-lg
            overflow-hidden
            hover:opacity-60
            cursor-pointer
            border-4 border-transparent
          "
          :class="{
            active: index === productImages.indexOf(currentImage),
          }"
          v-for="(image, index) in thumbnailImages"
          :key="index"
          @click="toggleLightbox(index)"
        >
          <img :src="require(`@/assets/images/${image}.jpg`)" alt="" />
        </div>
      </div>
    </div>

    <!-- Product Info -->
    <div class="flex-1 px-6 flex flex-col gap-y-4 md:justify-center pb-4">
      <h4 class="text-orange uppercase tracking-wide font-bold text-sm">
        sneaker company
      </h4>
      <h2 class="color-back text-4xl w-3/4 font-bold">
        Fall Limited Edition Sneakers
      </h2>
      <p class="leading-6 text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div class="w-full md:w-52 flex flex-wrap gap-x-4 gap-y-4 items-center">
        <span class="font-bold text-3xl text-black">$125.00</span>
        <span class="bg-pale-orange p-1 text-orange font-bold rounded-md">
          50%
        </span>
        <span
          class="
            flex flex-1
            justify-end
            md:justify-start
            line-through
            text-grayish-blue
            font-bold
          "
        >
          $250.00
        </span>
      </div>
      <div class="flex flex-col md:flex-row gap-y-4 gap-x-2">
        <div
          class="
            bg-light-grayish-blue
            flex
            rounded-md
            p-4
            md:w-1/3
            justify-between
            items-center
          "
        >
          <button
            class="text-orange text-3xl font-bold"
            @click="updateCardCount('decrease')"
          >
            -
          </button>
          <span class="font-bold text-black">{{ cartCount }}</span>
          <button
            class="text-orange text-3xl font-bold"
            @click="updateCardCount('increase')"
          >
            +
          </button>
        </div>
        <button
          @click="updateCartQuantity"
          class="
            bg-orange
            flex flex-1
            py-2
            justify-center
            items-center
            rounded-md
            gap-x-2
            shadow-md
            hover:opacity-60 hover:shadow-2xl
          "
        >
          <i class="fas fa-shopping-cart text-white text-xl"></i>
          <span class="text-white font-bold">Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../store/index";
import Lightbox from "../components/Lightbox.vue";
export default {
  name: "Home",
  components: { Lightbox },
  setup() {
    const showLightbox = ref(false);

    const productImages = [
      "image-product-1",
      "image-product-2",
      "image-product-3",
      "image-product-4",
    ];

    const currentImage = ref(productImages[0]);

    const toggleLightbox = (index) => {
      showLightbox.value = !showLightbox.value;
      if (showLightbox.value) {
        currentImage.value = productImages[index];
        console.log(currentImage);
        return;
      }
    };

    const changeCurrentImage = (index) => {
      currentImage.value = productImages[index];
    };

    const prevSlide = () => {
      let currentIndex = productImages.indexOf(currentImage.value);
      if (currentIndex === 0) {
        currentIndex = productImages.length - 1;
        currentImage.value = productImages[currentIndex];
      } else {
        currentIndex--;
        currentImage.value = productImages[currentIndex];
      }
    };

    const nextSlide = () => {
      let currentIndex = productImages.indexOf(currentImage.value);
      if (currentIndex === productImages.length - 1) {
        currentIndex = 0;
        currentImage.value = productImages[currentIndex];
      } else {
        currentIndex++;
        currentImage.value = productImages[currentIndex];
      }
    };

    const thumbnailImages = productImages.map((image) => {
      return image + "-thumbnail";
    });

    const cartCount = ref(0);

    const updateCardCount = (action) => {
      if (action === "decrease" && cartCount.value < 1) {
        return;
      }
      action === "increase" ? cartCount.value++ : cartCount.value--;
    };

    const updateCartQuantity = () => {
      if (cartCount.value > 0) {
        store.methods.updateCart(cartCount.value);
        cartCount.value = 0;
        window.scrollTo(0, 0);
      }
    };

    return {
      cartCount,
      updateCardCount,
      updateCartQuantity,
      thumbnailImages,
      showLightbox,
      toggleLightbox,
      currentImage,
      productImages,
      prevSlide,
      nextSlide,
      changeCurrentImage,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: calc(100vh - 82px);
}
.active {
  border-color: hsl(26, 100%, 55%);
}
</style>
