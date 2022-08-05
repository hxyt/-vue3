<template>
    <div class="outBox">
        <div class="showContent" @mouseleave="out">
            <div class="moveShow">
               
                <ul class="showOne">
                    <li  v-for="(item,index) in picture" :key="index" :class="index==currentimgindex?'active':'item'">
                        <img  v-bind:src="item.src"/>
                    </li>
                </ul>
                
                <ul class="showTwo">
                    <li  v-for="(item,index) in picture" :key="index" v-bind:data-index="index" 
                    v-bind:class="index==currentimgindex?'one ':'one two'" @click="goIndex(index)"></li>
                </ul>
                
                <div class="showThreeLeft">
                    <img class="arrowShow" src="@/assets/img/main-a-img-big/1.png" 
                     @click="previous"/>
                </div>
                <div  class="showThreeRight" v-on:click="next">
                    <img class="arrowShow" src="@/assets/img/main-a-img-big/2.png" @click="goNext"/>
                </div>
            </div>
            <div class="fixedLeft">
                    <ul class="shopping-menu">
                        <li v-for="(item,index) in Content" :key="index" @mouseenter="enter(index)">
                            <div class="main-menu">
                                {{ item.name }}
                            </div>
                            <div class="main-arrow">
                                >
                            </div>
                        </li>
                    </ul>
            </div>
            <div class="fixedRight" v-if='isShow' @mouseleave="out">
             <table >
                  <tr v-for="(item,index) in currentPhone" :key="index">
               
                     <td v-for="(tien,indxe) in item" :key="indxe">
                  
                     <img :src= tien.src>
                        <p>{{tien.name}}</p> 
                     </td>
                  </tr>
               </table>	
            </div>
        </div>
    </div>
    
</template>

<script>
import { onMounted, computed, reactive, toRefs } from 'vue'
import { imgShow }  from '@/data/SlidShow.js'
import { showPhone } from '@/data/phoneLeft.js'
export default {
    setup () {
        const state = reactive({
           
            picture: [0],
            phone:[0],
            isShow:false,
             Content: [
                { name: '手机' }, 
                { name: '电视' },
                { name: '笔记本 平板' },
                { name: '出行 穿戴' },
                { name: '耳机 音箱' },
                { name: '家电'},
                { name: '智能 路由器' },
                { name: '电源 配件' },
                { name: '健康 儿童' },
                { name: '生活 背包'}
               
            ], 
            currentPhone:[0],
            time: 0,
            indexShow: 0 , 
})
        const goIndex = (index) => {
            state.indexShow = index;
            state.time = 0;
        }
        const next = () => {
            if (state.indexShow < state.picture.length-1) {
                state.indexShow++;
            } else {
                state.indexShow = 0;
            }
            goIndex(state.indexShow);
        }
        //上一张
        
        const currentimgindex = computed( () => {
            return state.indexShow;
        })   

        onMounted(() => {
         state.picture=imgShow();
            setInterval(() => {
                state.time++;
                if (state.time == 20) {
                    next();
                    state.time = 0;
            }
            }, 200)
            state.phone=showPhone();
        })
        const previous = () => {
            if (state.indexShow == 0) {
                state.indexShow = state.picture.length - 1;
            } else {
                state.indexShow--;
            }
            goIndex(state.indexShow);
            
        } 
        //鼠标的进出
       const enter = (e)=> {
         state.isShow=true;
         state.currentPhone=state.phone[e];
       }
       const out = ()=> {
            state.isShow=false;
       }
        return {
            ...toRefs(state),
            goIndex,
            next,
            previous,
            currentimgindex,
            enter,
            out
        }
    }
}
</script>

<style scoped>

.outBox {
    width: 100%;
    height: 460px;
    background-color: white;
}
.showContent {
    position:relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
}

/**  轮播图显示图层*/
.moveShow{
    position:absolute;
    top: 0;
    right: 0;
    width:100%;
    height: 100%;
}
   .moveShow .showOne {
      margin: 0;
      padding: 0;
      list-style-type: none;
   }
      .item {
         position: absolute;
         width: 100%;
         height: 100%;
         z-index: 1;
         color: white;
         font-size: 50px;
         opacity: 0;
         transform: all .8s;
      }
      .active {
         opacity: 1;
         z-index: 5;
      }
      .moveShow img {
         position:absolute;
         top: 0;
         left: 0;
         width:100%;
         height: 460px;
         padding: 0;
         margin: 0;
         border: 0;
      }
   /**小圆点 */
   .moveShow .showTwo{
      padding-left: 0;
      list-style: none;
      position: absolute;
      right: 20px;
      bottom: 20px;
      z-index: 10;
   }
      .one{
         width: 10px;
         height: 10px;
         background-color: rgba(0,0,0,0.4);
         border-radius: 50%;
         float: left;
         margin-right: 16px;
         border-style: solid;
         border-width: 2px;
         border-color: rgba(255,255,255, 0.6);
         cursor: pointer;
      }

      .two{
         background-color: rgba(255,255,255,0.4);
      }
   .moveShow .showThreeLeft{
      position: absolute;
      left: 240px;
      top: 220px;
      width: 41px;
      height:69px;
      color:#AAA;
      font-weight: 800;
      z-index: 10;
   }
   .moveShow .showThreeLeft:hover {
         background-color: #AAA;
   }
   .moveShow .showThreeRight{
      position: absolute;
      right: 0px;
      top: 220px;
      width: 41px;
      height:69px;
      color:#AAA;
      font-weight: 800;
      z-index: 10;
   }
   .moveShow .showThreeRight:hover {
      background-color: #AAA;
   }


img.arrowShow{
    position: absolute;
    width: 41px;
    height:69px;
    cursor: pointer;
}

/**菜单栏区域 */
.fixedLeft {
    position: absolute;
    top: 0;
    left :0;
    margin-left: 0;
    width: 240px;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 10;
}
.shopping-menu {
    position: absolute;
    top: 15px;
    left: 0;
    padding-left: 0;
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.shopping-menu li{
    width: 100%;
    height: 43px;
}
.main-menu{
    float: left;
    width: 180px;
    height: 100%;
    font-size: 15px;
    color:white;
    padding-left :30px;
    line-height: 43px;
}
.main-arrow{
    float: left;
    margin: 0px;
    padding: 0px;
    width: 30px;
    height: 100%;
    color:white;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    line-height: 43px;
}
.shopping-menu li:hover{
	background-color: #FF5500;
}
/**菜单栏显示区域 */
.fixedRight {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 240px;
    width: auto;
    background-color: white;
    height: 100%;
}

.fixedRight td{
   width:276px;
   height: 76px;
   overflow: hidden;
}
.fixedRight img{
   float: left;
   width: 40px;
   height: 40px;
}
.fixedRight p{
   float: left;
   width: 172px;
   margin-left: 20px;
   top: 10px;
   height: 40px;
   font-size: 14px;
}

</style>