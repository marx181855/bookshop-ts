<template>
  <div class="recommends">
    <div class="card" v-for="item in list" :key="item.id" @click="$router.push({ path: '/goodDetail', query: { id: item.id } })">
      <img v-lazy="item.cover_url" alt="图片" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface GoodProps {
  id: number;
  title: string;
  price: string;
  cover_url: string;
  collects_count: number;
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<GoodProps[]>,
      default() {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.recommends {
  display: flex;
  margin: 10px 0;
  .card {
    flex: 1;
    img {
      width: 100%;
    }
    p{
      font-size: 12px;
    }
  }
}
</style>