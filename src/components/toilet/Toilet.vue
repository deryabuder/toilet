<template>
  <div class='toilet'>
    <iframe src='../../../static/html/nearby.html' class='toilet-html'></iframe>
  </div>
</template>

<script type="text/javascript">
import HtmlPanel from '../../base/HtmlPanel'
export default {
  data () {
    return {
      url: ''
    }
  },
  components: {
    HtmlPanel
  }
}
</script>

<style>
.toilet {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40px;
}
.toilet-html {
  width: 100%;
  height: 100%;
}
</style>
