<template>
  <div id="app">
    <home-header></home-header>
    <home-tab></home-tab>
    <router-view/>
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
