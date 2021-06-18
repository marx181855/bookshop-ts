<template>
  <div class="good-detail-container">
    <van-nav-bar
      :title="'商品详情：' + $route.query.id"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="box">
      <van-image
        width="375"
        fit="contain"
        :src="detail.cover_url"
        lazy-load
        height="375"
      />
      <van-card
        style="text-align: left"
        :num="detail.stock"
        :price="detail.price + '.00'"
        :desc="detail.description"
        :title="detail.title"
      >
        <template #tags>
          <van-tag plain type="danger">新书</van-tag>
          <van-tag plain type="danger">
            {{ detail.is_recommend ? "推荐" : "不推荐" }}
          </van-tag>
        </template>
        <template #footer>
          <van-action-bar>
            <van-action-bar-icon icon="cart-o" text="购物车" to="/shopcart" />
            <van-action-bar-icon
              :icon="collectIcon.icon"
              :text="collectIcon.text"
              color="#ff5000"
              @click="handleCollect"
            />
            <van-action-bar-button
              type="warning"
              text="加入购物车"
              @click="handleAddCart"
            />
            <van-action-bar-button
              type="danger"
              text="立即购买"
              @click="goToCart"
            />
          </van-action-bar>
        </template>
      </van-card>
      <van-tabs v-model="currentTab">
        <van-tab title="概述">
          <div class="content" v-html="detail.details"></div>
        </van-tab>
        <van-tab title="热评">
          <div v-if="detail.comments.length != 0">
            <div v-for="item in detail.comments" :key="item"></div>
          </div>
          <div v-else>暂时没有评论</div>
        </van-tab>
        <van-tab title="相关图书">
          <goodList :list="like_goods"></goodList>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  toRefs,
  onActivated,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { Toast } from "vant";
import { getDetail } from "api/goodDetail";
import { addCart } from "api/shopCart";
import { collectAndCancel } from "api/collect";
import goodList from "@/components/goodsList.vue";

export default defineComponent({
  name: "goodDetail",
  components: {
    goodList,
  },
  setup() {
    const store = useStore();
    let currentTab = ref(0);
    const route = useRoute();
    const router = useRouter();
    let book = reactive({
      detail: {
        id: "",
      },
      like_goods: [],
    });
    let collectIcon = reactive({
      icon: "",
      text: "",
    });
    let goodID = ref(0);
    const initData = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      goodID.value = Number(route.query.id);
      console.log(goodID.value);
      getDetail(goodID.value).then((res) => {
        Toast.clear();
        book.detail = res.goods;
        book.like_goods = res.like_goods;
        console.log(book.like_goods);
        if (res.goods.is_collect) {
          collectIcon.icon = "star";
          collectIcon.text = "已收藏";
        } else {
          collectIcon.icon = "star-o";
          collectIcon.text = "收藏";
        }
        console.log(res);
      });
    };
    onMounted(() => {
      initData();
    });
    // 收藏
    const handleCollect = () => {
      collectAndCancel(goodID.value).then((res) => {
        if (res.status === 201) {
          Toast.success("收藏成功");
          collectIcon.icon = "star";
          collectIcon.text = "已收藏";
        } else if (res.status === 204) {
          Toast.success("取消收藏成功");
          collectIcon.icon = "star-o";
        }
      });
    };
    // 添加购物车
    const handleAddCart = () => {
      addCart({
        goods_id: book.detail.id,
        num: 1,
      }).then((res) => {
        if (res.status === 204 || res.status === 201) {
          Toast.success("添加成功");
          // 设置store中 shopCartCount
          store.dispatch("updateCart");
        }
      });
    };
    // 立即购买
    const goToCart = () => {
      console.log(book.detail.id);
      addCart({
        goods_id: book.detail.id,
        num: 1,
      }).then((res) => {
        if (res.status === 204 || res.status === 201) {
          Toast.success("添加成功，显示购物车页面");
          // 设置store中 shopCartCount
          store.dispatch("updateCart");
          router.push({ path: "/shopcart" });
        }
      });
    };
    onActivated(() => {
      initData();

      console.log("我是商品", route.query.id);
      console.log(book.detail);
    });
    return {
      ...toRefs(book),
      currentTab,
      handleAddCart,
      goToCart,
      collectIcon,
      handleCollect,
    };
  },
});
</script>

<style lang="scss" scoped>
.box {
  overflow: auto;
  position: fixed;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
  .van-image {
    width: 375px;
    height: 375px;
  }
  .content {
    padding: 10px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .van-action-bar {
    position: relative;
  }
}
</style>
