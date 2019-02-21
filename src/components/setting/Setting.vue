<template>
  <div>
    <div class="logo">
      <img class="logo_img" src="./logo.jpg">
      <div>v1.0.1</div>
    </div>
    <router-link tag="div" to="/setting/detail" class="setting">功能介绍</router-link>
    <router-link tag="div" to="/setting/help" class="setting">帮助中心</router-link>
    <router-link tag="div" to="/setting/tips" class="setting">服务条款</router-link>
    <router-link tag="div" to="/setting/about" class="setting">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.logo {
  margin: 0 auto;
  padding: 40px 0;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid #ccc;
}
.logo_img {
  width: 150px;
  height: 150px;
}
.setting {
  text-align: left;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #666;
  border-bottom: 1px solid #ccc;
}
</style>
