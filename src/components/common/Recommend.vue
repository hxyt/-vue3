<template>
  <div class="recommend">
    <div class="top">
      <div class="left"></div>
      <div class="content">买购物车中商品的人还买了</div>
      <div class="right"></div>
    </div>
    <div class="goods">
      <div class="details" v-for="(item, index) in recommend" :key="index">
        <div class="picture"><img class="img" :src="item.path" /></div>
        <div class="name">{{ item.name }}</div>
        <div class="price">{{ item.price }}</div>
        <div class="mark">{{ item.mark }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
      recommend: [
        {
          id: 1,
          path: require("@/assets/id1.png"),
          name: "Xiaomi 12S Ultra",
          price: "5999元",
          mark: "2407人好评",
        },
        {
          id: 2,
          path: require("@/assets/id2.png"),
          name: "小米体重秤2",
          price: "69元",
          mark: "51.7万人好评",
        },
        {
          id: 3,
          path: require("@/assets/id3.png"),
          name: "小米小爱音响 Play",
          price: "999元",
          mark: "53万人好评",
        },
        {
          id: 4,
          path: require("@/assets/id4.png"),
          name: "米家电饭煲C1",
          price: "159元",
          mark: "7.8万人好评",
        },
        {
          id: 5,
          path: require("@/assets/id5.png"),
          name: "米家落地扇",
          price: "299元",
          mark: "7.8万人好评",
        },
        {
          id: 6,
          path: require("@/assets/id6.png"),
          name: "小米经典商务双肩包2",
          price: "99元",
          mark: "10.9万人好评",
        },
        {
          id: 7,
          path: require("@/assets/id8.png"),
          name: "小米多看电纸书 Pro",
          price: "1299元",
          mark: "6973万人好评",
        },
        {
          id: 8,
          path: require("@/assets/id9.png"),
          name: "小米中性笔",
          price: "24.9元",
          mark: "21.7万人好评",
        },
        {
          id: 9,
          path: require("@/assets/id7.png"),
          name: "小米米家液晶小黑板",
          price: "49元",
          mark: "69.3万人好评",
        },
        {
          id: 10,
          path: require("@/assets/id10.png"),
          name: "Xiaomi Watch Color 2",
          price: "999元",
          mark: "7.4万人好评",
        },
        {
          id: 11,
          path: require("@/assets/id11.png"),
          name: "Redmi AirDots 3 Pro",
          price: "349元",
          mark: "24.1万人好评",
        },
        {
          id: 12,
          path: require("@/assets/id12.png"),
          name: "Redmi Note 11Pro+",
          price: "1999元",
          mark: "9.3万人好评",
        },
        {
          id: 13,
          path: require("@/assets/id13.png"),
          name: "小米记录仪2 标准版",
          price: "379元",
          mark: "1.9万人好评",
        },
        {
          id: 14,
          path: require("@/assets/id14.png"),
          name: "小米USB分线器",
          price: "49元",
          mark: "5万人好评",
        },
        {
          id: 15,
          path: require("@/assets/id15.png"),
          name: "米家电水壶1A",
          price: "79元",
          mark: "39.7万人好评",
        },
        {
          id: 16,
          path: require("@/assets/id16.png"),
          name: "Redmi 9A",
          price: "599元",
          mark: "116.2万人好评",
        },
        {
          id: 17,
          path: require("@/assets/id17.png"),
          name: "小米路由器Pro",
          price: "499元",
          mark: "19.9万人好评",
        },
        {
          id: 18,
          path: require("@/assets/id18.png"),
          name: "米家负离子速干吹风机 H300",
          price: "149元",
          mark: "26.2万人好评",
        },
        {
          id: 19,
          path: require("@/assets/id19.png"),
          name: "小米极简都市双肩包 2",
          price: "149元",
          mark: "49万人好评",
        },
        {
          id: 20,
          path: require("@/assets/id20.png"),
          name: "Xiaomi MIX 4",
          price: "4199元",
          mark: "21.1万人好评",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style  scoped>
.recommend {
  width: 100%;
  height: 1500px;
  background-color: #f5f5f5;
}
.top {
  width: 100%;
  height: 100px;
}
.left {
  position: absolute;
  width: 450px;
  height: 50px;
  left: 5%;
  border-bottom: 1px solid lightgrey;
}
.right {
  position: absolute;
  width: 450px;
  height: 10px;
  left: 60%;
  border-bottom: 1px solid lightgrey;
}
.content {
  position: relative;
  font-size: 30px;
  top: 25px;
  left: 43%;
  color: dimgray;
}
.goods {
  width: 1240px;
  position: relative;
  height: 1250px;
  display: flex;
  float: left;
  flex-wrap: wrap;
  left: 8%;
}
.details {
  text-align: center;
  margin-top: 0;
  margin-left: 15px;
  width: 233px;
  height: 300px;
  background-color: white;
  font-size: 14px;
}
.img {
  position: relative;
  top: 40px;
  width: 150px;
  height: 150px;
}
.name {
  position: relative;
  top: 50px;
}
.price {
  position: relative;
  top: 60px;
  color: coral;
}
.mark {
  position: relative;
  top: 70px;
  color: darkgray;
}
</style>
