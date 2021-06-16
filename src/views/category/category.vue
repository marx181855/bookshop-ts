<template>
  <van-nav-bar title="图书分类" left-text="返回" left-arrow @click-left="onClickLeft">
  <template #right>
    <van-icon name="search-o" size="18" />
  </template>
</van-nav-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";


export default defineComponent({
  setup() {
    const router = useRouter()
    const onClickLeft = () => {
      router.go(-1)
    }
    return {
      onClickLeft
    };
  },
});
</script>

<style scoped>

</style>