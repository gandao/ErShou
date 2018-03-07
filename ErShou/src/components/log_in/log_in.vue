<template>
  <div id="log_in">
    <div class="head">
      <div class="wrapper">
        <div class="img_wrapper">
          <img src="./logo.png"/>
        </div>
        <div class="title">
          <div class="big">二手交易平台</div>
          <div class="small">SECOND-HAND TRADING PLATFORM</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="title">ACCOUNT LOGIN</div>
        <div class="input"><span>账号</span><input/></div>
        <div class="input"><span>密码</span><input/></div>
        <div class="btn">
          <span class="one"><a href="#">我要注册</a></span>|
          <span class="one second"><a href="#">忘记密码</a></span>
          <span class="two" @click.stop.prevent="fun_log_in"><a href="#">登录</a></span>
        </div>
        <div class="logo">
          <span>账号</span>
          <span>登录</span>
        </div>
      </div>
    </div>
    <transition name="toggle">
        <div v-if="is_tip_show" class="tip_wrapper" ><tip v-on:toggle="fun_tip"></tip></div>    
        </transition>
        <transition name="toggle">
        <div v-if="is_prompt_show" class="prompt_wrapper" ><prompt v-on:toggle_prompt="fun_prompt"></prompt></div>    
    </transition>
  </div>
</template>
<script>
import tip from "../tip/tip.vue"
import prompt from "../prompt/prompt.vue"
export default {
  data() {
      return {
          is_tip_show: false,
          is_prompt_show: true
      }
    }, 
    components: {
        tip: tip,
        prompt: prompt
    },
    methods: {
      fun_submit() {
          this.is_tip_show = true
      },
      fun_prompt() {
        this.is_prompt_show = false
      },
      fun_log_in() {
       this.$router.push({name: 'home_page'})
      }
    }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#log_in{
  display: flex;
  flex-direction: column;
  height: 100%;
  .head{
    flex: 0 0 200px;
    background: #fff;
    .wrapper{
      width: 50%;
      margin: 0 auto;
      margin-top: 40px;
      text-align: center;
      .img_wrapper{
        display: inline-block;
        img{
          width: 80px;
          height: 80px;
        }
      }
      .title{
        display: inline-block;
        vertical-align: top;
        .big{
          line-height: 60px;
          font-size: @h1;
          letter-spacing: 5px;
        }
        .small{
          line-height: 15px;
          font-size: @min_size;
          letter-spacing: 1px;
        }
      }
    }
  }
  .content{
    flex: 1;
    background: @main_color;
    .wrapper{
      position: relative;
      width: 30%;
      margin: 0 auto;
      margin-top: 6px;
      background: rgba(245,250,250,0.23);
      padding: 10px 5px;
      border-radius: 3px;
      text-align: center;
      color: #fff;
      .title{
        font-size: @h3;
        letter-spacing: 1px;
        margin: 35px 0;
      }
      .input{
        span{
          display: inline-block;
          font-size: @p3;
          &:first-child{
            margin-bottom: 20px;
          }
        }
        input{
          margin-left: 8px;
          width: 52%;
          outline: none;
          height: 22px;  
          border-radius: 2px;
          vertical-align: middle;
          text-indent: 10px;
          font-size: @p3;
          color:@main_color;
          letter-spacing: 1px;
          &:focus{
          color:@main_color;
          }
        }
      }
      .btn{
        text-align: right;
        margin-right: 60px;
        margin-bottom: 25px;
        .one{
          display: inline-block;
          a{
            font-size: @p4;
            color: #fff;
            &:hover{
              color: @font_hover_color;
            }
            &:first-child{
              padding-right: 5px;
            }
          }
          &.second{
              margin-right: 12px;
          }
        }
        .two{
          display: inline-block;
          padding: 3px 8px;
          border-radius: 2px;
          background: @main_color;
          a{
            display: inline-block;
            font-size: @p4;
            font-weight: 700;
            color: #fff;
          }
          &:hover{
            background: @font_hover_color;
          }
        }
      }
      .logo{
        position: absolute;
        top: -46px;
        left: 50%;
        transform: translateX(-50%);
        color: @main_color;
        background: #fff;
        font-size: @h3;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 2px solid @main_color;
        text-align: center;
        span{
          line-height: 20px;
          display: block;
          &:first-child{
            margin-top: 18px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .tip_wrapper,.prompt_wrapper{
        .tip_prompt_wrapper_style();
  }
}
</style>