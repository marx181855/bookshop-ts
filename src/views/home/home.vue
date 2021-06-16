<template>
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
    <van-tabs v-model:active="currentTab" @click="tabSwitch">
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
              v-for="item in recommendData.slice(0, 4)"
              :key="item.id"
              :icon="item.cover_url"
              :text="item.title"
              @click="goToGoodDetailPage(item.id)"
            />
          </van-grid>
        </div>
      </div>
      <div class="tab">
        <van-tabs v-model:active="currentTab" @click="tabSwitch">
          <van-tab v-for="(v, k, i) in tabTypes" :title="v" :key="i" :name="k">
          </van-tab>
        </van-tabs>
      </div>
      <div class="good-list">
        <van-grid :column-num="2" icon-size="170px">
          <van-grid-item
            v-for="item in tabContent"
            :key="item.id"
            :icon="item.cover_url"
            @click="goToGoodDetailPage(item.id)"
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
    </div>
  </div>
  <back-to-top
    @backToTopClick="backToTop"
    v-show="isShowBackToTopIcon"
  ></back-to-top>
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
import { useRouter } from "vue-router";
import backToTop from "components/backToTop.vue";
import { getHomeAllData, getHomeGoods } from "api/home";
import { Toast } from "vant";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import Pullup from "@better-scroll/pull-up";
BScroll.use(MouseWheel).use(Pullup);

export default defineComponent({
  components: {
    backToTop,
  },
  setup() {
    // 路由返回
    const router = useRouter();
    const bannerRef = ref(null);
    const state = reactive({
      swipeData: [],
      recommendData: [],
      tabTypes: { sales: "畅销", newBook: "新书", recommend: "精选" },
      currentTab: "sales",
      isTabFixed: false,
      goods: {
        sales: { page: 1, list: [] },
        newBook: { page: 1, list: [] },
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
        state.goods.sales.list = res.goods.data;
      });
      getHomeGoods("recommend").then((res) => {
        state.goods.recommend.list = res.goods.data;
      });
      getHomeGoods("new").then((res) => {
        state.goods.newBook.list = res.goods.data;
      });
    };
    let betterScroll;
    const pullingUpHandler = async () => {
      console.log("上拉中ing");
      const page = state.goods[state.currentTab].page + 1;
      getHomeGoods(state.currentTab, page).then((res) => {
        state.goods[state.currentTab].list.push(...res.goods.data);
        state.goods[state.currentTab].page + 1;
      });
      betterScroll.finishPullUp();
      betterScroll.refresh();
    };
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
    onMounted(() => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      initData();
      initBetterScroll();
      Toast.clear();
    });
    const tabContent = computed(() => {
      console.log(state.goods[state.currentTab].list);
      return state.goods[state.currentTab].list;
    });
    const tabSwitch = () => {
      nextTick(() => {
        // 重新计算高度
        betterScroll && betterScroll.refresh();
      });
    };
    const goToGoodDetailPage = (id: number) => {
      router.push({ path: "/goodDetail", query: { id } });
    };
    const backToTop = () => {
      console.log("回到顶部");
      betterScroll.scrollTo(0, 0, 500);
    };

    return {
      ...toRefs(state),
      bannerRef,
      tabSwitch,
      tabContent,
      goToGoodDetailPage,
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
}
</style>