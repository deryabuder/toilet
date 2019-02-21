<template>
  <div>
    <div v-if="loading"/>
    <html v-html="html"></html>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // 使用时请使用 :url.sync=""传值
  data () {
    return {
      loading: false,
      html: ''
    }
  },
  props: {
    url: {
      required: true
    }
  },
  watch: {
    url (value) {
      this.load(value)
    }
  },
  mounted () {
    this.load(this.url)
  },
  methods: {
    load (url) {
      if (url && url.length > 0) {
        // 加载中
        this.loading = true
        axios.get('../../static/html/nearby.html')
          .then(response => {
            console.log(response)
            this.loading = false
            // 处理HTML显示
            this.html = response.data
          })
          .catch(() => {
            this.loading = false
            this.html = '加载失败'
          })
      }
    }
  }
}
</script>

<style>
</style>
