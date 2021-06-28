<template>
  <div class="good-list">
    <div
      class="card"
      v-for="item in list"
      :key="item.id"
      @click="goToDetailPage(item.id)"
    >
      <img v-lazy="item.cover_url" alt="图片" />
      <div class="title">{{ item.title }}</div>
      <span class="price">￥{{ item.price }}</span>
      <span class="collect"
        ><van-icon name="star-o" />{{ item.collects_count }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import { useRoute, useRouter } from "vue-router";

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
    const router = useRouter()
    const route = useRoute();
    const goToDetailPage = (id) => {
      console.log(route.fullPath)
      router.push({ path: '/goodDetail', query: { id} })
    }
    return {
      goToDetailPage
    };
  },
});
</script>

<style lang="scss" scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  .card {
    flex: 50%;
    display: flex;
    flex-wrap: wrap;
    img {
      flex: 100%;
      width: 100%;
    }
    .title {
      flex: 100%;
      font-size: 14px;
    }
    .price {
      flex: 50%;
      color: red;
      padding-left: 30px;
    }
    .collect {
      flex: 50%;
      padding-right: 40px;
    }
  }
}
</style>