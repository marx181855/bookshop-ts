<template>
  <div class="home-container">
    <van-nav-bar
      title="图书商城"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div
      class="tab"
      style="z-index: 1; position: fixed; left: 0; right: 0"
      v-if="isTabFixed"
    >
      <van-tabs v-model:active="currentActiveTab" @click="switchTab">
        <van-tab v-for="(v, k, i) in tabTypes" :title="v" :key="i" :name="k">
        </van-tab>
      </van-tabs>
    </div>
    <div class="middle better-scroll-wrapper">
      <div class="content better-scroll-content">
        <div ref="bannerRef">
          <div class="swipe">
            <van-swipe :autoplay="3000" lazy-render>
              <van-swipe-item v-for="item in swipeData" :key="item.id">
                <img v-lazy="item.img_url" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="recommend">
            <van-grid :gutter="10" icon-size="65px">
              <van-grid-item
                v-for="(item, index) in recommendData.slice(0, 4)"
                :key="index"
                :icon="item.cover_url"
                :text="item.title"
                @click="
                  $router.push({ path: '/goodDetail', query: { id: item.id } })
                "
              />
            </van-grid>
          </div>
        </div>
        <div class="tab">
          <van-tabs v-model:active="currentActiveTab" @click="switchTab">
            <van-tab
              v-for="(v, k, i) in tabTypes"
              :title="v"
              :key="i"
              :name="k"
            >
            </van-tab>
          </van-tabs>
        </div>
        <goodsList :list="goodsList"></goodsList>
      </div>
    </div>
    <back-to-top
      @backToTopClick="backToTop"
      v-show="isShowBackToTopIcon"
    ></back-to-top>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  reactive,
  ref,
  toRefs,
} from "vue";
import { Toast } from "vant";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import Pullup from "@better-scroll/pull-up";
BScroll.use(MouseWheel).use(Pullup);
import goodsList from "components/goodsList.vue";
import backToTop from "components/backToTop.vue";
import { getHomeAllData, getHomeGoods } from "api/home";

export default defineComponent({
  components: {
    goodsList,
    backToTop,
  },
  setup() {
    const bannerRef = ref(null);
    const state = reactive({
      swipeData: [],
      recommendData: [],
      tabTypes: { sales: "畅销", new: "新书", recommend: "精选" },
      currentActiveTab: "sales",
      isTabFixed: false,
      goodsData: {
        sales: { page: 1, list: [] },
        new: { page: 1, list: [] },
        recommend: { page: 1, list: [] },
      },
      isShowBackToTopIcon: false,
    });

    const initData = () => {
      getHomeAllData().then((res) => {
        state.swipeData = res.slides;
        state.recommendData = res.goods.data;
      });
      getHomeGoods("sales").then((res) => {
        state.goodsData.sales.list = res.goods.data;
      });
      getHomeGoods("recommend").then((res) => {
        state.goodsData.recommend.list = res.goods.data;
      });
      getHomeGoods("new").then((res) => {
        state.goodsData.new.list = res.goods.data;
      });
    };

    let betterScroll;
    const initBetterScroll = () => {
      betterScroll = new BScroll(".better-scroll-wrapper", {
        probeType: 3,
        click: true,
        pullUpLoad: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300,
        },
      });
      betterScroll.on("scroll", (position) => {
        state.isTabFixed = state.isShowBackToTopIcon =
          -position.y > bannerRef.value.offsetHeight;
      });
      betterScroll.on("pullingUp", pullingUpHandler);
    };
    const pullingUpHandler = async () => {
      console.log("上拉中ing");
      const page = state.goodsData[state.currentActiveTab].page + 1;
      getHomeGoods(state.currentActiveTab, page).then((res) => {
        state.goodsData[state.currentActiveTab].list.push(...res.goods.data);
        state.goodsData[state.currentActiveTab].page += 1;
        console.log(state.goodsData[state.currentActiveTab].page);
      });
      betterScroll.finishPullUp();
      betterScroll.refresh();
    };

    onMounted(() => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      initData();
      initBetterScroll();
      Toast.clear();
    });

    const goodsList = computed(() => {
      console.log(state.currentActiveTab)
      console.log(state.goodsData[state.currentActiveTab].list);
      return state.goodsData[state.currentActiveTab].list;
    });

    const switchTab = () => {
      nextTick(() => {
        // 重新计算高度
        betterScroll && betterScroll.refresh();
      });
    };

    const backToTop = () => {
      console.log("回到顶部");
      betterScroll.scrollTo(0, 0, 500);
    };

    return {
      ...toRefs(state),
      bannerRef,
      switchTab,
      goodsList,
      backToTop,
    };
  },
});
</script>

<style lang="scss" scoped>
.middle {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 46px;
  overflow: auto;
  .tab {
    border-top: 8px solid #8080804d;
  }
  .swipe {
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
}
</style>