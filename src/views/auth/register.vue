<template>
  <div class="register-container">
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div style="margin-top: 50px">
      <div style="text-align: center; padding-top: 50px">
        <van-image
          width="19rem"
          fit="contain"
          :src="require('assets/images/authBanner.jpg')"
        />
        <van-form @submit="onSubmit">
          <van-field
            v-model="userInfo.name"
            name="name"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="userInfo.email"
            name="email"
            label="邮箱"
            placeholder="邮箱"
            :rules="[{ required: true, message: '请填写邮箱' }]"
          />
          <van-field
            v-model="userInfo.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="userInfo.password_confirmation"
            type="password"
            name="password_confirmation"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请填写一致的密码' }]"
          />
          <div style="margin: 16px">
            <div class="link-login" @click="$router.push({ path: '/login' })">
              已有账号，立即登录
            </div>
            <van-button
              color="#44b883"
              round
              block
              type="primary"
              native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { register } from 'api/auth'
import { Notify, Toast } from 'vant'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const userInfo = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    const onSubmit = () => {
      if (userInfo.password !== userInfo.password_confirmation) {
        Notify('两次密码不一致...')
      } else {
        register(userInfo).then((res) => {
          // eduwork@eduwork edu123
          if (res.status === 201) {
            Toast.success('注册成功...')
            setTimeout(() => {
              router.push({ path: '/login' })
            }, 1000)
          }
          userInfo.password_confirmation = ''
          userInfo.password = ''
        })
      }
    }

    return {
      userInfo,
      onSubmit
    }
  }
})
</script>

<style>
.link-login {
  font-size: 14px;
  margin-bottom: 20px;
  color: #42b983;
  float: left;
}
</style>
