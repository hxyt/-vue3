<template>
    <div class="part_context">
            <ul>
                <li>
                    <table>
                        <!--显示商品-->
                        <tr v-for="(item, index) in $store.getters.getShop" :key="index">
                            <td class="img">
                                <a href="#">
                                     <img :src=item.src>
                                </a>
                               
                            </td>
                            <td class="msg">
                                <a href="#">
                                   <p>{{item.name}}</p>
                                   <p>{{item.memory}}</p>
                                </a>
                               
                            </td>
                            <td class="price">
                                <p>1699元 × 1</p>
                            </td>
                            <td class="no" @click="clea">
                                <a href="#"><img src="@/assets/no.png"></a>
                            </td>
                        </tr>
                        
    
                    </table>
                </li>    
            </ul>
             <!-- 低端显示-->
            <div class="bottom">
                        <div class="B_img">
                                <a>
                                    <p> 共{{$store.getters.getShop.length}}件商品
                                    <br>
                                    <font style="font-size:24px;color:#ff6700"><em>{{$store.getters.getSumPrice}}</em>&nbsp;元</font></p>
                                </a>
                        </div>
                        <div class="B_count">
                                <a href="#">去购物车结算</a>
                        </div>
            </div>          
    </div>
    <div class="part_display">
        
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
    export default {
        setup () {
        const state = reactive({
            count: 0,
        })
        const store = useStore()
        const clea = ()=>{
            store.commit('delectShop',0)
        }
        return {
            ...toRefs(state),
            clea,
        }
    }
    }
</script>

<style  scoped>
.part_context{
  z-index: 50;
  line-height: 40px;
  width: 100%;
  height: auto;
  background-color: white;
  font:12px/1.5 Helvetica Neue,Helvetica,Arial
}
.part_context ul{
    list-style-type: none;
}
.part_context tr{
   margin-top: 30px;
}
.part_context ul li{
    overflow: auto;
}
.part_context .img img{
    margin-top: 10px;
    width: 60px;
    height: 60px;
}
.part_context .msg{   
    width: 95px;
    height: 40px;
    overflow: hidden;
}
.part_context .msg a{
    text-decoration: none;
}
.part_context .msg a p{
    padding: 0px;
    border: 0px;
}
.msg p{
    width: 95px;
    height: auto;
}
.price{
    width: auto;
    height: auto;
}
.price p{
    padding-left: 20px;
}
.no{
    width: 16px;
    height: 16px;
}
.no img{
     width: 16px;
     height: 16px;
     padding-left: 5px;
}
 /*低端选项*/
.bottom{
    width: 100%;
    height: 62px;
    overflow: hidden;
    background-color: #DCDCDC;
}
.B_img{
    width: 100px;
    height: 40px;
    float: left;
    margin-top: 0px;
    margin-left: 20px;
}
.B_img p{
    margin-left: 12px;
}
.B_count{
    width: 106px;
height: 42px;
float: right;
margin-top: 10px;
margin-right: 30px;
background-color: rgb(220, 119, 18);
}
.B_count a{
    text-decoration: none;
    color: #DCDCDC;
width: 143px;
height: 40px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 14px;
margin-left: 10px;
padding-top: 73px;
position: relative;
top: 27%;
}
</style>