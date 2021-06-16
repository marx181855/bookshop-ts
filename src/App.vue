<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item name="/" icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item name="/category" icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item name="/shopCart" icon="cart-o" badge="0" to="/shopCart">购物车</van-tabbar-item>
    <van-tabbar-item name="/profile" icon="manager-o" to="/profile">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute()
    const active = ref('/')
    watch(route,()=> {
      active.value = route.path
    })
    return {
      active
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
}

@media screen and (min-width: 768px) {
  #app {
    width: 375px;
    height: 667px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: grey;
    box-shadow: 3px 3px 5px rgb(0 0 0 / 30%);
  }
}
</style>
