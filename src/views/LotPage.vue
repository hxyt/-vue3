<template>
    <div>
        <one-top></one-top>
        <show-pic></show-pic>
        <move-p-ic></move-p-ic>
        <bottom-pic></bottom-pic>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import OneTop from '@/components/loT/OneTop.vue'
import ShowPic from '@/components/loT/ShowPic.vue'
import MovePIc from '@/components/loT/MovePIc.vue'
import BottomPic from '@/components/loT/BottomPic.vue'
export default {
    components: { OneTop, ShowPic, MovePIc ,BottomPic},
    setup () {
      
        const state = reactive({
           
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style  scoped>
div{
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #DCDCDC;
}
</style>