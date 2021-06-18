<template>
  <div class="shopCart-container">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
    </van-nav-bar>
    <keep-alive>
      <div class="cart-box" v-if="list.length">
        <van-checkbox-group
          @change="changeCheckboxStatus"
          ref="checkboxGroup"
          v-model="checkboxSelectResult"
        >
          <van-swipe-cell
            :right-width="50"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="good-item">
              <van-checkbox :name="item.id" />
              <div
                class="good-img"
                @click="
                  $router.push({
                    path: '/goodDetail',
                    query: { id: item.goods.id },
                  })
                "
              >
                <img :src="item.goods.cover_url" />
              </div>
              <div class="good-desc">
                <div class="good-title">
                  <span>{{ item.goods.title }}</span>
                  <span>x{{ item.goods.stock }}</span>
                </div>
                <div class="good-btn">
                  <div class="price">
                    <small>￥</small>
                    {{ item.goods.price + ".00" }}
                  </div>
                  <van-stepper
                    integer
                    :min="1"
                    :max="item.goods.stock"
                    :model-value="item.num"
                    :name="item.id"
                    async-change
                    @change="changeShopCartCount"
                  />
                </div>
              </div>
            </div>
            <template #right>
              <van-button
                square
                icon="delete"
                type="danger"
                class="delete-button"
                @click="deleteGood(item.id)"
              />
            </template>
          </van-swipe-cell>
        </van-checkbox-group>
      </div>
    </keep-alive>
    <van-submit-bar
      v-if="list.length"
      class="submit-all"
      :price="totalPrice * 100"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox @click="checkAllCheckbox" v-model="isCheckAllCheckbox"
        >全选</van-checkbox
      >
    </van-submit-bar>
    <div class="empty" v-if="!list.length">
      <img
        class="empty-cart"
        src="~assets/images/emptyShopCart.png"
        alt="空购物车"
      />
      <div class="title">购物车空空如也</div>
      <van-button
        round
        color="#1baeae"
        type="primary"
        black
        @click="$router.push({ path: '/' })"
        >前往选购</van-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  getCartList,
  modifyCart,
  checkedCart,
  deleteCartItem,
} from "api/shopCart";
import { defineComponent, onMounted, reactive, toRefs, computed, onActivated } from "vue";
import { Toast } from "vant";

export default defineComponent({
  name: "shopCart",
  setup() {
    const router = useRouter();
    const store = useStore();
    // 数据模型，状态
    const state = reactive({
      list: [],
      checkboxSelectResult: [],
      isCheckAllCheckbox: false,
    });

    const initData = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      getCartList("include=goods").then((res) => {
        Toast.clear();
        console.log(res);
        state.list = res.data;
        state.checkboxSelectResult = res.data
          .filter((n) => n.is_checked === 1)
          .map((item) => item.id);
        if (state.checkboxSelectResult.length === state.list.length) {
          state.isCheckAllCheckbox = true;
        } else {
          state.isCheckAllCheckbox = false;
        }
        console.log(state.checkboxSelectResult);
      });
    };
    onMounted(() => {
      initData();
    });
    onActivated(() => {
      initData()
    })
    // 复选框改变处理
    const changeCheckboxStatus = (checkboxSelectResult) => {
      if (checkboxSelectResult.length === state.list.length) {
        state.isCheckAllCheckbox = true;
      } else {
        state.isCheckAllCheckbox = false;
      }
      console.log({ cart_ids: checkboxSelectResult });
      // 改变购物车的选中状态
      checkedCart({ cart_ids: checkboxSelectResult });
      state.checkboxSelectResult = checkboxSelectResult;
    };
    const checkAllCheckbox = () => {
      if (state.isCheckAllCheckbox) {
        state.checkboxSelectResult = state.list.map((item) => item.id);
      } else {
        state.checkboxSelectResult = [];
      }
    };

    // 删除商品
    const deleteGood = (id: number) => {
      deleteCartItem(id).then(() => {
        initData();
        // 改变vuex中的状态数量
        store.dispatch("updateCart");
      });
    };
    // 异步改变购物车数量
    const changeShopCartCount = (value, detail) => {
      Toast.loading({
        message: "修改中...",
        forbidClick: true,
      });
      modifyCart(detail.name, { num: value }).then((res) => {
        // 将在onMounted中的list的num也要改
        state.list.forEach((item) => {
          if (item.id === detail.name) {
            item.num = value;
          }
        });
        Toast.clear();
        console.log(res);
      });
    };

    const totalPrice = computed(() => {
      let sum = 0;
      state.list
        .filter((item) => state.checkboxSelectResult.includes(item.id))
        .forEach((item) => {
          sum += parseInt(item.num) * parseFloat(item.goods.price);
        });
      return sum;
    });
    // 创建订单
    const onSubmit = () => {
      if (state.checkboxSelectResult.length === 0) {
        Toast.fail("请选择商品进行结算");
        return "";
      } else {
        router.push({ path: "/createorder" });
      }
    };
    return {
      ...toRefs(state),
      changeShopCartCount,
      changeCheckboxStatus,
      checkAllCheckbox,
      deleteGood,
      totalPrice,
      onSubmit,
    };
  },
});
</script>


<style lang='scss' scoped>
.cart-box {
  position: fixed;
  top: 60px;
  bottom: 100px;
  right: 0;
  left: 0;
  padding-left: 10px;
  overflow: auto;
  .good-item {
    display: flex;
    .good-img {
      img {
        width: 100px;
      }
    }
    .good-desc {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-around;
      .good-title {
        display: flex;
        justify-content: space-around;
      }
      .good-btn {
        display: flex;
        justify-content: space-around;
        .price {
          color: red;
        }
      }
    }
  }
}
.cart-box::-webkit-scrollbar {
  display: none;
}
.van-button {
  height: 100%;
}
.van-submit-bar {
  position: fixed;
  bottom: 50px;
  z-index: 0;
}
.empty {
  .empty-cart {
    width: 300px;
    margin: auto;
    margin-top: 50%;
  }
  .title {
    margin-bottom: 10px;
  }
}
</style>
