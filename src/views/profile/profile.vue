<template>
<van-nav-bar title="个人中心" left-text="返回" left-arrow  @click-left="onClickLeft">
 
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