<template>
    <div class="shopping-group">
        <div class="group-content-A">
            <div class="A-top"></div>
            <div class="A-middle">
                <div class="content-nav">
                    <div class="content-nav-left">手机</div>
                    <div class="content-nav-right">
                            查看更多
                            <div class="content-log"></div>
                    </div>
                </div>
            </div>
            <div class="A-bottom">
                <div class="leftShow">
                    <!-- v-if 此处用了没有效果，这是Vue的机制问题，V-show可以对数组索引进行判断，v-if不行 -->
                    <div class="show-big-div over">
                            <img class="shopping-img" :src="left.src" />
                    </div>
                </div>
                <div class="rightShow">
                    <div class="show-middle-div over" v-for="(item,index) in right" :key="index" @click="other(item)">
                        <div><img class="shopping-img" :src="item.path" /></div>
                        <div class="shopping-name">{{ item.name }}</div>
                        <div class="shopping-info">{{ item.info }}</div>
                        <div class="shopping-moneyinfo">{{ item.moneyinfo }}元起</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { phone } from '@/data/Content/phone'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
    setup () {
        const state = reactive({
            left: Object,
            right: []
        })

        //点击跳转
        const router = useRouter();
        const store = useStore();
        const other = (e)=>{
        if(store.getters.isShow==true){
            let str = JSON.stringify(e);
            router.push({
                path: 'shop',
                query: { 
                    seton: str
                }
            })
        }else {
            router.push('/login')
        }
        
        }
        onMounted(() => {
            state.left = phone().left;
            state.right=phone().right;
            console.log(phone().right);
        })

        return {
            ...toRefs(state),
                 other,
        }
    }
}

</script>

<style>
/* 商品分类列表展示区样式 */
.shopping-group {
    margin-top: 0px;
    width: 100%;
    height: 860px;
    background-color: #f5f5f5;
}
div.group-content-A {
    position: relative;
    margin: 0 auto;
    width: 1240px;
    height: 100%;
}
div.A-top {
    position: absolute;
    margin-top: 20px;
    margin-left: 0px;
    width: 1240px;
    height: 120px;
    background-image: url(@/assets/img/A/A-long.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
div.A-middle {
    position: absolute;
    margin-top: 140px;
    margin-left: 0px;
    width: 1240px;
    height: 120px;

}
/* 文字导航样式设定 */
.content-nav{
	display: flex;
	line-height: 120px;
	justify-content: space-between;
}
.content-nav-left{
	font-size: 20px;
	color: #686868;
}
.content-nav-right{
	font-size: 16px;
	text-align: center;
	line-height: 120px;
	color: #686868;
	display: flex;
    align-items: center;
    height: 100%;
	justify-content:flex-end;
	transition: all 0.2s ease-in; 
	cursor: pointer;
}

.content-log{
    width: 30px;
    height: 32px;;
    background-image: url(@/assets/img/A/enter-1-a.png);
    background-repeat: no-repeat;
    background-size: 100%;
	transition: all 0.2s ease-in;
	cursor: pointer;
}
.content-nav-right:hover{
	color: #FF5500;
}
.content-nav-right:hover .content-log{
    background-image: url(@/assets/img/A/enter-1.png);
}

/* 手机区div样式设置*/
div.A-bottom {
    position: absolute;
    margin-top: 240px;
    margin-left: 0px;
    width: 1240px;
    height: 600px;
    display: flex;
}
div.leftShow{
    position: absolute;
    margin-left: 0;
    width: 20%;
    height: 100%;
}
div.rightShow{
    position: absolute;
    margin-left: 20%;
    width: 80%;
    height: 100%;
    display: flex;
    float:left;
    flex-wrap: wrap;
    align-items: stretch;
}
.show-big-div{
    margin: 0;
    width: 100%;
    height: 98%;
    background-color: white;
}
.show-big-div img{
    width: 100%;
    height: 100%;
}
.show-middle-div{
    text-align: center;
    margin-top: 0;
    margin-left: 2%;
    width: 23%;
    height: 48%;
    background-color: white;
}
div.shopping-name{
    font-size: 14px;
}
div.shopping-info{
    font-size: 10px;
    color: #C3C3C3;
    overflow: auto;
}
div.shopping-moneyinfo{
    margin-top: 15px;
    vertical-align: middle;
    font-size: 14px;
    color: #FF5500;
}
.over{
	transition: all 0.2s ease-in;
}
.over:hover{
	cursor: pointer;
	box-shadow: 3px 7px 10px #a1a1a1;
	margin-top: -4px;
}
.shopping-img{
    width: 160px;
    height: 160px
}
</style>