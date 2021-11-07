import { reactive } from "vue";

const state = reactive({
  cartQuantity: 0,
  cartTotal: 0,
});

const methods = {
  updateCart(payload) {
    state.cartQuantity += payload;
  },
  clearCart() {
    state.cartQuantity = 0;
  },
};

export default {
  state,
  methods,
};
