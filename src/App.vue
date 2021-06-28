<template>
  <router-view v-slot="{ Component }" v-if="routerState">
    <keep-alive :exclude="['goodDetail']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <van-tabbar v-model="currentPath">
    <van-tabbar-item name="/" icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item name="/category" icon="apps-o" to="/category"
      >分类</van-tabbar-item
    >
    <van-tabbar-item
      name="/shopCart"
      icon="cart-o"
      :badge="$store.state.shopCartCount"
      to="/shopCart"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item name="/profile" icon="manager-o" to="/profile"
      >个人中心</van-tabbar-item
    >
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, provide, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import router from "./router";

export default defineComponent({
  setup() {
    const routerState = ref(true);
    const reload = {
      reload() {
        routerState.value = false;
        nextTick(() => {
          routerState.value = true;
        });
      },
    };
    provide("reload", reload);

    const route = useRoute();
    const currentPath = ref("/");
    watch(route, () => {
      currentPath.value = route.path;
    });

    const store = useStore();
    onMounted(() => {
      if (store.state.user.isLogin === true) {
        store.dispatch("updateCart");
      } else {
        store.state.shopCartCount = 0;
      }
    });
    return {
      currentPath,
      routerState,
    };
  },
});
</script>


<style lang="scss">
@import url("~@/assets/css/base.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  #app {
    width: 375px;
    height: 667px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 5px rgb(0 0 0 / 30%);
  }
}
</style>
