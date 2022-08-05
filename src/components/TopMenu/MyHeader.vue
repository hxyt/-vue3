<template>
    <div class="Top">
        <div class="top-menu">
            <div class="top-left">
                <ul class="top-content">
                    <li v-for= "(item,index) in topleft" :key= "index" >
                       <router-link :to=item.path><a href="" >{{ item.name }}</a></router-link> 
                    </li>
                </ul>
            </div>
            <div class="top-middle" v-if="!isshow">
                <ul class="top-content">
                    <li><router-link to='/login'>登录</router-link></li>
                    <li><router-link to="/login">注册</router-link></li>
                    <li>消息通知</li>
                </ul>
            </div>
            <div class="top-middle" v-else-if="isshow">
                <ul class="top-content">
                    <li id="userok" @mouseenter="menuenter">你好，{{user.name}}</li>
                    <li @click="logout()">消息通知</li>
                    <li>我的订单</li>
                </ul>
            </div>
            <div class="top-right"  @click="other">
                <div @mouseenter="enter()" id="shopback" :class="{'shop':true,'shop-no':isshow,'shop-hav':!isshow}">
                    <!-- 购物车图片 -->
                    <div class="shop_img"></div>
                    &nbsp;
                    <p>购物车&nbsp;({{count}})</p>
                </div>
            </div>
        </div>
       
            <ul @mouseleave=" menuleave" class="user-menu" id="user-menu">
                    <li><a  href="//www.mi.com/shop/user/portal" target="_blank">个人中心</a></li>
                    <li><a  href="//www.mi.com/shop/user/comment" target="_blank">评价晒单</a></li>
                    <li><a  href="//www.mi.com/shop/user/favorite" target="_blank">我的喜欢</a></li>
                    <li><router-link to="/login">小米账户</router-link></li>
                    <li @click="clearuser"><a  href="#">退出登录</a></li>
            </ul>
        
       
        <div class="no-shop" id="show" @mouseleave="out()" style="background=red">
           <shop-no  v-if="count==0"></shop-no>
           <shop-hav  v-else-if="count > 0"></shop-hav>
        </div>
       
    </div>	
</template>

<script>
import { reactive, toRefs, onMounted, watchEffect } from 'vue'
import ShopNo from './ShopMenu/ShopNo.vue'
import ShopHav from './ShopMenu/ShopHav.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { ShopNo ,ShopHav},
    setup () {
        const state = reactive({
            isshow: false,
            user: {},
            count: 0,
            topleft: [
                { name: '小米商城',path:'home' },
                { name: 'MIUI',path:'' },	
                { name: 'loT',path:'ccc' },
                { name: '云服务',path:'' },
                { name: '天星服务',path:'' },
                { name: '有品',path:'' },	
                { name: '小爱开放平台',path:'' },	
                { name: '企业团购',path:'' },	
                { name: '物资证照' ,path:''},	
                { name: '协议规则',path:'' },	
                { name: '下载APP',path:'' },	
                { name: '智能生活',path:'' },	
                { name: 'Select Location' ,path:''}
            ]
        })
        //////////////////////////////////////////////
        //登陆的是否
        const router = useRouter();
         const store = useStore();
        // 获取仓库的商品
        watchEffect(()=>{
            state.count=store.getters. getShop.length;
        })
        onMounted((()=>{
          
        }))
        //路由的跳转
        
        const  clearuser= ()=>{
            store.commit('clearUser')
        }
        
        const other =()=>{
            router.push('/four')
        }
        const leave = (e) => {
            router.push(e.path)
        }
        setInterval(()=>{
            state.isshow=store.getters.isShow;
            if(store.state.userList[0]!=undefined){
                  state.user=store.state.userList[0];
            }
        },200)
        // 鼠标进出购物车
         const enter = ()=>{
            let white= document.getElementById('shopback'); 
               white.style.backgroundColor='white';
            let show = document.getElementById('show');
            let hei2=show.offsetHeight;
               let i=-hei2;
            let timer = setInterval(()=>{
                    if(i<0){
                        i=i+3;
                        show.style.top=-231+i+'px';               
                    }
                    clear()
               },2)
            let clear = ()=>{
                if(i>=0){
                    clearInterval(timer)
                }
            }
        }
        const out = ()=>{
            let white= document.getElementById('shopback'); 
            if(state.count==0){
                 white.style.backgroundColor='#757575';
            }else{
                white.style.backgroundColor='#FF8C00';
            }
              
            let show = document.getElementById('show');
            let hei2=show.offsetHeight;
               let i=0;
            let timer = setInterval(()=>{
                    if(i >=-hei2){
                        i=i-3;
                        show.style.top=-210+i+'px';               
                    }
                    clear()
               },2)
            let clear = ()=>{
                if(i>=0){
                    clearInterval(timer)
                }
            }
        }
        /**菜单的动画 */
        const menuenter =()=>{
            var menu= document.getElementById('user-menu');
             document.getElementById('userok').style.background='#757575';
           
            let hei=menu.offsetHeight;
            let i=0;
            var timer=setInterval(()=>{
               if(i < hei){
                i=i+2;
                menu.style.top=-hei+i+'px';
               } else if(i<=hei){
                clearInterval(timer)
               }
                
            },0.2)
        } 
        const menuleave =()=>{
            var menu= document.getElementById('user-menu');
            document.getElementById('userok').style.background='';
             let movel= -menu.offsetHeight;
             let i=0;
             var timer =setInterval(()=>{
                if(i>movel){
                    i=i-2;
                    menu.style.top=i+'px';
                }else if(i<=movel){
                    clearInterval(timer);
                }
             },0.2)
        }
        // 鼠标进入
        
        // 进入前得设置
        onMounted(() => {
            let white= document.getElementById('shopback'); 
            var show = document.getElementById('show');
            if(show!=null){
                let hei2=2*(220+show.offsetHeight);
                if(state.count==0){
                    show.style.top=-hei2+'px';
                    white.style.backgroundColor='#757575';
                } else if(state.count!=0){
                    show.style.top=-hei2+'px';
                    white.style.backgroundColor='#FF8C00';
                }
            }
            
           
        })
        return {
            ...toRefs(state),
              enter,
              out,
              leave,
              menuenter,
              menuleave,
              clearuser,
              other
        }
    }
}
</script>

