<template>
    <div class="oneTop">
        <div class="flex">
            <div class="left">
                <img src="@/assets/img/loT/t01.jpg">
                <p>小米IoT开发者平台</p>
            </div>
            <div class="middle"> </div>
            <div class="right">
                <ul>
                    <li v-for="(item,index) in current" :key="index"> 
                        <p v-if="index!=3">{{current[index]}}</p>  
                        <img class="img" v-if="index==3" :src=current[index]>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {  onMounted, reactive, toRefs,} from 'vue'
import { useStore } from 'vuex'
export default {
    
    setup () {
        const state = reactive({
            count: 0,
            before:[
            
                '文档中心',
                'Xiaomi Vela',
                '登陆 注册'
            ],
            after:[
                 '文档中心',
                'Xiaomi Vela',
                '控制台',
                require("@/assets/img/loT/user.png")
            ],
            current:[
                
            ]
        })
         const store = useStore()
       
        onMounted(()=>{
            let dec=store.getters.isShow;
            if(dec){
                state.current=state.after;
            }else if(!dec){
                state.current=state.before;
            }
            
        })
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style  scoped>
.oneTop{
    margin:0;
    padding:0;
    margin-top: 0px;
    width: 100%;
    height: 30px;
    /** background-color: coral; */
   
    overflow: hidden;
}
.flex{
    z-index: 100;
    position: fixed;
    top: -12px;
    margin-left: -31px;
}
.left{
    float: left;
    padding-top: 0px;
    margin-top: 0px;
    width: 180px;
    height: 66px;
    background-color: white;

    margin-left: 30px;
    overflow: hidden;
}
.left img{
    float: left;
    width: 26px;
    height: 33px;
    margin-top: 20px;
    margin-left: 10px;
}

.left p{
    font-size: 14px;
    float: left;
    margin-top: 28px;
    padding-left: 11px;
}
/**中间部分 */
.middle{
    width: 768px;
    height: 66px;
    float: left;
    background-color: white;
    
}
/**右边部分 */
.right{
    float: left;
    position: relative;
    width: 298px;
    height: 66px;
    background-color: white;
    
}
.right ul{
    list-style: none;
}
.right ul li{
    margin-top: -5px;
    padding-top: 0px;
    float: left;
    margin-right: 10px;
    
}
.right ul li:hover{
    border-top: 3px solid aqua;
    color: aqua;
}
.right ul li p{
    margin-top: 18px;
    font-size: 14px;
}
.right .img{
    margin-top: 40%;
    width: 24px;
    margin-left: 12px;
    height: 24px;
}
</style>