import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@vant/touch-emulator';
import { Tabbar, TabbarItem,NavBar,Icon,Swipe, SwipeItem, Lazyload,Grid, GridItem,Tab, Tabs  } from 'vant'

createApp(App)
.use(Tabbar)
.use(TabbarItem)
.use(NavBar)
.use(Icon)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload, {
  loading: require('images/loading.jpg')
})
.use(Grid)
.use(GridItem)
.use(Tab)
.use(Tabs)



  .use(store)
  .use(router)
  .mount('#app')
