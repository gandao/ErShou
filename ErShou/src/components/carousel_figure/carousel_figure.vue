<template>
  <div id="carousel_figure">
    <el-carousel height="300px"  trigger="click">
      <el-carousel-item v-for="(item,index) in imgData" :key="index">
        <img :src=item />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    props: {
        imgData: {
            type: Array
        }
    }
}
</script>
<style lang="less"  type="text/less">
#carousel_figure{
    margin-bottom: 5px;
    img{
        display: block;
        width: 100%;
        height: 100%;
        z-index: 999;
    }
}
</style>