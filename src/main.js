import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import storenew from '@/store/index'
createApp(App).use(router).use(storenew).mount('#app')
