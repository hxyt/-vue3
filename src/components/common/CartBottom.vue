<template>
  <div class="cart-bar clearfix">
    <div class="section-left">
      <a href="#" class="back-shopping">继续购物</a
      ><span class="cart-total">
        已选择<i>{{ $store.getters.getSelected }}</i> 件</span
      >
    </div>
    <!----><span class="total-price"
      >合计：<em>{{ $store.getters.getSumPrice }}</em
      >元<a href="javascript:void(0);" class="btn btn-a btn-disabled">去结算</a></span
    >
    <div class="no-select-tip" v-if="$store.getSelected == 0">
      请勾选需要结算的商品<i class="arrow arrow-a"></i><i class="arrow arrow-b"></i>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scope>
.cart-bar {
  height: 50px;
  text-align: right;
  background-color: #fff;
  transition: background 0.3s ease, top 0.3s ease;
  position: relative;
}
div {
  display: block;
}
.clearfix:after {
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}
.cart-bar .section-left {
  float: left;
}
.cart-bar .back-shopping {
  line-height: 50px;
  margin-left: 32px;
}
.cart-bar a {
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
a {
  color: #757575;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
}
.cart-total {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  color: #757575;
}
.cart-bar i {
  font-style: normal;
}
.total-price {
  padding-left: 13px;
  color: #ff6700;
}
.total-price em {
  font-style: normal;
  font-size: 30px;
}
.btn {
  width: 200px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  margin-left: 50px;
  vertical-align: top;
}
a {
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.btn-disabled {
  background: #e0e0e0 !important;
  border-color: #e0e0e0 !important;
  color: #b0b0b0 !important;
  cursor: default !important;
}
.btn[data-v-33432b6e] {
  display: inline-block;
  padding: 0;
  margin: 0;
  border: 1px solid #b0b0b0;
  text-align: center;
}
</style>
