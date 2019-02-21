<template>
  <div class='tab'>
    <router-link to='/toilet' class='tab-item'>
      <div><i class='icon icon-man-woman'></i></div>
      <div>卫生间</div>
    </router-link>
    <router-link to='/read' class='tab-item'>
      <div><i class='icon icon-book'></i></div>
      <div>阅读</div>
    </router-link>
    <router-link to='/weather' class='tab-item'>
      <div><i class='icon icon-cloud'></i></div>
      <div>天气</div>
    </router-link>
    <router-link to='/setting' class='tab-item'>
      <div><i class='icon icon-cog'></i></div>
      <div>设置</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.tab {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  // 让每个元素水平垂直居中在这里设置,而不是在下面
  align-items: center;
  vertical-align: middle;
  border-top: 1px solid #ccc;
  font-size: 12px;
  .tab-item {
    flex: 1;
    .icon {
      font-size: 18px;
    }
  }
  // router-link 标签在选中的时候，会自动给整个标签添加一个 router-link-active的class
  .router-link-active {
    color: rgb(13, 95, 250);
  }
}
</style>
