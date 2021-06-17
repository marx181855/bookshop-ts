<template>
  <div class="category-container">
    <div class="search-bar">
      <van-search
        v-model="searchKeyword"
        show-action
        label="书籍"
        placeholder="请输入搜索关键词"
        background="#42b983"
        input-align="center"
        shape="round"
        clearable
        @clear="clearSearchInputContent"
        clear-trigger="always"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div id="mainbox">
      <div class="order-tab">
        <van-tabs v-model:active="currentActiveTab" @click="switchTab">
          <van-tab v-for="(v, k, i) in tabTypes" :title="v" :key="i" :name="k">
          </van-tab>
        </van-tabs>
      </div>
      <van-sidebar class="leftmenu" v-model="currentActiveSidebar">
        <van-collapse v-model="currentActiveCollapse" accordion>
          <van-collapse-item
            v-for="(item, index) in categoryList"
            :key="index"
            :title="item.name"
            :name="item.name"
          >
            <van-sidebar-item
              v-for="sub in item.children"
              :key="sub.id"
              :title="sub.name"
              @click="getCategoryGoodsList(sub.id)"
            />
          </van-collapse-item>
        </van-collapse>
      </van-sidebar>

      <div class="goodslist better-scroll-wrapper">
        <div class="content better-scroll-content">
          <van-card
            @click="
              $router.push({ path: '/goodDetail', query: { id: item.id } })
            "
            v-for="item in goodsList"
            :key="item.id"
            :num="item.comments_count"
            :tag="item.comments_count >= 0 ? '流行' : '标签'"
            :price="item.price"
            :desc="item.updated_at"
            :title="item.title"
            :thumb="item.cover_url"
            :lazy-load="true"
          />
        </div>
      </div>
      <div class="tip-text" v-show="!goodsList.length">
        <p>暂时没有商品哦.......</p>
      </div>
    </div>
    <BackTop @backToTopClick="backToTop" v-show="isShowBackToTopIcon"></BackTop>
  </div>
</template>

<script>

import { defineComponent, computed, nextTick, onMounted, reactive, toRefs } from 'vue'
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import Pullup from "@better-scroll/pull-up";
BScroll.use(MouseWheel).use(Pullup);
import { Toast } from 'vant'
import BackTop from 'components/backToTop.vue'
import { getCategoryData, getCategoryGoods, searchProduct } from 'api/category'

export default defineComponent({
  components: {
    BackTop
  },
  setup() {
    const state = reactive({
      searchKeyword: '',
      tabTypes: { sales: "销量排序", price: "价格排序", comments_count: "评论排序" },
      currentActiveTab: "sales",
      currentActiveSidebar: 0,
      currentActiveCollapse: 0,
      currentCategoryId: 0,
      categoryList: [],
      goodsData: {
        sales: { page: 1, list: [] },
        price: { page: 1, list: [] },
        comments_count: { page: 1, list: [] }
      },
      isShowBackToTopIcon: false
    })

    const debounce = (func, delay) => {
      let timer = null
      console.log('我是防抖动函数')
      return function () {
        let firstTriggle = !timer
        if (firstTriggle) {
          func()
        }
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
        }, delay)
      }
    }

    const onSearch = debounce(() => {
      console.log('搜索中', state.searchKeyword.value)
      searchProduct(state.searchKeyword.value, state.currentActiveTab).then((res) => {
        console.log(res)
        state.goodsData[state.currentActiveTab].list = res.state.goodsData.data
      })
    }, 2000)

    const clearSearchInputContent = () => {
      console.log('清除内容')
    }

    const goodsList = computed(() => {
      return state.goodsData[state.currentActiveTab].list
    })

    const initData = () => {
      getCategoryGoods('sales', state.currentCategoryId).then((res) => {
        console.log(res)
        state.goodsData.sales.list = res.goods.data
      })
      getCategoryGoods('price', state.currentCategoryId).then((res) => {
        state.goodsData.price.list = res.goods.data
      })
      getCategoryGoods('comments_count', state.currentCategoryId).then((res) => {
        state.goodsData.comments_count.list = res.goods.data
      })
      getCategoryData().then((res) => {
        state.categoryList = res.categories
      })
    }

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
        state.isShowBackToTopIcon = -position > 300
      });
      betterScroll.on("pullingUp", pullingUpHandler);
    };

    const pullingUpHandler = async () => {
      console.log("上拉中ing");
      const page = state.goodsData[state.currentActiveTab].page + 1;
      getCategoryGoods(state.currentActiveTab, state.currentCategoryId, page).then((res) => {
        state.goodsData[state.currentActiveTab].list.push(
          ...res.goods.data
        );
        state.goodsData[state.currentActiveTab].page += 1;
      });
      betterScroll.finishPullUp();
      betterScroll.refresh();
    };

    onMounted(() => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      initData()
      initBetterScroll()
      Toast.clear()
    })

    // 排序选项卡
    const switchTab = () => {
      nextTick(() => {
        // 重新计算高度
        betterScroll && betterScroll.refresh()
      })
    }
    // 通过分类得到商品
    const getCategoryGoodsList = (categoryId) => {
      state.currentCategoryId = categoryId
      console.log('当前的categoryId：' + categoryId)
      getCategoryGoods('sales', state.currentCategoryId).then((res) => {
        state.goodsData.sales.list = res.goods.data
      })
      getCategoryGoods('price', state.currentCategoryId).then((res) => {
        state.goodsData.price.list = res.goods.data
      })
      getCategoryGoods('comments_count', state.currentCategoryId).then((res) => {
        state.goodsData.comments_count.list = res.goods.data
      })
      nextTick(() => {
        // 重新计算高度
        betterScroll && betterScroll.refresh()
      })
    }

    const backToTop = () => {
      betterScroll.scrollTo(0, 0, 500)
    }
    
    return {
      ...toRefs(state),
      onSearch,
      clearSearchInputContent,
      switchTab,
      getCategoryGoodsList,
      goodsList,
      backToTop,
    }
  }
})
</script>

<style lang="scss" scoped>
#mainbox {
  .order-tab {
    position: fixed;
    z-index: 99;
    width: 100%;
    right: 0;
    padding-left: 130px;
    background: white;
  }
  .leftmenu {
    position: fixed;
    top: 89px;
    width: 130px;
    bottom: 50px;
    scrollbar-width: none;
  }
  .leftmenu::-webkit-scrollbar {
    display: none;
  }
  .goodslist {
    position: fixed;
    left: 130px;
    top: 89px;
    right: 10px;
    bottom: 50px;
    overflow: hidden;
    .content {
      padding-bottom: 50px;
    }
  }
  .tip-text {
    position: fixed;
    left: 130px;
    top: 89px;
    bottom: 50px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
