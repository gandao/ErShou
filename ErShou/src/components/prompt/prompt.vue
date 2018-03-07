<template>
  <div id="prompt">
    <div class="wrapper">
      <div class="title">提示</div>
      <div class="content3">
        <div class="content_wrapper3">
            网络问题!
        </div>
        <span class="btn" @click.stop.prevent="fun_toggle"><a href="#">确定</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fun_toggle() {
      this.$emit('toggle_prompt')
    }
  }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#prompt{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 220px;
  .title{
    background: @main_color;
    text-align: center;
    color: #fff;
    font-size: @p3;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 30px;
    border-radius: 3px 3px 0 0;
  }
  .content3{
    position: relative;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border: 2px solid @main_color;
    border-top: none;
    background: #fff;
    .content_wrapper3{
      padding: 10px 10px;
      text-align: center;
      font-size: @p3;
      color: @main_color;
      padding-top: 20px; 
    }
    .btn{
        position: absolute;
        bottom: 10px;
        right: 10px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 2px;
        background: @main_color;
        a{
            display: inline-block;
            padding: 5px 8px;
            font-size: @min_size;
            font-weight: 700;
            letter-spacing: 1px;
            color: #fff;
        }
        &:hover{
          background: @font_hover_color; 
        }
    }
  }
}
</style>