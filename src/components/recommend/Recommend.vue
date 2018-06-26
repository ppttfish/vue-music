<template>
  <div class="recommend">
    <div v-if="sliderImgList.length" class="slider-wrapper">
      <slider>
        <div
            v-for="item of sliderImgList"
            :key="item.id"
            >
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from 'base/slider/Slider'
export default {
  name: 'Recommend',
  data () {
    return {
      sliderImgList: {}
    }
  },
  created () {
    this._getRecommend()
  },
  components: {
    Slider
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderImgList = res.data.slider
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
