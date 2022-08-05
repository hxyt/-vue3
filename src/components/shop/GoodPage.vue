<template>
    <div class="one">
        <div class="topThree">
            <div  class="goodsMsg">
                <div class="details-top-left">
                    <p class="xilienameda">{{ duixiang.name }}</p>
                    <p class="line-a">|</p>
                    <p class="xilienamexiao">{{ duixiang.name }}电竞版</p>
                </div>
                <div class="details-top-right">
                    <p class="gocanshuye">概述页</p><p class="line-b">|</p>
                    <p class="gocanshuye">参数页</p><p class="line-b">|</p>
                    <p class="gocanshuye">F码通道</p><p class="line-b">|</p>
                    <p class="gocanshuye">咨询客服</p><p class="line-b">|</p>
                    <p class="gocanshuye">用户评价</p>
                </div>
            </div>
        </div>
         <div class="details-neirongqu">
            <div class="details-bottom-left">
                <div class="shouji-img-box">
                    <img class="shouji-img-big" src='@/assets/img/loT/d01.jpg' />
                </div>
            </div>
         <div class="allFather">
                    <div class="xiliemingbig">{{duixiang.name}}系类</div>
                    <div class="liangdian-b">
                       <span>「新品热卖中！享6期免息，评论晒单前500名返30元商城红包；延保、碎屏保5折」
                        骁龙8+ 旗舰处理器 | 徕卡光学镜头 | 徕卡原生双画质 | 徕卡水印、大师镜头包 | 
                        全场景疾速抓拍 | 5000万三主摄 | 小米自研澎湃P1芯片 | 120W小米澎湃秒冲 | 4600mAh大电量 | 2K AMOLED屏 </span>
                    </div>
                    <div class="xiaomishore">小米自营</div>
                    <p class="price" >{{duixiang.moneyinfo}}</p>
                    
                <div class="give-a">
                    <p class="give-btn">赠品</p>
                    <p class="zengpin-text">满三件 ，赠价值 199 运动耳机 ，赠完为止</p>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-title">选择产品</div>
                    <div class="select-box">
                        <input  type="submit" class="selected cont" value="8GB+128GB" @click="contents(0),content='8GB+256GB'">
                        <input  type="submit" class="selected cont" value="8GB+256GB" @click="contents(1),content='8GB+256GB'"><br>
                        <input  type="submit" class="selected cont" value="12GB+256GB" @click="contents(2),content='12GB+256GB'">
                        <input  type="submit" class="selected cont" value="12GB+512GB" @click="contents(3),content='12GB+512GB'">
                    </div>
                </div>
                 <div class="select-peizhi-box">
                    <div class="select-title">选择颜色</div>
                    <div class="select-box">
                        <input  type="submit" class="selected oll" value="白色" @click="changetwo(0),color='白色'">
                        <input  type="submit" class="selected oll" value="黑色" @click="changetwo(1),color='黑色'">
                    </div>
                </div>
                <!--11111-->
                <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的尊享服务</div>
                         <div class="select-title-red">了解意外保护 ></div>    
                    </div>
                    <div class="changeColor fuwuone" @click="changeBone(),oneMsg.name='MiCare保障服务',oneMsg.abc='享碎屏、延保、换电池、保值换新4大权益',oneMsg.price=599">
                            <input v-if=!isone type="radio" class="radio" >
                            <input v-if=isone type="radio" class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/119.png">
                            <div class="baohu-text-a">MiCare保障服务</div>
                            <div class="baohu-text-b">已省150元</div>
                        <div class="baohu-content-textrow">
                                <p class="rightmove">享碎屏、延保、换电池、保值换新4大权益</p>
                                <p class="leftmove">
                                    <input v-if=isone type="checkbox" class="fang-point" checked>
                                    <input v-if=!isone type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;599元</p>
                            </div>
                        </div>
                </div>
                 <!--select-peizhi-box一个大的项目 baohu-xiangmu-box其中的选项-->
                 <!--2222222222222--->
                <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的意外保护</div>
                         <div class="select-title-red">了解意外保护 ></div>    
                    </div>
                                      <!--1111111111--->
                    <div class="changeColor fuwutwo" @click="changeBtwo(0),twoMsg.name='意外保障服务',twoMsg.abc='1年1次意外损坏 官方原厂 免费维修益',twoMsg.price=599">
                            <input v-if=!istwo[0] type="radio"  class="radio" >
                            <input v-if=istwo[0] type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/119.png">
                            <div class="baohu-text-a">意外保障服务</div>
                        <div class="baohu-text-b">意外损免费修</div>
                            <div class="baohu-content-textrow">
                                <p class="rightmove">1年1次意外损坏 官方原厂 免费维修益</p>
                                <p class="leftmove">
                                    <input v-if=istwo[0] type="checkbox" class="fang-point" checked>
                                    <input v-if=!istwo[0] type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;119元</p>
                        </div>
                    </div>
                                      <!--22222222222222-->
                     <div class="changeColor fuwutwo" @click="changeBtwo(1),twoMsg.name='碎屏保障服务',twoMsg.abc='年1次碎屏 官方原厂 免费维修',twoMsg.price=149">
                            <input v-if=!istwo[1] type="radio"  class="radio" >
                            <input v-if=istwo[1] type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/119.png">
                            <div class="baohu-text-a">碎屏保障服务</div>
                        <div class="baohu-text-b">已省150元</div>
                            <div class="baohu-content-textrow">
                                <p class="rightmove">年1次碎屏 官方原厂 免费维修</p>
                                <p class="leftmove">
                                    <input v-if=istwo[1] type="checkbox" class="fang-point" checked>
                                    <input v-if=!istwo[1] type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;149元</p>
                        </div>
                    </div>
                </div>

                <!--3333333333333333333-->
                <!--保修-->
                <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的延长保修</div>
                         <div class="select-title-red">了解意外保护 ></div>    
                    </div>
                    <div class="changeColor fuwuthree" @click="changeBthree(),thrMsg.name='选择小米提供的延长保修',thrMsg.abc='享碎屏、延保、换电池、保值换新4大权益',thrMsg.price=74">
                            <input v-if=!isthree type="radio"  class="radio" >
                            <input v-if=isthree type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/119.png">
                            <div class="baohu-text-a">选择小米提供的延长保修</div>
                            <div class="baohu-text-b">已省75元</div>
                        <div class="baohu-content-textrow">
                                <p class="rightmove">享碎屏、延保、换电池、保值换新4大权益</p>
                                <p class="leftmove">
                                    <input v-if=isthree type="checkbox" class="fang-point" checked>
                                    <input v-if=!isthree type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;74元</p>
                            </div>
                        </div>
                </div>

                <!--444444444444444444444-->
                <!---云服务-->
                 <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的意外保护</div>
                         <div class="select-title-red">了解意外保护 ></div>    
                    </div>
                                    <!--11111111111111111111-->
                    <div class="changeColor fuwufour" @click="changeBfour(0),fouMsg.name='云空间年卡200G',fouMsg.abc='主商品签收后，自动激活至下单帐号',fouMsg.price=208">
                            <input v-if=!isfour[0] type="radio"  class="radio" >
                            <input v-if=isfour[0] type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/110.png">
                            <div class="baohu-text-a">云空间年卡200G</div>
                        <div class="baohu-text-b">208元</div>
                            <div class="baohu-content-textrow">
                                <p class="rightmove">主商品签收后，自动激活至下单帐号</p>
                                <p class="leftmove">
                                    <input v-if=isfour[0] type="checkbox" class="fang-point" checked>
                                    <input v-if=!isfour[0] type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;208元</p>
                        </div>
                    </div>
                                        <!--222222222222-->
                    <div class="changeColor fuwufour" @click="changeBfour(1),fouMsg.name='云空间年卡 50G',fouMsg.abc='主商品签收后，自动激活至下单帐号',fouMsg.price=58">
                            <input v-if=!isfour[1] type="radio"  class="radio" >
                            <input v-if=isfour[1] type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/110.png">
                            <div class="baohu-text-a">云空间年卡 50G</div>
                        <div class="baohu-text-b">58元</div>
                            <div class="baohu-content-textrow">
                                <p class="rightmove">主商品签收后，自动激活至下单帐号</p>
                                <p class="leftmove">
                                    <input v-if=isfour[1] type="checkbox" class="fang-point" checked>
                                    <input v-if=!isfour[1] type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;58元</p>
                        </div>
                    </div>
                                        <!--33333333333-->
                    <div class="changeColor fuwufour" @click="changeBfour(2),fouMsg.name='云空间月卡200G',fouMsg.abc='主商品签收后，自动激活至下单帐号',fouMsg.price=21">
                            <input v-if=!isfour[2] type="radio" class="radio" >
                            <input v-if=isfour[2] type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/110.png">
                            <div class="baohu-text-a">云空间月卡200G</div>
                        <div class="baohu-text-b">6元</div>
                            <div class="baohu-content-textrow">
                                <p class="rightmove">主商品签收后，自动激活至下单帐号</p>
                                <p class="leftmove">
                                    <input v-if=isfour[2] type="checkbox" class="fang-point" checked>
                                    <input v-if=!isfour[2] type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21元</p>
                        </div>
                    </div>
                                      <!--444444444444444-->
                    <div class="changeColor fuwufour" @click="changeBfour(3),fouMsg.name='云空间月卡50G',fouMsg.abc='主商品签收后，自动激活至下单帐号',fouMsg.price=6">
                            <input v-if=!isfour[3] type="radio"  class="radio" >
                            <input v-if=isfour[3] type="radio"  class="radio" checked>
                            <img class="baohu-icon" src="@/assets/img/selectshop/110.png">
                            <div class="baohu-text-a">云空间月卡50G</div>
                        <div class="baohu-text-b">已省150元</div>
                            <div class="baohu-content-textrow">
                                <p class="rightmove">主商品签收后，自动激活至下单帐号</p>
                                <p class="leftmove">
                                    <input v-if=isfour[3] type="checkbox" class="fang-point" checked>
                                    <input v-if=!isfour[3] type="checkbox" class="fang-point" >
                                        我已阅读 
                                </p>
                                <p class="red">服务条款 |常见问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6元</p>
                        </div>
                    </div>
                </div>
               <div class="heji-box">
                   <div class="yonghuselected">
                        <p class="selected-name">{{duixiang.name}}{{topcontent}}{{topcolor}}</p>
                        <p class="selected-jiage">{{duixiang.moneyinfo}}元</p>
                    </div>
                    <div class="yonghuselected" v-if=isone>
                        <p class="selected-name">{{one.name}}</p>
                        <p class="selected-jiage">{{one.price}}元</p>
                    </div>
                    <div class="yonghuselected" v-if=twois>
                        <p class="selected-name">{{two.name}}</p>
                        <p class="selected-jiage">{{two.price}}元</p>
                    </div>
                    <div class="yonghuselected" v-if=isthree>
                        <p class="selected-name">{{three.name}}</p>
                        <p class="selected-jiage">{{three.price}}元</p>
                    </div>
                     <div class="yonghuselected" v-if=fouis>
                        <p class="selected-name">{{four.name}}</p>
                        <p class="selected-jiage">{{four.price}}元</p>
                    </div>
                    <div class="show-total-box">
                        <p class="selected-name-total">总计：</p>
                        <p class="selected-jiage-total">{{mony}}</p>
                    </div>
                </div>
                  <div class="tocart-box">
                    <div class="tocart-btn">
                         <div class="jiarugouwuche" @click="addshop">加入购物车</div>
                        <div class="shoucang-box">
                            <div class="xin-img-box"></div>
                            <p class="xihuan">喜欢</p>
                        </div>
                    </div>
                    <div class="yuan-box">
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">小米自营</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">小米发货</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">7天无理由退货</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">运费说明</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">企业信息</p>
                        <br>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">7天价格保护</p>
                    </div>
                </div>
            </div>
         </div>
        
    </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from 'vue'
