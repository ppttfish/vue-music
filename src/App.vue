<template>
  <div id="app">
    <home-header></home-header>
    <home-tab></home-tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import HomeHeader from 'components/header/Header'
import HomeTab from 'components/tab/Tab'
export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeTab
  }
}
</script>

<style>
</style>
