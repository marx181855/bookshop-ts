<template>
  <div class="collect-container">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="box">
      <div class="content">
        <van-swipe-cell v-for="item in state" :key="item.id">
          <van-card
            :price="item.goods.price + '.00'"
            :desc="item.goods.description"
            :title="item.goods.title"
            class="goods-card"
            :thumb="item.goods.cover_url"
            @click="goToGoodDetai(item.goods_id)"
          />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="deleteCollect(item.goods_id)"
            />
          </template>
        </van-swipe-cell>
      </div>
      <div class="tip-text" v-show="!state.length"><p>暂时还没有收藏哦</p></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import { getMycollection, collectAndCancel } from 'api/collect'

export default defineComponent({

  setup() {
    let state = ref([])
    const router = useRouter()
    const initData = () => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      getMycollection().then(res => {
        console.log(res)
        state.value = res.data
        Toast.clear()
        console.log(state.value)
      })
    }
    onMounted(() => {
      initData()
    })
    const goToGoodDetai = (id) => {
      router.push({ path: '/detail', query: { id } })
    }
    const deleteCollect = (id) => {
      console.log('删除了')
      collectAndCancel(id).then(res => {
        if (res.status === 204) {
          initData()
          Toast.clear()
        }
      })
    }
    return {
      state,
      deleteCollect,
      goToGoodDetai
    }
  }
})
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
  .content {
    .van-card {
      border-bottom: 8px solid #80808052;
    }
    .delete-button {
      height: 100%;
    }
  }
  .tip-text {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
