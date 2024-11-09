import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Products from '@/components/Products.vue'
import Store from '@/components/Store.vue'
import Collection from '@/components/Collection.vue'
import Collection_read from '@/components/Collection_read.vue'
import About from '@/components/About.vue'
import Community from '@/components/Community.vue'
import Notice from '@/components/Notice.vue'
import Login from '@/components/Login.vue'
import Join from '@/components/Join.vue'
import Detail from '@/components/Detail.vue'
import QnA from '@/components/QnA.vue'
import Membership from '@/components/Membership.vue'
import Event from '@/components/Event.vue'
import Store_online from '@/components/Store_online.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/collection_read',
      name: 'collection_read',
      component: Collection_read
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/qna',
      name: 'qna',
      component: QnA
    },
    {
      path: '/membership',
      name: 'membership',
      component: Membership
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/store_online',
      name: 'store_online',
      component: Store_online
    },
    
  ]
})

export default router