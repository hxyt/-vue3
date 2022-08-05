<template>
    <div class="white">
        <div class="cart">
            <img class="logo" src="@/assets/img/white-navbar/logo-mi2.png"/>
            <div class="cart-content">我的购物车</div>
        </div>
        <div class="login">
            <div class="login-content">
                <div class="a1">登录</div>
                <div class="a2">|</div>
                <div class="a3">注册</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
.logo{
    position: relative;
    width: 50px;
    height: 50px;
    top: 25px;
    left: 17%;
}
.white {
    width: 100%;
    height: 115px;
    border-bottom: 2px solid  #FF6700;
}
.cart-content {
    top: 40px;
    position: absolute;
    left: 23%;
    font-size: 26px;
}
.a1 {
    top: 50px;
    left: 75%;
     position: absolute;
     font-size: 13px;
     color: #969595;
}
.a2 {
    top: 50px;
    left: 78%;
     position: absolute;
     font-size: 13px;
     color: #969595;
}
.a3 {
    top: 50px;
    left: 79%;
     position: absolute;
     font-size: 13px;
     color: #969595;
}
.a1:hover,.a3:hover{
    color: #FF6700;
}
</style>