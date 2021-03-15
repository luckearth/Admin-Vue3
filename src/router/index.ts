import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/account/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/index.vue'),
    children:[
      {
        path:'/user',
        name: 'usermanager',
        meta:{key:2},
        component:()=>import('@/views/user/index.vue')
      }
    ]

    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
