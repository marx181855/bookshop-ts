<template>
  <div class="about-container">
    <van-nav-bar
      title="关于我们"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="box">
      <div class="content">
        <p>还没想好要写什么....</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 45px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
}
</style>
