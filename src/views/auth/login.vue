<template>
  <div class="login-container">
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div style="margin-top: 50px">
      <div style="text-align: center; padding-top: 50px">
        <van-image
          lazy-load
          width="19rem"
          fit="contain"
          :src="require('assets/images/authBanner.jpg')"
        />
        <van-form @submit="onSubmit">
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

          <div style="margin: 16px">
            <div
              class="link-register"
              @click="$router.push({ path: '/register' })"
            >
              没有账号，立即注册
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

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { login } from "api/auth";
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const userInfo = reactive({
      email: "",
      password: "",
    });
    const onSubmit = (values) => {
      console.log("submit", values);
      login(userInfo)
        .then((res) => {
          // 将bookshopToken保存在本地window.localStorage setItem(key, value) getItem(key)
          window.localStorage.setItem("bookshopToken", res.access_token);
          // 在vuex isLogin
          store.commit("setIsLogin", true);
          store.dispatch("updateCart");
          Toast.success("登陆成功");

          userInfo.email = "";
          userInfo.password = "";
          setTimeout(() => {
            router.go(-1);
          }, 500);
          console.log(res);
        })
        .catch((err) => {
          console.log("错误信息：" + err);
        });
    };

    return {
      userInfo,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.link-register {
  font-size: 14px;
  margin-bottom: 20px;
  color: #42b983;
  float: left;
}
@media screen and (min-width: 768px) {
  .van-notify--danger {
    position: fixed;
    width: 375px;
    left: 0;
    right: 0;
    top: 43px;
    margin: auto;
  }
}
</style>
