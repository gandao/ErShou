<template>
  <div id="main">
    <!-- <carouselfigure v-show="true" :img-data=img_data></carouselfigure> -->
    <vheader></vheader>
    <div class="main_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import carousel_figure from "../carousel_figure/carousel_figure"
import header from "../header/heade"
export default {
  data() {
    return {
      img_data: [".Image/banner2.png",".Image/banner3.png"]
    }
  },
  components: {
    carouselfigure: carousel_figure,
    vheader: header
  }
}
</script>
<style lang="less"  type="text/less">
#main{
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_content{
    flex: 1;
  }
}
</style>
