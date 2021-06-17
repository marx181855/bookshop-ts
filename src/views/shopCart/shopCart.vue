<template>
  <div class="shopCart-container">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
    </van-nav-bar>
    <div class="cart-box" v-if="list.length">
      <van-checkbox-group
        @change="groupChange"
        ref="checkboxGroup"
        v-model="result"
      >
        <van-swipe-cell
          :right-width="50"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="good-item">
            <van-checkbox :name="item.id" />
            <div class="good-img">
              <img :src="item.goods.cover_url" alt />
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
                  @change="onChange"
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
    <van-submit-bar
      v-if="list.length"
      class="submit-all"
      :price="total * 100"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox @click="allCheck" v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <div class="empty" v-if="!list.length">
      <img
        class="empty-cart"
        src="~assets/images/emptyShopCart.png"
        alt="空购物车"
      />
      <div class="title">购物车空空如也</div>
      <van-button round color="#1baeae" type="primary" black @click="goTo"
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
import { defineComponent, onMounted, reactive, toRefs, computed } from "vue";
import { Toast } from "vant";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    // 数据模型，状态
    const state = reactive({
      list: [],
      result: [],
      checkAll: true,
    });
    // const checkAll = ref(true)
    // 初始化购物车数据
    const init = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      getCartList("include=goods").then((res) => {
        console.log(res);
        state.list = res.data;
        state.result = res.data
          .filter((n) => n.is_checked === 1)
          .map((item) => item.id);
        console.log(state.result);
        Toast.clear();
      });
    };

    // 复选框改变处理
    const groupChange = (result) => {
      if (result.length === state.list.length) {
        state.checkAll = true;
      } else {
        state.checkAll = false;
      }
      console.log({ cart_ids: result });
      // 改变数据表的选中状态
      checkedCart({ cart_ids: result });
      state.result = result;
    };
    const allCheck = () => {
      if (state.checkAll) {
        state.result = state.list.map((item) => item.id);
      } else {
        state.result = [];
      }
    };
    // 前往购物
    const goTo = () => {
      router.push({ path: "/" });
    };
    // 删除商品
    const deleteGood = (id) => {
      deleteCartItem(id).then((res) => {
        init();
        // 改变vuex中的状态数量
        store.dispatch("updateCart");
      });
    };
    // 异步改变购物车数量
    const onChange = (value, detail) => {
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
    onMounted(() => {
      init();
    });
    // 通过计算熟悉计算总价
    const total = computed(() => {
      let sum = 0;
      state.list
        .filter((item) => state.result.includes(item.id))
        .forEach((item) => {
          sum += parseInt(item.num) * parseFloat(item.goods.price);
        });
      return sum;
    });
    // 创建订单
    const onSubmit = () => {
      if (state.result.length === 0) {
        Toast.fail("请选择商品进行结算");
        return "";
      } else {
        router.push({ path: "/createorder" });
      }
    };
    return {
      ...toRefs(state),
      goTo,
      onChange,
      groupChange,
      allCheck,
      deleteGood,
      total,
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
