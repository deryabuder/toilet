<template>
  <div class='header'>
    <i class='icon-chevron-left' @click="back()">设置</i>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    back () {
      this.$router.push('/setting')
    }
  }
}
</script>

<style>
.header {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.icon-chevron-left {
  position: absolute;
  left: 10px;
  top: 15px;
  color: #0066ff;
}
</style>
