<template>
  <div id="tip">
    <div class="wrapper1">
      <div class="title">请确认</div>
      <div class="content3">
        <div class="btn_wrapper">
          <span class="btn1" @click.stop.prevent="fun_btn(1)"><a href="#">确定</a></span>
          <span class="btn1" @click.stop.prevent="fun_btn(0)"><a href="#">取消</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    fun_btn(index) {
      if (index) {
        this.data.tip = true
      } else {
        this.data.tip = false
      }
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#tip{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 230px;
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
    .btn_wrapper{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .btn1{
      display: inline-block;
      box-sizing: border-box;
      border: 1px solid @main_color;
      border-radius: 3px;
      a{
        display: inline-block;
        font-size: @p4;
        font-weight: 700;
        color: @main_color;
        padding: 6px 9px;
      }
      &:hover{
        a{
          color: @font_hover_color;
        }
      }
      &:first-child{
        margin-right: 20px;
        background: @main_color;
        a{
          
          color: #fff;
        }
        &:hover{
          background: @font_hover_color; 
        }
      }
    }
  }
}
</style>