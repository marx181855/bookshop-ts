<template>
  <div class="good-list">
    <van-grid :column-num="2" icon-size="170px">
      <van-grid-item
        v-for="(item, index) in list"
        :key="index"
        :icon="item.cover_url"
        @click="$router.push({ path: '/goodDetail', query: { id: item.id } })"
      >
        <template #text>
          <div class="good-info">
            <p>{{ item.title }}</p>
            <span class="price">￥{{ item.price }}</span>
            <span class="collect"
              ><van-icon name="star-o" />{{ item.collects_count }}</span
            >
          </div>
        </template>
      </van-grid-item>
    </van-grid>
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
.good-list {
  .good-info {
    p {
      font-size: 14px;
    }
    .price {
      color: red;
      margin-right: 10px;
    }
    .collect {
      .van-icon {
        font-weight: bold;
        padding: 2px;
      }
    }
  }
}
</style>