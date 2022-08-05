<template>
    <div>
        <my-header></my-header>
        <white-nav></white-nav>
        <good-page></good-page>
        <my-footer class="onech"></my-footer>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import GoodPage from '@/components/shop/GoodPage.vue'
import MyHeader from '@/components/TopMenu/MyHeader.vue'
import WhiteNav from '@/components/TopMenu/WhiteNav.vue'
import MyFooter from '@/components/TopMenu/MyFooter.vue'

export default {
  components: { GoodPage, MyHeader, WhiteNav, MyFooter},
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style  scoped>
.onech{
    margin-top: 2334px;
}
</style>