<template>
  <div id="user_feedback">
      <div class="title1">意见反馈</div>
      <div class="message1">
        <div class="wrapper1">
          <textarea v-model="user_feedback"></textarea>
        </div>
        <span class="btn" ><a href="#">提交</a></span>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_feedback: ''
    }
  }
}
</script>

<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_feedback{
    margin-top: 45px;
    margin-bottom: 20px;
  .message1{
    width: 80%;
    position: relative;
    padding-bottom: 40px;
    .wrapper1{
      min-height: 250px;
      border: 2px solid @main_color;
      textarea{
          min-height: 250px;
        color: #9E9CA1;
        display: block;
        font-size: 18px;
        letter-spacing: 1px;
        line-height: 20px;
        border: none;
        width: 95%;
        margin: auto;
        margin-top: 12px;
        height: 120px;
        outline:none;
        resize:none;
        overflow:hidden; 
      }
    }
    .btn{
      a{
         display: inline-block;
         color: #FFF;
         line-height: 25px;
         font-size: 12px;
         width: 45px;
         text-align: center;
         &:active{
          background: #EE8484;
         }
      }
      position: absolute;
      bottom: 0;
      right: 1px;
      background: @main_color;
      border-radius: 2px;
    }
  }
  .title1{
      font-size: 16px;
      width:  80%;
      line-height: 35px;
      background: @main_color;
      color: #FFF;
      text-indent: 10px;
      font-weight: bold;
      border-radius: 2px 2px 0 0;
  }
}

</style>