import { useRoute ,useRouter} from 'vue-router';
import { useStore } from 'vuex'
export default {
    setup () {
        const state = reactive({
            allmony:0,
            duixiang:{},
            count: 0,
            pname:'',
            content:'',
            color:'',
            oneMsg:{
                name:'',
                abc:'',
                price:0
            },
            twoMsg:{
                name:'0',
                abc:'',
                price:0
            },
            thrMsg:{
                name:'',
                abc:'',
                price:0
            },
            fouMsg:{
                name:'',
                abc:'',
                price:0
            },
            /**勾选的 */
            isone:false,

            istwo:[
                false,false
            ],

            isthree:false,
            isfour:[
                false,false,false,false
            ],
            // 添加到购物车的数据
            allMsg:{
                name:computed(()=>{ return state.duixiang.name;}),
                memory:computed(()=>{return state.content}),
                color:computed(()=>{ return state.color}),
                price:computed(()=>{ return state.allmony}),
                path:computed(()=>{return state.duixiang.path})

            }
           

        })
        /**接受路由传递过来的参数 */
         const route = useRoute();
        onMounted(()=>{
            if(JSON.parse(route.query.seton)!=null){
                state.duixiang = JSON.parse(route.query.seton);
            }
           
        })
        // 点击提交数据
        const store = useStore()
       const router = useRouter()
        const addshop =()=>{
            store.commit('addShop',state.allMsg);
            router.push('/home');
        }

        /**收集放入到数组当中去 */
        setInterval(()=>{
                 state.allmony = state.oneMsg.price+
                 state.twoMsg.price+state.thrMsg.price+state.fouMsg.price+parseInt(state.duixiang.moneyinfo);
                 console.log(parseInt(state.duixiang.moneyinfo));
        },3000)
    const change = (e)=>{
        e.cur

    }
    /**判断数据存在 */
    const twois = computed(()=>{
         for(let i=0; i<state.istwo.length;i++){
                if(state.istwo[i]==true){
                    return true
                }else{
                    return false
                }
            }
        return state.oneMsg;
    }) 
    const fouis = computed(()=>{
         for(let i=0; i<state.isfour.length;i++){
                if(state.isfour[i]==true){
                    return true
                }else{
                    return false
                }
            }
        return state.oneMsg;
    }) 
    const topcontent = computed(()=>{
        return state.content;
    })
           

    const topcolor = computed(()=>{
        return state.color;
    })
    const one = computed(()=>{
        return state.oneMsg;
    }) 
    const two = computed(()=>{
        return state.twoMsg;
    }) 
    const three = computed(()=>{
        return state.thrMsg;
    }) 
    const four = computed(()=>{
        return state.fouMsg;
    }) 
    const mony = computed(()=>{
        return state.oneMsg.price+state.twoMsg.price+state.thrMsg.price+
        state.fouMsg.price+parseInt(state.duixiang.moneyinfo);
    })




    const contents = (e)=>{
        let all=document.getElementsByClassName('cont');
        for(let i=0;i<all.length;i++){
            all[i].style.border='';
        }
            all[e].style.border='1px solid #FF6700';
    }
      const changetwo = (e)=>{
        let oll=document.getElementsByClassName('oll');
        for(let i=0;i<oll.length;i++){
            oll[i].style.border='';
        }
        oll[e].style.border='1px solid #FF6700';
    }
    /***       服务函数   */
    const changeBone = ()=>{
        
        state.isone=!state.isone;
        if(state.isone==true){
            document.getElementsByClassName('fuwuone')[0].style.border='1px solid #FF6700';
        }else{
            document.getElementsByClassName('fuwuone')[0].style.border='';
        }
      console.log(state.oneMsg.name+state.oneMsg.abc+state.oneMsg.price);
    }
    /**右下边第二个，两个 */

    
    const changeBtwo = (e)=>{
        let olol=document.getElementsByClassName('fuwutwo');
        console.log(e);
        for(let i=0;i<olol.length;i++){
            olol[i].style.border='';
        }
        //取消
        if(state.istwo[e]===true){
            olol[e].style.border='';
            state.istwo[e]=false;
        //填选
        }else if(state.istwo[e]===false){
            for(let i=0; i<state.istwo.length;i++){
                state.istwo[i]=false
            }
            olol[e].style.border='1px solid #FF6700';
            state.istwo[e]=true;
        }
    }
    const changeBthree = () =>{
         state.isthree=!state.isthree;
        if(state.isthree==true){
            document.getElementsByClassName('fuwuthree')[0].style.border='1px solid #FF6700';
        }else{
            document.getElementsByClassName('fuwuthree')[0].style.border='';
        }
    }
    const changeBfour = (e)=>{
        let olol=document.getElementsByClassName('fuwufour');
        
        for(let i=0;i<olol.length;i++){
            olol[i].style.border='';
        }
        //取消
        if(state.isfour[e]==true){
             olol[e].style.border='';
            state.isfour[e]=false;
        //填选
        }else if(state.isfour[e]!=true){
            for(let i=0; i<state.isfour.length;i++){
                state.isfour[i]=false
            }
            olol[e].style.border='1px solid #FF6700';
            state.isfour[e]=true;
        }
    }














        return {
            ...toRefs(state),
            change,
            contents,
            changetwo,
            changeBone,
            changeBtwo,
            changeBthree,
            changeBfour,
            one,two,three,four,
            twois,fouis,mony,
            topcontent,topcolor,
            addshop
        }
    }
}
</script>

