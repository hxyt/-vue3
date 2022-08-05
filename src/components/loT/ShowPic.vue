<template>
    <div class="middle">
        <div class="pic" id="pic">
           <ul id="showImg">
                <li  v-for="(item,index) in menu" :key="index">
                   <img :src=menu[index]>
                   <div class="banner-desc">
                        <p class="one">开放云对云接入方案</p>
                        <p class="two">连接第三方平台的智能硬件也可以接入小爱同学</p>
                        <p class="two">AI时代尽享语音智控</p>
                    
                        <input type="button" class="ant-btn" value="了解更多">
                            
                    </div>
                </li>
            </ul>
        </div>
        <div class="picTwo">
            <ul>
                <li v-for="(item,index) in menutwo" :key="index" @mouseenter="moveup($event)"
                 @mouseleave="movedown($event)">
                    <img :src=menutwo[index]>
                </li>
            </ul>
        </div>
        <div class="picLan">
            <p class="one">关于平台</p>
            <p class="two">小米IoT开发者平台面向智能家居、智能家电、健康可穿戴、出行车载等领域，开放智能硬件接入、智能硬件控制、</p>
            <p class="three">自动化场景、AI技术、新零售渠道等小米特色优质资源，与合作伙伴一起打造极致的物联网体验。</p>
        </div>
    </div> 
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
export default {
    setup () {
        const state = reactive({
            
            menu:[
                require('@/assets/img/loT/t01.png'),
                require('@/assets/img/loT/t02.jpg'),
                require('@/assets/img/loT/t03.jpg'),
            ],
            menutwo:[
                 require('@/assets/img/loT/m01.png'),
                 require('@/assets/img/loT/m02.png'),
                 require('@/assets/img/loT/m03.png'),
                 require('@/assets/img/loT/m04.png')
            ],
        })
        onMounted(()=>{
            var father= document.getElementById('showImg');
            var stept=0;
            var i=0;
         setInterval(()=>{
                 father.style.left=stept+'px'
                 stept=stept-1265;
                i++; 
               if(i===state.menu.length){
                i=0;
                stept=0
               }
           },1800)
        })
        const moveup=(e)=>{
            let ent=e.currentTarget;
           ent.style.top=-3+'px';
        }
         const movedown=(e)=>{
            let ent=e.currentTarget;
           ent.style.top=0+'px';
        }
        return {
            ...toRefs(state),
            moveup,
            movedown,
        }
    }
}
</script>

<style  scoped>
.middle{
   width: auto;
   height: auto;
}
.pic{
    width: 1265px;
    height: 388px;
    overflow: hidden;
    /** background-color: aquamarine; */
   
}
.pic ul{
    position: relative;
    left: 0px;
    padding-left: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-right: 0px;
    width: 600%;
    height: 368px;
    /** background-color: coral;*/
    
    list-style: none;
}
.pic li{
    width: auto;
    height: auto;
    float: left;
}
.pic img{
    width: 1265px;
    height: 368px;
}
.picTwo{
    width:100%;
    height: 150px;
    margin-top: 51px;
    /** background-color: violet; */
   
}
.picTwo ul{
    margin-left: 41px;
    list-style: none;
}
.picTwo li{
    position: relative;
    float: left;
    margin-left: 12px;
}
.picTwo img{
    width: 255px;
    height: 150px;
}
.picLan{
    width: 100%;
    height: auto
}
.picLan .one{
    position: relative;
    left: 40%;
    font-size: 35px
}
.picLan .two{
margin-left: 15%;
}
.picLan .three{
    margin-left: 19%;
}
/**浮萍 */

.banner-desc {
  position: absolute;
  z-index: 90;
  left: 19%;
  bottom: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}
.banner-desc .one{
    font-size: 35px;
    color: #fff;
    margin-bottom: 10px;
    padding: 0%;
}


.banner-desc .two{
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 0%;
  color: #999;
}
.ant-btn{
    margin-top: 20px;
  width: 120px;
  height: 39px;
  z-index: 50;
  padding-top: 10px;
  padding-bottom: 25px;
  background-color: aquamarine;
  border: 0;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0,0,0,.12);
}

</style>