<template>
  <div class="address-box">
    <van-nav-bar
      title="地址列表"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="tip-text" v-show="list.length == 0">
      <p>还没有地址信息，去添加吧！</p>
    </div>
    <div class="address-item">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="addAddress"
        @edit="editAddress"
        @select="selectAddress"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Toast } from 'vant'
import { getAddressList, setDefaultAddress } from 'api/address'

export default defineComponent({
  setup() {
    const router = useRouter()
    const state = reactive({
      chosenAddressId: '1',
      list: []
    })
    const initData = () => {
      Toast.loading('数据加载中...')
      getAddressList().then((res) => {
        state.chosenAddressId = res.data.filter((item) => {
          return item.is_default === 1
        })[0].id
        if (res.data.length === 0) {
          state.list = []
          return false
        }
        state.list = res.data.map(item => {
          return {
            id: item.id,
            name: item.name,
            tel: item.phone,
            address: `${item.province} ${item.city} ${item.county} ${item.address}`,
            isDefault: !!item.is_default
          }
        })
      })
      Toast.clear()

    }
    onMounted(() => {
      initData()

    })

    const addAddress = () => {
      router.push({
        path: '/addressedit',
        query: {
          type: 'add'
        }
      })
    }
    const editAddress = (item) => {
      console.log(item)
      router.push({
        path: '/addressedit',
        query: { type: 'edit', addressId: item.id }
      })
    }
    const selectAddress = (item) => {
      console.log('selectAddress', item)
      setDefaultAddress(item.id).then(res => {
        console.log(res)
      })
    }

    return {
      ...toRefs(state),
      addAddress,
      editAddress,
      selectAddress
    }
  }
})
</script>

<style lang="scss" scoped>
.tip-text {
  position: fixed;
  top: 45px;
  bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.address-item {
  position: fixed;
  top: 45px;
  bottom: 100px;
  overflow: auto;
  background-color: #f7f8fa;
  .van-radio__icon {
    display: none;
  }
  .van-address-list__bottom {
    bottom: 50px;
    .van-address-list__add {
      background-color: var(--color-tint);
      border: 1px solid var(--color-tint);
    }
  }
}
</style>
