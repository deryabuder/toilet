<template>
  <div class='about'>
    <div class='about_content'>
      <div class='des'>如有问题，请联系</div>
      <div class='email'>904921115@qq.com</div>
      <div class='confirm' @click="confirm()">确认</div>
    </div>
  </div>
</template>

<script>
import SettingHeader from '../../../base/SettingHeader.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    SettingHeader
  },
  methods: {
    confirm () {
      this.$router.push('/setting')
    }
  }
}
</script>
// 弹出框的实现，也有遮罩层。
<style>
.about {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(222, 222, 222,0.5);
}
.about_content {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -70px;
  margin-left: -150px;
  width: 300px;
  height: 140px;
  background: #fff;
  border-radius: 15px;
  text-align: center;
}
.des {
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
  padding-top: 20px;
}
.email {
  font-size: 14px;
  line-height: 25px;
}
.confirm {
  font-size: 16px;
  font-weight: bold;
  color:royalblue;
  padding-top: 30px;
}
</style>
