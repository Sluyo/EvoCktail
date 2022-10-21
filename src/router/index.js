import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sign from '../views/SignView.vue'
import Shop from '../views/ShopView.vue'
import ShopC from '../views/ShopViewCocktails.vue'
import ShopS from '../views/ShopViewShots.vue'
import ShopO from '../views/ShopViewOriginals.vue'
import Cart from '../views/CartView.vue'
import Register from '../views/RegisterView.vue'
import Admin from '../views/adminManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Sign
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/shopC',
      name: 'shopC',
      component: ShopC
    },
    {
      path: '/shopS',
      name: 'shopS',
      component: ShopS
    },
    {
      path: '/shopO',
      name: 'shopO',
      component: ShopO
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router