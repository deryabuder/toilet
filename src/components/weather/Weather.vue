<template>
  <div class='weather'>
    <iframe src='../../../static/html/weather.html' class='weather-html'></iframe>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.weather {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40px;
}
.weather-html {
  width: 100%;
  height: 100%;
}
</style>
