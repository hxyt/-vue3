<template>
    <div class="emptycart">
        <div class="left">
            <img class="cart" src="@/assets/cart.jpg" />
        </div>
        <div class="right">
            <div class="content-1">
                您的购物车还是空的
            </div>
            <div class="content-2">
                登陆后将显示您之前加入的商品
            </div>
            <div class="box-1">
                <div class="content-3">
                立即登录
            </div>
            </div>
            <div class="box-2">
                <div class="content-4">
                马上去购物
            </div>
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

<style  scoped>
.emptycart {
    width: 100%;
    height: 500px;
    background-color: rgb(244, 244, 244);
}
.cart {
     position: relative;
    width: 300px;
    height: 220px;
    top: 120px;
    left:22%;
}
.right {
    left: 45%;
    position: relative;
    top: -60px;
}
.content-1 {
    position: relative;
    font-size: 30px;
    color: rgb(181, 181, 181);
    font-weight: 600;   
}
.content-2 {
    position: relative;
    color:rgb(196, 194, 194);
    font-size: 17px;
    top: 8px;
    font-weight: 300;
}
.content-3 {
    position: relative;
    top: 15px;
    font-size: 14px;
    left: 50px;
}
.content-4 {
    position: relative;
    top: 15px;
    font-size: 14px;
    left: 45px;
}

.box-1 {
    position:relative;
    top: 30px;
    width: 160px;
    height: 51px;
    background-color: #FF6700;
    color: white; 
}
.box-2 {
    position: relative;
    top: -20px;
    width: 160px;
    height: 50px;
    left: 170px;
    border-bottom: 1px solid  #FF6700;
    border-left: 1px solid  #FF6700;
    border-right: 1px solid  #FF6700;
    border-top: 1px solid  #FF6700;
    color: #FF6700;
}
</style>