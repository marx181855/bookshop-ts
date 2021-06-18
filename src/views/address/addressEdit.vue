<template>
  <div class="address-edit-box">
    <van-nav-bar
      title="地址编辑"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      :show-delete="type == 'edit'"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>

import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { areaList } from '@vant/area-data'

import { Toast } from 'vant'

import {
  addAddress,
  editAddress,
  deleteAddress,
  getAddressDetail
} from 'api/address'

export default defineComponent({

  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      areaList: {
        provice_list: {},
        city_list: {},
        county_list: {}
      },
      searchResult: [],
      addressInfo: {},
      type: 'add',
      addressId: '',
      title: ''
    })
    onMounted(() => {
      state.areaList = areaList
      console.log(areaList)

      const { type, addressId } = route.query
      state.type = type
      state.addressId = addressId

      if (type === 'edit') {
        Toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        getAddressDetail(addressId).then((res) => {
          console.log(res)
          const addressDetail = res
          let _areaCode = ''
          for (let code in areaList.county_list) {
            if (res.county === areaList.county_list[code]) {
              _areaCode = code
            }
          }
          state.addressInfo = {
            name: addressDetail.name,
            tel: addressDetail.phone,
            province: addressDetail.province,
            city: addressDetail.city,
            county: addressDetail.county,
            addressDetail: addressDetail.address,
            isDefault: !!addressDetail.is_default,
            areaCode: _areaCode
          }
          Toast.clear()
        })
      }
    })
    const title = computed(() => {
      return state.type === 'add' ? '新增地址' : '编辑地址'
    })
    const onSave = (content) => {
      console.log(content)
      const params = {
        name: content.name,
        phone: content.tel,
        province: content.province,
        city: content.city,
        county: content.county,
        address: content.addressDetail,
        is_default: content.isDefault ? 1 : 0
      }
      if (state.type === 'edit') {
        // 修改数据
        editAddress(state.addressId, params)
      } else {
        // 调用接口添加数据
        addAddress(params)
      }

      Toast('保存成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }

    const onDelete = () => {
      deleteAddress(state.addressId).then(() => {
        Toast('删除成功')
        setTimeout(() => {
          router.back()
        }, 1000)
      })
    }

    return {
      ...toRefs(state),
      onSave,
      onDelete,
      title
    }
  }
})
</script>

<style lang="scss" scoped>
.van-address-edit {
  background-color: #f7f8fa;
  position: fixed;
  top: 45px;
  bottom: 50px;
  width: 100%;
}
</style>
