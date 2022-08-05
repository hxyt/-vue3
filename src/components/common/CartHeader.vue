<template>
  <div class="list-head clearfix">
    <div class="col col-check"><i class="iconfont icon-checkbox">√</i>全选</div>
    <div class="col col-img">&nbsp;</div>
    <div class="col col-name">商品名称</div>
    <div class="col col-price">单价</div>
    <div class="col col-num">数量</div>
    <div class="col col-total">小计</div>
    <div class="col col-action">操作</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scope>
div {
  display: block;
}
.list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
}
.col-check {
  width: 110px;
}
.col-check .icon-checkbox {
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #e0e0e0;
  margin-left: 24px;
  background-color: #fff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}
.list-head .icon-checkbox {
  margin-right: 15px;
}
.iconfont {
  font-family: iconfont !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.col-img {
  width: 120px;
}
.col {
  float: left;
}
.col-name {
  width: 380px;
}
.col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
}
.col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.col-action {
  width: 80px;
  text-align: center;
}
</style>
