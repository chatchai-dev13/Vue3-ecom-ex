import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/layouts/userLayoutView.vue'
import MainView from '@/views/MainPageView.vue'
import ProductView from '@/views/product/ProductView.vue'
import OrderView from '@/views/order/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children: [
        {
          path: '/',
          name: 'main-page',
          component: MainView,
        },
        {
          path: '/product/:id', // product id
          name: 'product-page',
          component: ProductView,
        },{
          path: '/order/:id', // user id
          name: 'order-page',
          component: OrderView,
        }
      ]
    },
  ],
})

export default router
