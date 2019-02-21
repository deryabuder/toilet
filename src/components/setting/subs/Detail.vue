<template>
<transition name='slider'>
    <div class="detail">
      <setting-header title="功能介绍"></setting-header>
      <div class="wrapper" ref='wrapper'>
        <div class="content">
          <div>
            <img class="detail_img" src="../../../../static/img/map.png">
          </div>
          <div>
            <img class="detail_img" src="../../../../static/img/reading.png">
          </div>
          <div>
            <img class="detail_img" src="../../../../static/img/weather.png">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SettingHeader from '../../../base/SettingHeader.vue'
import Bscroll from 'better-scroll'
export default {
  data () {
    return {}
  },
  components: {
    SettingHeader
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style>
.detail {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #fff;
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
}
.detail_img {
  width: 80%;
  margin-bottom: 30px;
}
/* 实现了打开页面时，从右向左滑出现，关闭页面时，从左向右消失。 */
.slider-enter-active, .slider-leave-active {
  transition: all 0.3s;
}
.slider-enter, .slider-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
