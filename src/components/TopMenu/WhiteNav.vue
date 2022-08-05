<template>
    <div class="select">
        <div class="select-bac">
            <div class="select-left">
                <img class="img" src="@/assets/img/white-navbar/logo-mi2.png"/>
            </div>
            <div class="select-middle">
                <ul class="select-content">
                    <li @mouseenter="reBack(index),appearCell()" v-for="(item,index) in Content" 
                    :key="index">{{ item.name }}</li>
                    <li>服务中心</li>
                    <li>社区</li>
                </ul>
            </div>
            <div class="select-right">
                <!-- 搜索条 -->
                <div class="search">
                    <input id="input" type="text" placeholder="显示器" class="search-text" 
                            @click="Focus()" @blur="Blur()" 
                            @mouseenter="enter()" @mouseleave="out()"/>
                    <button id="button" class="search_btn"
                            @mouseenter="enter()" @mouseleave="out()">
                    </button>
                    <div id="search_display" class="search_display">
                      <ul>
                        <li @mouseenter="movehave($event)" @mouseleave="moveleave($event)">
                            <a href="#">全部商品</a></li>
                        <li @mouseenter="movehave($event)" @mouseleave="moveleave($event)" 
                        v-for="item in Content" :key="item"><a href="#">{{item.name}}</a></li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="showcell" id="showcell" @mouseleave="displayCell()">
            <ul>
                <li v-for="(item,index) in showSelect" :key="index">
                    <div class="show-msg">
                        <img :src=this.showSelect[index].src>
                        <p class="show-name">{{this.showSelect[index].name}}</p>
                        <p class="show-price">{{this.showSelect[index].price}}</p>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>	
</template>

<script>
import { computed, onMounted, reactive, toRefs } from 'vue'
import { dataInJs } from '@/data/dataSelect'
export default {
    setup () {

        const state = reactive({
            isShow: computed(()=>{
                if(state.showSelect == undefined || state.showSelect.length <= 0) {
                    return false;
                }else{
                    return true;
                }
            }),
            Content: [
                { name: 'Xiaomi手机' }, 
                { name: 'Redmi红米' },
                { name: '电视' },
                { name: '笔记本' },
                { name: '平板' },
                { name: '家电' },
                { name: '路由器' },
            ],
            menu:[
                 {name:'手机'},
                {name:'红米'},
                {name:'黑鲨5'},
                {name:'冰箱'},
                {name:'笔记本'},
                {name:'洗衣机'},
                {name:'耳机'}
            ],
            showSelect:[0],
            changeData:[0],
            
        })
         // 获得相关数据
        onMounted(()=>{
            state.changeData=dataInJs();
            change();
        })
        // 显示更换
        const change = ()=>{
            let i=0
            setInterval(()=>{
                    let tent= document.getElementById("input");
                     if(state.menu.length==i){
                          i=0;
                     }
                     if(tent!=undefined){
                         tent.placeholder=state.menu[i].name;
                        i++;
                     }
                   
            },4000)
        }
        const Focus = ()  => {
            document.getElementById('input').style.borderColor = "#FF6700";
            document.getElementById('button').style.borderColor = "#FF6700";
            document.getElementById("search_display").style.display="block";
            document.getElementById('input').hasFocus=true;
        }
        const Blur = ()  => {
            document.getElementById('input').style.borderColor = "#e0e0e0";
            document.getElementById('button').style.borderColor = "#e0e0e0";
            document.getElementById("search_display").style.display="none";
            document.getElementById("input").hasFocus=false;
        }
        const enter = ()  => {
            if(!document.getElementById("input").hasFocus){
                document.getElementById("input").style.borderColor = "#333333";
                document.getElementById('button').style.borderColor = "#333333";
            }
        }
        const out = ()  => {
            if(!document.getElementById("input").hasFocus){
                document.getElementById("input").style.borderColor = "#e0e0e0";
                document.getElementById('button').style.borderColor = "#e0e0e0";
            }
        }
        // 向上移动
        const displayCell = ()=> {  
            console.log('是否进行显示'+state.isShow);
            let showcell= document.getElementById('showcell')
            let old = -showcell.offsetHeight;
            let i=0;
            let timer= setInterval(()=>{
                if (i > (old-30)) {
                    i = i-3;
                    showcell.style.top=i +'px';
                    console.log(i+'%'+old);
                }
                if (i <= old){ 
                    showcell.style.boxShadow='';
                    clearTime()
                   
                }
            },0.2)
            let clearTime= ()=> {clearInterval(timer);}
        } 
        // 向下移动
        const appearCell= ()=>{
            let showcell= document.getElementById('showcell')
            let old = showcell.offsetTop;
            let i=0;
            console.log(old);
            let timer = setInterval(()=>{
                console.log(i+'$'+old);
                if(i > old){
                    showcell.style.top=old+'px';
                    old=old+3;
                }else{
                     showcell.style.boxShadow='0 8px 13px -2px rgba(0,0,0,0.3)';
                     clearTime();
                }
               
            },0.2)
            let clearTime = ()=>{
                clearInterval(timer)
            }
        }
        // 计算属性点击更换
        const reBack = computed(()=>(e)=>{ 
            state.showSelect=state.changeData[e]
            document.getElementById("search_display").style.display="none";
        })
       
        return {
            ...toRefs(state),
            Focus,
            Blur,
            enter,
            out,
            displayCell,
            appearCell,
            reBack,
            change,
        }
    }
}
</script>

