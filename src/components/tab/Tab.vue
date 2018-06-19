<template>
  <div class="nav-tab">
    <ul class="tab-items">
      <router-link v-for="item of items"
          :key="item.id"
          class="item"
          tag="li"
          :to="item.router"
      >
        <span>{{ item.name }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      items: [
        {
          id: '001',
          name: '推荐',
          router: '/recommend'
        },
        {
          id: '002',
          name: '歌手',
          router: '/singer'
        },
        {
          id: '003',
          name: '排行',
          router: '/rank'
        },
        {
          id: '004',
          name: '搜索',
          router: '/search'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .nav-tab
    .tab-items
      display: flex
      height: $navHeight
      line-height: $navHeight
      background-color: black
      .item
        display: inline-block
        flex: 1
        text-align: center
        color: #999
      .router-link-active
        span
          padding-bottom: .1rem
          color: $mainColor
          border-bottom: 2px solid $mainColor
</style>
