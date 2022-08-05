<template>
  <div class="cart">
    <CartHeader v-if="$store.getters.getShop.length!=0"/>
    <CartBody v-if="$store.getters.getShop.length!=0"/>
    <CartBottom v-if="$store.getters.getShop.length!=0"/>
    <empty-cart  v-if="$store.getters.getShop.length==0"></empty-cart>
  </div>
</template>

<script>
import CartHeader from "@/components/common/CartHeader.vue";
import CartBody from "@/components/common/CartBody.vue";
import CartBottom from "@/components/common/CartBottom.vue";
import EmptyCart from './EmptyCart.vue';

export default {
  data() {
    return {};
  },
  components: {
    CartHeader,
    CartBody,
    CartBottom,
    EmptyCart,
  },
};
</script>

<style  scoped>
.cart {
  width: 100%;
  height: 500px;
  background-color: rgb(244, 244, 244);
}
</style>
