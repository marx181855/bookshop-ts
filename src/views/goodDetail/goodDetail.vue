<template>
  <van-nav-bar
    :title="'商品详情：' + $route.query.id"
    left-text="返回"
    left-arrow
    @click-left="$router.go(-1)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>