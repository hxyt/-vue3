import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components:{home: () => import('@/views/HomePage.vue')},
   },
   {
    path: '/login',
    name: 'login',
    components:{home: () => import('@/views/UserLogin.vue')},
   },
   //l ot
   {
    path: '/ccc',
    name: 'abc',
    components:{home: () => import('@/views/LotPage.vue')},
   },
    // 加入购物车
   {
    path: '/shop',
    name: 'Shop',
    components:{home: () => import('@/views/ShopGoods.vue')},
   },
   {
    path: '/four',
    name: 'Fourshop',
    components:{home: () => import('@/views/FourShop.vue')},
   },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