<style  scoped>

.one {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}
.topThree {
    margin: 0 auto;
    width: 100%;
    height: 60px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-shadow:0px 3px 5px 3px #ececec;
    display: flex;
    justify-content: center;
}
.goodsMsg {
    margin: 0 auto;
    width: 1240px;
    display: flex;
    justify-content: space-between;
}
.details-top-left {
    margin: 0;
    width: 50%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
      margin-left: 79px;
}
.xilienameda {
    font-size: 18px;
    font-weight: 500;
    color: #424242;
}
.line-a {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #616161;
}
.xilienamexiao {
    font-size: 12px;
    font-weight: 400;
    color: #616161;
}
.xilienamexiao:hover {
    color: #ff6700;
}
.details-top-right {
    margin: 0;
    width: 50%;
    display: flex;
    justify-content:flex-end;
    align-items: center;
}
.gocanshuye {
    font-size: 14px;
    font-weight: 400;
    color: #616161;
}
.line-b {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
}
.gocanshuye:hover {
    color: #ff6700;
}
.details-bottom-left {
    margin: 0;
    width: 50%;
    display: flex;
    justify-content:flex-start;
}
.details-bottom-right {
    margin: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
}
.shouji-img-box{
    margin-top: 20px;
    margin-left: 10px;
    width: 560px;
    height: 560px;
}
.shouji-img-big {
    width: 560px;
    height: 560px;
}
/**右边布局 */
/**第一个 */
.allFather {
    position: absolute;
    right: -50%;
    top: 34%;
    margin-top: 124px;
    width: 100%;
    height: 155px;
    display: flex;
    flex-direction: column;
}
.xiaomishore {
  width: 15%;
height: 30px;
font-size: 27px;
font-weight: 400;
margin-bottom: 0%;
margin-top: 1%;
color: #ff6700;
}
.price {
   width: 100%;
height: 20px;
font-size: 18px;
line-height: 1;
color: #ff6700;
margin-bottom: 0%;
margin-top: 1%;
padding-bottom: 1%;
border-bottom: 1px solid #2c2a2a;
}
/**赠品区域 */
.give-a {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.give-btn {
    width: 80px;
    height: 24px;
    background-color: #ff6700;
    text-align: center;
    color:#ffffff;
}
.give-text {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color:#212121;
}
.xiliemingbig {
    width: 100%;
    height: 50px;
    font-size: 24px;
    font-weight: 400;
    color: #212121;
}
/**c产品区 */
.liangdian-b {
    width: 100%;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #b0b0b0;
    display: flex;
    justify-content:flex-start;
}

.selected {
    width: 292px;
    height: 58px;

    margin-left: 13px;
    margin-top: 18px;
}

.selected:hover {
    border: 1px solid #FF6700;
}

.line-c {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #b0b0b0;
}
/**保修使用 */
.changeColor{
    height: auto;
    width: 607px;
    display: flex;
    flex-direction:column;
    border: 2px solid rgb(225, 213, 213);
    overflow: hidden;
}
.radio{
position: relative;
left: 34px;
top: 52px;
width: 30px;
height: 23px;
height: 19px;
   
}
.baohu-icon {
   margin-top: 6px;
    margin-left: 79px;
    width: 73px;
    height: 71px;
}
.select-baohu-top {
    width: 603px;
    display: flex;
    justify-content:space-between;
}

.baohu-text-a {
    margin-left: 166px;
margin-top: -57px;
font-size: 20px;
color: #212121;
}
.baohu-text-b {
   margin-top: -22px;
margin-left: 304px;
font-style: normal;
width: 87px;
height: 16px;
font-size: 14px;
background: #ff6700;
display: inline-block;
padding: 4px 4px;
border-radius: 20px;
color: #fff;
}
.baohu-content-textrow {
    margin-top: 5px;
    width: 100%;
    display: flex-start;
    justify-content: flex-start;
}
.fang-point{
    margin-top: 3px;
    margin-left: 10px;
    width: 12px;
    text-align: center;
    border: 1px solid #b0b0b0;
    height: 12px;
    font-style: normal;
    line-height: 10px;
    color: white;
    font-size: 12px;
}
.fang-point.selected{
    border: 1px solid #FF6700;
    background-color: #FF6700;
}
.rightmove{
    color: #b0b0b0;
margin-left: 27%;
margin-top: 12px;

}
.leftmove{
   margin-left: 26%;
margin-top: 24px;
padding: 0;
font-size: 14px;
height: 35px;
color: #b0b0b0;
width: 96px;
overflow: hidden;
}
.red{
   width: 339px;
height: 30px;
margin-left: 44%;
margin-top: -49px;
color: #ff6000;
}
.heji-box{
    margin-top: 30px;
    padding-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid #fafafa;
    background-color: #fafafa;
}
/**下面 */
.yuan-box{
     margin-top: 10px;
  margin-bottom: 20px;
  width: 514px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

select-box input{
    border: 1px solid red;
}
.yonghuselected {
    background-color: #e9dcd6;
    width: 604px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}













.weizhi{
    margin-top: 20px;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fafafa;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
}
.weizhi-left{
    width: 50px;
}
.weizhi-img-box{
    margin-top: 30px;
    margin-left: 25px;
    width: 13px;
    height: 20px;
    background-image: url(@/assets/img/details/dingwei.png);
    background-size: 100% 100%;
}
.weizhi-right{
    margin-left: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-content: center;

}
.weizhi-right-top{
    margin-top: 30px;
    width: 100%;
    height:20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
}
.weizhi-right-bottom{
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
}
.weizhi-text{
    margin-right: 15px;
    font-weight: 500;
    font-size: 14px;
    color: #333333;
}
.weizhi-text-red{
    margin-right: 15px;
    font-weight: 500;
    font-size: 14px;
    color: #FF6700;
}
.select-peizhi-box {
    margin-top: 20px;    
    width: 100%;
    display: flex;
    flex-direction: column;
}
.select-title {
    margin-bottom: 10px; 
    width: 100%;
    height: 30px;
    font-size: 18px;
    color: #212121;
    display: flex;
    justify-content:flex-start;
    align-items: center;    
}
.select-btn-box{
    width: 100%;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
}
.select-btn {
    margin-top: 6px;
    margin-bottom: 6px;
    width: 49%;
    height: 42px;
    text-align: center;
    line-height: 42px;
    font-size: 16px;
    color: #616161;
    border: 1px solid #e0e0e0;
}


.select-title-red {
    width: 50%;
    font-size: 14px;
    color:#FF6700;
    display: flex;
    justify-content:flex-end;
}

.baohu-bottom {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    border: 1px solid #e0e0e0;
}
.baohu-bottom.selected {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    border: 1px solid #FF6700;
}
.select-baohu-bottom-left {
    width: 20%;
    display: flex;
    flex-direction: row;
}
.select-baohu-point {
    margin-top: 50px;
    margin-left: 30px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #b0b0b0;
    font-style: normal;
    line-height: 12px;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
}
.select-baohu-point.selected{
    border: 1px solid #FF6700;
    background-color: #FF6700;
}
.select-baohu-bottom-right {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.baohu-bottom-right-left {
    width: 80%;
    display: flex;
    flex-direction: column;
}

.baohu-text-c {
    margin-top: 15px;
    font-size: 14px;
    height: 18px;
    color: #b0b0b0;
}
.baohu-text-d {
    font-size: 14px;
    height: 18px;
    color: #424242;
}
.baohu-text-e {
    margin-left: 7px;
    font-size: 14px;
    height: 18px;
    color: #ff6700;
}
.line-d {
    margin-left: 7px;
    font-size: 14px;
    height: 18px;
    font-weight: 400;
    color: #ff6700;
}
.fang-point{
    margin-top: 3px;
    margin-right: 10px;
    width: 12px;
    text-align: center;
    border: 1px solid #b0b0b0;
    height: 12px;
    font-style: normal;
    line-height: 10px;
    color: white;
    font-size: 12px;
}
.fang-point.selected{
    border: 1px solid #FF6700;
    background-color: #FF6700;
}
.baohu-bottom-right-right {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.baohujiage {
    margin-top: 100px;
    font-size: 14px;
    height: 20px;
    color: #424242;
}


.selected-name{
    margin-left: 30px;
    width: 80%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    color: #424242;
}
.selected-jiage{
    margin-right: 30px;
    width: 20%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    color: #424242;
    text-align: right;
}
.tocart-box{
    margin-top: 10px;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
}
.tocart-btn{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
}
.jiarugouwuche{
    width: 300px;
    height: 50px;
    background-color: #FF6700;
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
}
.shoucang-box{
    margin-left: 10px;
    width: 150px;
    height: 50px;
    background-color: #b0b0b0;
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in;
}
.xin-img-box{
    width: 20px;
	height: 18px;
	background-image: url(@/assets/img/details/xinxing-white.png);
	background-size: 100% 100%;
    transition: all 0.2s ease-in;
}
.xihuan{
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
}
.jiarugouwuche:hover{
    background-color: #e7534b;
    cursor: pointer;
    transition: all 0.2s ease-in;
}
.shoucang-box:hover{
    background-color: #616161;
    transition: all 0.2s ease-in;
    cursor: pointer;
}

.yuan-img-box{
    width: 20px;
	height: 20px;
	background-image: url(@/assets/img/details/yuan1.png);
	background-size: 100% 100%;
}
.yuan-text{
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    height: 40px;
    font-weight: 400;
    line-height: 40px;
    color:#b0b0b0;
}
.show-total-box{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.selected-name-total,.selected-jiage-total{
    margin-top: 20px;
    margin-left: 30px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    color:#FF6700;
}

</style>