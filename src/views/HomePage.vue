<template>
    <div>
        <my-header></my-header>
        <white-nav></white-nav>
        <slid-show></slid-show>
        <four-show></four-show>
        <five-img></five-img>
        <five-img></five-img>
        <my-footer></my-footer>
        
    </div>
</template>

<script>
import {  reactive, toRefs } from 'vue'
import MyHeader from '@/components/TopMenu/MyHeader.vue'
import WhiteNav from '@/components/TopMenu/WhiteNav.vue'
import SlidShow from '@/components/index/SlidShow.vue'
import FourShow from '@/components/index/FourShow.vue'
import FiveImg from '@/components/index/FiveImg.vue'
import MyFooter from '@/components/TopMenu/MyFooter.vue'
export default {
  components: { MyHeader, WhiteNav, SlidShow, FourShow, FiveImg, MyFooter },
    setup () {
        const state = reactive({
            count: 0,
             isShow:true,
            countone: [
                require('@/assets/img/index/t01.png'),
                require('@/assets/img/index/t02.png'),
                require('@/assets/img/index/t03.png'),
                require('@/assets/img/index/t04.png'),
                require('@/assets/img/index/t05.png'),
            ],
            current:[
                require('@/assets/img/index/t01.png'),
                require('@/assets/img/index/t02.png'),
                require('@/assets/img/index/t03.png'),
                require('@/assets/img/index/t04.png'),
                require('@/assets/img/index/t05.png'),
            ],
            counttwo:[
                require('@/assets/img/index/m01.png'),
                require('@/assets/img/index/m02.png'),
                require('@/assets/img/index/m03.png'),
                require('@/assets/img/index/m04.png'),
                require('@/assets/img/index/m05.png'),
            ],
        })
        const entryone= (e)=>{
            state. current[e]=state.counttwo[e];
        }
        const entrytow= (e)=>{
            state. current[e]=state.countone[e];
        }
       
        return {
            ...toRefs(state),
            entryone,
            entrytow
        }
    }
}
</script>

<style  scoped>
.mini{
    background-color: white;
    list-style: none;
    bottom: 40px;
    right: 20px;
    margin-left: 0;
    position: fixed;
    padding-left: 0px;
    z-index: 99;
}
.mini img{
    padding: 20px 20px 20px 20px;
   width: 14px;
height: -6px;
}
.pop-content{
    position: absolute;
    right: 0px;
    top: 0;
    padding: 14px;
    background: #fff;
    border: 1px solid #f5f5f5;
}
/**.desc
.show{
    position: fixed;
    z-index: 100;
    bottom: 40px;
    width: 300px;
    right: 88px;
    height: 336px;
    background-color: aquamarine;
}

*/

.show #erwei{
    position: relative;
    right: 0px;
    width: 100px;
    height: 100px;
}
.show .desc{
    position: relative;
    right: -16%;
    font-size: 14px;
    width: 82px;
    height: 42px;
}
.leng{
   position: fixed;
right: 88px;
top: 73px;
width: 93px;
height: 40px;
background-color: aqua;
margin-top: 20px;
}
.leng p{
    font-size: 14px;
    
    padding-left: 14px;
}
.lengtwo{
position: fixed;
right: 87px;
top: 139px;
width: 93px;
height: 40px;
background-color: aqua;
margin-top: 20px;
}
.lengtwo p{
    font-size: 14px;
  
    padding-left: 14px;
}
.lengthree{
    position: fixed;
    right: 88px;
    top: 204px;
    width: 93px;
    height: 40px;
    background-color: aqua;
    margin-top: 20px;
}
.lengthree p{
    font-size: 14px;
  
    padding-left: 14px;
}
.lengfour{
   position: fixed;
    right: 88px;
    top: 267px;
    width: 93px;
    height: 40px;
    background-color: aqua;
    margin-top: 20px
}
.lengfour p{
    font-size: 14px;
  
    padding-left: 14px;
}
</style>