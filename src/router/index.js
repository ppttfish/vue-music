import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/Recommend'
import Singer from 'components/singer/Singer'
import Rank from 'components/rank/Rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    }
  ]
})
