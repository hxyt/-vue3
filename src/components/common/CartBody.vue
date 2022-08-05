<template>
  <div class="list-body">
    <div class="list-item" v-for="(item, index) in $store.getters.getShop" :key="index">
      <div class="item-box">
        <div class="item-table">
          <div class="item-row clearfix">
            <div class="col col-check">
              <i
                class="iconfont icon-checkbox icon-checkbox"
                v-if="!item.selected"
                @click="item.selected = !item.selected"
                >√</i
              >
              <i
                class="iconfont icon-checkbox icon-checkbox-selected"
                v-else
                @click="item.selected = !item.selected"
                >√</i
              >
            </div>
            <div class="col col-img">
              <a href="javascript:void(0)"
                ><img
                  data-v-33432b6e=""
                  alt=""
                  :src=item.src
                  width="80"
                  height="80"
              /></a>
            </div>
            <div class="col col-name">
              <div class="tags"></div>
              <h3 class="name">
                <a href="javascript:void(0)">{{ item.name }}</a>
              </h3>
            </div>
            <div class="col col-price">
              {{ item.price }}元
              <p class="pre-info"><!----></p>
            </div>
            <div class="col col-num">
              <div class="change-goods-num clearfix">
                <a
                  href="javascript:void(0)"
                  @click="item.num > 0 ? item.num-- : alert('最少为一件')"
                  ><i class="iconfont">-</i></a
                ><input
                  v-model="item.num"
                  type="text"
                  autocomplete="off"
                  class="goods-num"
                /><a href="javascript:void(0)" @click="item.num++"
                  ><i class="iconfont">+</i></a
                ><!---->
              </div>
            </div>
            <div class="col col-total">
              {{ item.price * num }}元
              <p class="pre-info"><!----></p>
            </div>
            <div class="col col-action" >
              <a href="javascript:void(0);" title="删除" class="del" @click="$store.commit('delectShop',index)"
                ><i class="iconfont">×</i></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
};
</script>
<style scope>
.item-box {
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}

div {
  display: block;
}

.item-table {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
.item-table .item-row {
  display: table-row;
}
.col-check {
  width: 110px;
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
.item-box .col-img {
  width: 80px;
  height: 80px;
  padding-right: 40px;
  overflow: hidden;
}
.item-table .col {
  display: table-cell;
  vertical-align: middle;
}
.change-goods-num {
  width: 148px;
  height: 38px;
  border: 1px solid #e0e0e0;
  text-align: center;
  background-color: #fff;
  position: relative;
  zoom: 1;
}
.change-goods-num a {
  float: left;
  width: 38px;
  height: 38px;
  line-height: 38px;
  color: #757575;
  font-size: 20px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
[class*="iconfont"] {
  font-family: iconfont !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.change-goods-num input {
  float: left;
  width: 72px;
  height: 38px;
  line-height: 38px;
  padding: 0;
  border-width: 0;
  color: #424242;
  font-size: 16px;
  text-align: center;
}
.icon-checkbox-selected {
  color: #fff;
  border-color: #ff6700;
  background-color: #ff6700;
}
</style>
