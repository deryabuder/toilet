<template>
  <transition name='slider'>
    <div class="help">
      <setting-header title="帮助中心"></setting-header>
      <div class='wrapper' ref='wrapper'>
        <div class='help_content'>
          <p>Q: 该APP是开发者是公司团队还是独立开发者</p>
          <p>A: 独立开发者</p>
          <p>Q: 该APP使用的场景是什么?</p>
          <p>A: 当身处陌生环境,又出现内急的情况,可使用该APP找倒附近的厕所.</p>
          <p>Q: 数据的来源是什么?</p>
          <p>A: 该APP的数据来源主要是高德地图提供的数据服务.</p>
          <p>Q: 能否保证数据的准确性?</p>
          <p>A: 高德地图提供的数据服务是相对很精准的,但是不包括用户手机GPS定位不准的情况.</p>
          <p>Q: 其他</p>
          <p>A: 如有其他问题,可发送邮件到wlhmyit@126.com .</p>
          <p>......</p>
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
.help {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #fff;
}
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
}
.help_content {
  text-align: left;
  font-size: 16px;
  line-height: 25px;
  color: #666;
}
.help_content p {
  margin: 10px;
}
.slider-enter-active, .slider-leave-active {
  transition: all 0.3s;
}
 /* enter和leave-to两个状态时这个页面是在右侧的 */
.slider-enter, .slider-leave-to {
  transform: translate3d(100%, 0, 0)
}
</style>
