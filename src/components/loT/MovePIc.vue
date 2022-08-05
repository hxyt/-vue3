<template>
    <div class="showPic" id="showPic">
        <table id="table">
              <tr v-for="(iten,index) in menu" :key="index">
                    <td v-for="(it,ex) in menu[index]" :key="ex">
                        <img :src=it>
                    </td>
              </tr>
        </table>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { pic } from '@/data/PicMsg'
export default {
    setup () {
        const state = reactive({
            count: 0,
            menu:[0],
        })
        onMounted(()=>{
            state.menu=pic();
        })
        onMounted(()=>{
            let msg=document.getElementById('table');
            let msgt=document.getElementById('showPic');
            let lenght= msg.offsetWidth-msgt.offsetWidth;
            let i=0;
            setInterval(() => {
                if(i>=lenght){
                    msg.style.left=i+'px'
                    i-=1;
                }
                if(i<=lenght){
                    i=0;
                }
            }, 20);
        })
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style  scoped>
.showPic{
    width: 100%;
    height: 468px;
    overflow: hidden;
}
#table{
    width: auto;
    height: auto;
    position: relative;
    background: #DCDCDC;
    border-collapse: collapse;
    border-spacing: 16;
}
.showPic td{
    width: 200px;
    height: 92px;
    padding-left:16px;
    padding-top: 16px;
    margin-left: 16px;
}
.showPic  img:hover{
   -webkit-box-shadow: 0 4px 6px 1px rgba(0,0,0,0.3) ;
   box-shadow: 0 4px 6px 1px rgba(0,0,0,0.3) ;
   position: relative;
   top:-3px
}
.showPic img{
    width: 150px;
    height: 92px;
}
</style>