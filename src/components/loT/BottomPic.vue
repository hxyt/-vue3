<template>
    <div class="bottom">
        <div class="msg">
            
            <div class="picone">
                <h1 class="p">合作方案</h1>
                <img src="@/assets/img/loT/d01.jpg">
                <img src="@/assets/img/loT/d02.jpg"><br>
                <div>
                    <p class="one">直连接入</p>
                    <p class="two">智能硬件通过嵌入小米智能模组或集成SDK的方式连接到小米IoT平台。
                     适合无自有云平台的开发者，或者希望产品上架小米有品的开发者。</p>
                     <a href="#" style="text-decoration:none"> <p class="three">了解更多</p></a>
                </div>
                <div>
                    <p class="one">直连接入</p>
                    <p class="two">智能硬件通过嵌入小米智能模组或集成SDK的方式连接到小米IoT平台。
                    适合无自有云平台的开发者，或者希望产品上架小米有品的开发者。</p>
                   <a href="#" style="text-decoration:none"> <p class="three">了解更多</p></a>
                </div>
             </div>
             <div class="pictwo">
                     <p class="kk">合作流程</p>
                    <ul>
                        <hr class="line">
                        <li v-for="(item,index) in count" :key="index" style="list-style:none">
                            <img :src=count[index]>
                            <p id="aa">成为开发者</p>
                            <p id="bb">注册开发者资质，获得平台使用开发权限</p>
                        </li>
                    </ul>
                    <div class="cc">
                        <a class="button" href="/fe-op/register/enterpriseRegister">申请合作</a>
                    </div>
             </div>
             
             <div class="bottom">
                <div class="bottomUl">
                    <ul class="top-list">
                        <li class="top-title">关于平台</li>
                        <li class="top-link"><a   href="/new/doc/introduction/main.html">平台介绍</a></li>
                        <li class="top-link"><a   href="/new/doc/accesses/direct-access/overview.html">直连接入方案</a></li>
                        <li class="top-link"><a   href="/new/doc/accesses/cloud-access/overview.html">云对云接入方案</a></li>
                        <li class="top-link"><a   href="/new/doc/tools-and-resources/module#模组采购">小米模组采购</a></li>
                        <li class="top-link"><a   href="/new/doc/policy/agreement">服务协议</a></li>
                    </ul>
                    <ul class="top-list">
                        <li class="top-title">友情链接</li><li class="top-link"><a target="_blank" rel="noopener noreferrer" href="https://xiaoai.mi.com">小爱开放平台</a></li>
                        <li class="top-link"><a   href="https://dev.mi.com">小米开放平台</a></li>
                        <li class="top-link"><a   href="https://www.mi.com">小米商城</a></li>
                        <li class="top-link"><a   href="https://youpin.mi.com">小米有品</a></li>
                        <li class="top-link"><a   href="https://cnbj6.cloud.mi.com/#/index?_k=evpg0j">小米生态云</a></li>
                    </ul>
                    <ul class="top-list">
                        <li class="top-title">联系我们</li>
                        <li class="top-link">邮箱：miot-openhome@xiaomi.com</li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <div class="copyright">京ICP证110507号 京ICP备100463444号 京公网安备1101085212535号</div>
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
            count: [
                require('@/assets/img/loT/l01.png'),
                require('@/assets/img/loT/l02.png'),
                require('@/assets/img/loT/l03.png'),
                require('@/assets/img/loT/l04.png'),
                require('@/assets/img/loT/l05.png'),
            ],
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style  scoped>
.bottom{
    width: 100%;
    height: 1840px;
    background-color: thistle;
}
.msg{
    width: 100%;
    height: 100%;
    /**background-color: goldenrod; */
    
}
.msg .p{
    font-size: 35px;
    margin-left: 33%;
}
.picone{
    overflow: hidden;
    margin-left: 12%;
}
.picone img{
    width: 400px;
    height: 180px;
    margin-left: 20px;
}
.picone div{
    margin-left: 2%;
    width: 400px;
    height: 120px;
    float: left;
}

.picone img:hover{
   -webkit-box-shadow: 0 4px 6px 1px rgba(0,0,0,0.3) ;
   box-shadow: 0 4px 6px 1px rgba(0,0,0,0.3) ;
   position: relative;
   top:-3px
}
.picone p{
    margin-left: 0%;
    padding-left: 0%;
    font-size: 12px;
}
.picone .one{
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.picone .three{
    color: #00abb3;
}
/**深色背景 */
.pictwo{
    width: 100%;
    height: 423px;
    background-color: #2a3056;
    padding-top: 95px;
    padding-bottom: 81px;
}
.pictwo .kk{
    color: #fff;
    margin-bottom: 55px;
    font-size: 45px;
    margin-left: 38%;
}
.pictwo ul{
    width: auto;
    height: 224px;
}
.pictwo ul li{
    width: 175px;
    height: 204px;
    float: left;
    margin-left: 32px;
    padding-left: 0%;
    border-left: 0px;
    background-color: #2a3056;
    position: relative;
    z-index: 10;
}
.pictwo ul li img{
    width: 68px;
    height: 68px;
    padding-left: 43px;
    padding-top: 0px;
    position: inherit;
    z-index: 15;
}
.line{
    width: 80%;
    margin-left: 68px;
    position: relative;
    top: 34px;
    z-index: 5;
}
 #aa{
    color: #fff;
    font-size: 18px;
    margin-left: 19%;
} 
 #bb{
    color: #fff;
    font-size: 14px;
    opacity: .5;
    width: 175px;
    text-align: center;
    line-height: 24px;
}
.cc{ 
   background: #00abb3;
    width: 254px;
    height: 61px;
    margin-left: 36%;
    border: none;
    border-radius: 8px;
}
.cc .button{
   position: relative;
    top: 19%;
    font-size: 34px;
    padding-left: 21%;
    text-decoration: none;
    color: white;
}
/**.bottback
.bottback{
    width: 100%;
    height: 873px;
}
*/


/**地段 */
.bottom{
    background-image: url('@/assets/img/loT/background01.jpg');
    width: auto;
    height: 873;
    overflow: hidden;
}
.bottom .bottomUl{
    background: rgb(0,0,0,0.4);
    margin-top: 573px;
    width: 1408px;
    height: 213px;
}
/**ul */
.top-list{
    list-style: none;
    float: left;
    width: 98px;
    height: 178px;
    margin-left: 13%;
    
}
/**ul下第一个 */
.top-title{
    font-size: 15px;
    color: #fff;
    margin-bottom: 23px;
}
.top-link a{
    text-decoration: none;
    color: hsla(0,0%,100%,.4);
    font-size: 14px;
    margin-bottom: 5px;
}
/**地下 */
.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: 13px;
  font-size: 13px;
   background: rgb(0,0,0,0.5);
}
.copyright{
    font-size: 13px;
    color: hsla(0,0%,100%,.4);
} 

</style>