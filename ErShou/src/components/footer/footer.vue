<template>
  <div id="footer">
    <div class="big_title">
        SICH UP SPECIAL PROMOTIONS
    </div>
    <div class="small_title">
        Get exclusive deals you want find anywhere else stright to your inbox!
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less"  type="text/less">
@import '../../common/less/index.less';
#footer{
    background: @main_color;
    color: #FFF;
    text-align: center;
    .big_title{
        margin-top: 15px;
        line-height: 25px;
        font-size: @p3;
        font-weight: bold;
        letter-spacing: 1px;
    }
    .small_title{
        margin-bottom: 10px;
        line-height: 15px;
        font-size: @min_size;
        letter-spacing: 1px;
    }
}
</style>
