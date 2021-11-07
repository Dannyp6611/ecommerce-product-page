<template>
  <header
    class="
      relative
      bg-white
      flex
      items-center
      py-4
      px-2
      border-b-2 border-solid border-transparent
      md:border-light-grayish-blue
    "
  >
    <img
      src="@/assets/images/icon-menu.svg"
      @click="showNav"
      alt=""
      class="cursor-pointer md:hidden mr-6"
    />
    <img
      src="@/assets/images/logo.svg"
      alt=""
      class="h-5 w-auto mr-3 md:mr-14"
    />
    <ul class="gap-x-4 text-gray-500 hidden md:flex desktop-nav">
      <li class="hover:text-black cursor-pointer">Collections</li>
      <li class="hover:text-black cursor-pointer">Men</li>
      <li class="hover:text-black cursor-pointer">Womens</li>
      <li class="hover:text-black cursor-pointer">About</li>
      <li class="hover:text-black cursor-pointer">Contact</li>
    </ul>
    <div class="flex-1 justify-end flex gap-x-6 items-center">
      <div
        class="relative w-7 h-7 cursor-pointer flex items-center justify-center"
      >
        <i
          class="fas fa-shopping-cart text-gray-400 text-xl"
          @click="toggleCart"
        ></i>
        <span
          v-if="cartQuantity > 0"
          class="
            text-xs
            flex
            items-center
            justify-center
            absolute
            py-2
            px-3
            w-1
            h-1
            rounded-full
            bg-orange
            text-white
            -top-2
            left-2
          "
          >{{ cartQuantity }}</span
        >
      </div>
      <img
        src="@/assets/images/image-avatar.png"
        class="
          w-12
          h-12
          rounded-full
          cursor-pointer
          border-4 border-transparent
          hover:border-orange
        "
        alt=""
      />
    </div>
    <nav
      v-if="showMobileNav"
      class="bg-black bg-opacity-80 fixed top-0 left-0 z-40 h-full w-full"
    >
      <ul class="bg-white w-3/4 h-full px-4">
        <button
          class="focus:outline-none bg-transparent text-gray-500 text-lg pb-8"
          @click="closeMobileNav"
        >
          <i class="fas fa-times"></i>
        </button>
        <li class="text-lg text-black font-bold pb-4 cursor-pointer">
          Collections
        </li>
        <li class="text-lg text-black font-bold pb-4 cursor-pointer">Men</li>
        <li class="text-lg text-black font-bold pb-4 cursor-pointer">Women</li>
        <li class="text-lg text-black font-bold pb-4 cursor-pointer">About</li>
        <li class="text-lg text-black font-bold pb-4 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
    <Cart v-if="showCart" />
  </header>
</template>
<script>
import store from "../store/index";
import { computed, ref } from "vue";
import Cart from "./Cart.vue";
export default {
  components: { Cart },
  setup() {
    const showCart = ref(false);
    const showMobileNav = ref(false);
    const windowWidth = ref(null);

    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value > 768) {
        showMobileNav.value = false;
        return;
      }
    });

    const toggleCart = () => {
      showCart.value = !showCart.value;
    };

    const closeMobileNav = () => {
      showMobileNav.value = false;
    };

    const showNav = () => {
      showMobileNav.value = true;
    };

    window.addEventListener("resize", () => {
      showCart.value = false;
    });

    const cartQuantity = computed(() => {
      return store.state.cartQuantity;
    });

    return {
      cartQuantity,
      showCart,
      showMobileNav,
      showNav,
      toggleCart,
      closeMobileNav,
    };
  },
};
</script>

<style lang="scss">
.desktop-nav li {
  position: relative;

  &::after {
    position: absolute;
    top: 50px;
    content: "";
    width: 100%;
    height: 4px;
    background-color: hsl(26, 100%, 55%);
    display: none;
  }
}

.desktop-nav li:hover::after {
  display: block;
}
</style>
