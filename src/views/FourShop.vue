<!-- @format -->

<template>
  <div>
    <myheader></myheader>
    <cartList></cartList>
    <recommend></recommend>
    <myfooter></myfooter>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import myheader from "@/components/common/MyHeader.vue";
import cartList from "@/components/common/CartList.vue";
import myfooter from "@/components/common/MyFooter.vue";
import recommend from "@/components/common/Recommend.vue";

export default {
  components: {
    myheader,
    cartList,
    recommend,
    myfooter,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
