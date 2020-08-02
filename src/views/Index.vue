<!--
 * @Author: angula
 * @Date: 2020-07-23 10:48:11
 * @LastEditTime: 2020-08-01 16:31:26
 * @FilePath: \working\vue-cli3 demo\src\views\Index.vue
-->
<template>
  <div>
    <HeadTop head-title="在线实习" go-back="true"></HeadTop>
    <div>
      <router-link to="/">返回首页</router-link>
    </div>
    <div>
      <router-link to="/u/login">登录</router-link>
    </div>
    <div>
      <!-- <router-link to="/u/bindMobile">绑定手机</router-link> -->
      <router-link to="/u/index">绑定手机</router-link>
    </div>
    <keep-alive>
      <div>
        <router-link to="/u/release">发布</router-link>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";

export default {
  name: "index",
  components: {
    HeadTop
  }
};
</script>

<style scoped></style>
