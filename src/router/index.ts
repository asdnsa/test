import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:"Main",
    component:()=>import('@/views/Main.vue')
  },
  {
    path:'/category/:category_id',
    name:"Category",
    component:() => import('@/views/Category.vue')
  },
  {
    path:'/cart',
    name:"Cart",
    component:() => import('@/views/Cart.vue')
  },
  {
    path:'/product/:product_id',
    name:"Product",
    component:() => import('@/views/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
