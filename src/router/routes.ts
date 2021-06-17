import {RouteRecordRaw} from 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    isAuthRequired?: boolean
  }
}

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('views/home/home.vue'),
    meta: {
      title: '图书商城',
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
      title: '购物车',
      isAuthRequired: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue'),
    meta: {
      title: '个人中心',
      isAuthRequired: true
    }
  },
  {
    path: '/goodDetail',
    name: 'goodDetail',
    component: () => import('views/goodDetail/goodDetail.vue'),
    meta: {
      title: '商品详情',
 
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('views/auth/register.vue'),
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/auth/login.vue'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/createOrder',
    name: 'createOrder',
    component: () => import('views/order/createOrder.vue'),
    meta: {
      title: '创建订单',
      isAuthRequired: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('views/order/order.vue'),
    meta: {
      title: '订单列表',
      isAuthRequired: true
    }
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import('views/order/orderDetail.vue'),
    meta: {
      title: '订单详情',
      isAuthRequired: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('views/profile/about.vue'),
    meta: {
      title: '关于我们',
      isAuthRequired: true
    }
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('views/profile/collect.vue'),
    meta: {
      title: '用户收藏',
      isAuthRequired: true
    }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('views/address/address.vue'),
    meta: {
      title: '地址管理',
      isAuthRequired: true
    }
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: () => import('views/address/addressEdit.vue'),
    meta: {
      title: '地址编辑',
      isAuthRequired: true
    }
  },
]

export default routes