import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '../store/index'
import { Notify } from 'vant'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next) => {
  if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
    Notify('您还没有登录，请先登录')
    return next('/login')
  } else {
    next()
  }
  document.title = to.meta.title
})
export default router
