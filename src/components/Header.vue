<template>
  <div class="nav-header">
    <div class="header-title">我的音乐</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .nav-header
    height: $navHeight
    line-height: $navHeight
    background-color: black
    .header-title
      text-align: center
      color: #ffcd32
</style>
