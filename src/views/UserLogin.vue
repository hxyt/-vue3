<template>
  <div id="main">

    <!-- 登陆 -->
    <login class="login"></login>

  </div>
</template>

<script>

//登陆
import login from "@/components/login/LoginPage.vue";

export default {
  components: {
    login,
  },
};
</script>

<style>
body {
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333;
  overflow-x: hidden;
}
.login {
  overflow: hidden;
}
</style>