<style lang="css" scoped>

/* 黑色导航条部分 */
.Top {
    position: relative;
    z-index: 40;
    margin-top: -10px;
    margin-left: -10px;
    width: 100%;
    height: 45px;
    background-color: #333333;
}
div.top-menu {
    position: relative;
    z-index: 45;
    overflow: hidden;
    margin: 0 auto;
    width: 1240px;
    height: 100%;
    background-color: #333333;
}
div.top-left {
    float: left;
    width: 800px;
    height: 100%;
}
div.top-middle {
    float: left;
    margin-left: 76px;
    right: 125px;
    width: 224px;
}
div.top-right {
    float: left;
    margin-left: 15px;
    width: 120px;
    height: 100%;
    right: 0;
}
.top-content {
    padding-left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    list-style-type: none;
}
.top-content li{
	height: 50px;
	padding: 0 7.5px;
    font-size: 12px;
	color: #ababab;
	border-right: 1px solid #464646;
}
.top-content a{
   color: #ababab;
   text-decoration: none;
}
.top-content li:nth-child(2) {
    padding-left: 0;
}
.top-content li:last-child {
    border-right: 0;
}

.top-content li:hover {
	color: white;
}
.shop{
    right: 0;
	width: 100%;
	display: flex;
	height: 100%;
    font-size: 12px;
	color: #ABABAB;
    line-height: 40px;
}
.shop-no{background-color: #464646;}
.shop-hav{background-color: #ca5b10;}
.shop_img{
	width: 22px;
	height: 22px;
	margin-top: 10px;
    margin-left: 15px;
	background-size:100% 100%;
	background-image:url(@/assets/img/black-navbar/1.png);
}
.shop p{
    line-height: 20px
}

.shop:hover .shop_img {
	background-image: url(@/assets/img/black-navbar/2.png);
}
.no-shop{
    position: relative;
    top: -210px;
    left: 73.9%;
    z-index: 40;
    width: 316px;
    height: auto;
    background-color: #ff6700;
}
/**登陆 */
.one{
    width: auto;
    height: auto;
}
.user-menu{
    left: 69%;
    width: 111px;
    height: 196px;
    background-color: rgb(238, 233, 232);
    position: relative;
    top: -196px;
    z-index: 38;
    list-style: none;
    /**边框的 */
    margin-top: 0px;
    padding-left: 0px;
}
.user-menu li{
    width: auto;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;  
}
.user-menu li:hover{
    background: #b0b0b0;
    color:#ff6700;
}
.user-menu li a{
    color: #464646;
}
.user-menu li a:hover{
   
     color:#ff6700;
}
.user-menu li a{
    text-decoration: none;
}
</style>