<template>
 <router-view name="home"></router-view>
 <div class="show" id="show">
            <ul  class="mini">
                <li v-for="(item,index) in  current" :key="index" @mouseenter="entryone(index)" @mouseleave="entrytow(index)">
                        <img class="change" :src= current[index]>
                </li>
            </ul>
      

            <div  class="pop-content el" @mouseleave="entrytow(0)">
                <img id="erwei" 
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png">
                <br>
               <p> 扫码领取新</p>
               <p>人百元礼包</p>
            </div>
           
           
            <div class="leng el">
                <p>个人中心</p>
            </div>
            <div class="lengtwo el">
                <p>售后服务</p>
            </div>
            <div class="lengthree el">
                <p>人工服务</p>
            </div>
            <div class="lengfour el">
                <p>购物车</p>
            </div>
          
        
             
         </div>
</template>

<script>
import {  reactive, toRefs } from 'vue'
export default {
  name: 'App',
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
            document.getElementsByClassName('el')[e].style.display = 'block';
            console.log('shan');

        }
        const entrytow= (e)=>{
            state. current[e]=state.countone[e];
            document.getElementsByClassName('el')[e].style.display = 'none';
        }
       
        return {
            ...toRefs(state),
            entryone,
            entrytow
        }
    }
}
</script>

<style>
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
top: 1010px;
left: 1067px;
width: 80px;
height: 160px;
padding: 14px;
background: rgb(230, 221, 221);
border: 1px solid #d4c6c6;
display: none;
}
.pop-content  img{
 width: 81px;
height: 80px;
  left: 320px;
  top: 230px;

}
.desc{
    font-size: 14px;
    width: 82px;
    height: 42px;
}
.leng{
   position: fixed;
right: 88px;
top: 300px;
width: 93px;
height: 40px;
background-color: rgb(227, 239, 239);
margin-top: 20px;
display: none;
}
.leng p{
    font-size: 14px;
    
    padding-left: 14px;
}
.lengtwo{
position: fixed;
right: 87px;
top: 375px;
width: 93px;
height: 40px;
background-color: rgb(222, 238, 238);
margin-top: 4px;
display: none;
}
.lengtwo p{
    font-size: 14px;
  
    padding-left: 14px;
}
.lengthree{
    position: fixed;
    right: 88px;
    top: 434px;
    width: 93px;
    height: 40px;
    background-color: rgb(205, 223, 223);
    display: none;
}
.lengthree p{
    font-size: 14px;
  
    padding-left: 14px;
}
.lengfour{
   position: fixed;
    right: 88px;
    top: 500px;
    width: 93px;
    height: 40px;
    background-color: rgb(203, 218, 218);
    margin-top: -7px;
    display: none;
}
.lengfour p{
    font-size: 14px;
  
    padding-left: 14px;
}
</style>