<style scoped>

/* 白色导航条部分 */

.select {
    width: 100%;
    height: 100px;
    background-color: white;
}
div.select-bac {
    border-bottom: 0.5px solid #C0C0C0;
    position: relative;
    z-index: 30;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
}
div.select-left {
    position: absolute;
    margin-left: 0;
    width: 100px;
    height: 100%;
}
div.select-middle {
    margin-left: 245px;
    width: 700px;
    height: 100%;
}
div.select-right {
    position: absolute;
    z-index: 30;
    margin-right: 0;
    right: 10px;
    width: 400px;
    height: 100%;
}
img.img {
    position:absolute;
    width: 56px;
    height: 56px;
    top:22px;
    vertical-align: middle;
}
.select-content {
    height: 100%;
    margin: 0;
    list-style-type: none;
    display: flex;
    float:left;
    font-size: 16px;
    padding: 0;
}
.select-content li{
	padding-right: 18px;
	color: #464646;
    line-height: 100px;
}

.select-content li:hover {
	color: #ff6700;
	cursor: pointer;
}
.search {
    position: absolute;
    right:0;
    top: 25px;
    width: 300px;
    height: 50px;
    
}
.search .search-text{
    position: absolute;
    right: 49px;
    font-size: 16px;
    color: #AAA;
    border: 1px solid #e0e0e0;
    width: 245px;
    height: 46px;
    padding-left: 10px;
}
.search .search-text:hover{
    border: 1px solid #333333;
}
.search .search-text:focus{
    outline:none;
    border: 1px solid #FF6700;    
}
.search_btn {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    border: 1px solid #e0e0e0;
    background-image: url(@/assets/img/white-navbar/search_before.png);
    background-color: white;
    background-size: 60%;
    background-position:10px 10px;
    background-repeat: no-repeat;
    cursor: pointer;

}
.search_btn:hover {
    background-color: #FF6700;
    background-image: url(@/assets/img/white-navbar/search_after.png);
}
.showcell{
    width: 100%;
    height: 231px;
    background-color: white;
    position: relative;
    top: -231px;
    z-index: 25;   
    overflow: hidden;
}
.showcell ul{
    width: 100%;
    height: 90%;
    padding-left: 0px;
    list-style: none;
    margin-left: 20px;
    margin-top: 10px;
}
.showcell li{
    float: left;
    width: 204px;
    height: 215px;
    background: white;
}
.show-msg{
  margin-top: 35px;
  text-align: center;
  margin-left: 10px;
  font-size: 12px;
}
.show-msg img{
   border-right: 1px solid #A9A9A9;
   padding-right: 15px;
   width: 150px;
   height: 110px;
}

.show-price{
    color: #ff6700
}
.search_display{
    display: none;
    z-index: 40;
    width: 257px;
    height: auto;
    position: relative;
    top: 99%;
    right: 8px;
    border: 1px solid #FF6700;
    background-color: white;
    opacity: 1
}
.search_display ul{
    margin-top: 0px;
    width: auto;
    height: auto;
    background-color: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.search_display li{
    width: auto;
    height: 30px;
    padding-left: 20px;
    margin-left: 0px;
}
.search_display li a{
    position: relative;
    top: 2px;
    text-decoration: none;
    color:#333333;
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft 
    Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
}
</style>