<template>
  <div class="nav-header">
    <h1 class="header-title">我的音乐</h1>
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
      font-size: .36rem
      text-align: center
      color: $mainColor
</style>
