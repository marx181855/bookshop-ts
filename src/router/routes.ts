import {RouteRecordRaw} from 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('views/home/home.vue'),
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category/category.vue'),
    meta: {
      title: '图书分类'
    }
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: () => import('views/shopCart/shopCart.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/goodDetail',
    name: 'goodDetail',
    component: () => import('views/goodDetail/goodDetail.vue'),
    meta: {
      title: '商品详情'
    }
  }
]

export default routes