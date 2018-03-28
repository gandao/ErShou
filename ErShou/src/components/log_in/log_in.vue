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
        <div class="input"><span>账号</span><input v-model="user.account" type="text"/></div>
        <div class="input"><span>密码</span><input v-model="user.password" type="password" /></div>
        <div class="btn">
          <span class="one" @click.stop.prevent="is_mailbox_check_show = true; option = 0"><a href="#">我要注册</a></span>|
          <span class="one second" @click.stop.prevent="is_mailbox_check_show = true; option = 1;"><a href="#">忘记密码</a></span>
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
        <div v-if="is_prompt_show" class="prompt_wrapper" ><prompt :message="prompt_message" v-on:toggle_prompt="fun_prompt"></prompt></div>    
    </transition>
    <transition name="mailbox_check">
      <div v-if="is_mailbox_check_show" class="mailbox_check">
        <div class="wrapper_1">
          <div class="title_1">邮箱验证</div>
          <div class="mail_content">
            <div class="wrapper2">
              <span class="name">邮箱</span>
              <input type="text" v-model="user_proving.account" />
              <span @click.stop.prevent="fun_get_recode" class="message"><a href="#">获取验证码</a></span>
            </div>
            <div class="wrapper2">
              <span class="name">验证码</span>
              <input type="text" />
            </div>
            <div class="btn">
              <span @click.stop.prevent="is_register_code_find_show = true"><a href="#">确定</a></span>
              <span @click.stop.prevent="is_mailbox_check_show = false"><a href="#">取消</a></span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="register_code_find">
      <div v-if="is_register_code_find_show" class="register_code_find">
        <div class="wrapper">
          <div class="title">{{message_register_code}}</div>
          <div class="register_content">
            <div class="wrapper_2"><span>邮箱</span><input v-model="user_proving.account" type="text"></div>
            <div class="wrapper_2"><span>设置密码</span><input v-model="user_proving.password" type="text"></div>
            <div class="wrapper_2"><span>确认密码</span><input v-model="user_proving.password_ok" type="text"></div>
            <div class="btn">
              <span @click.stop.prevent="fun_register_code"><a href="#">确定</a></span>
              <span @click.stop.prevent="is_register_code_find_show = false"><a href="#">取消</a></span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import tip from "../tip/tip.vue"
import prompt from "../prompt/prompt.vue"
export default {
  props: ["user_status"],
  data() {
      return {
          is_tip_show: false,
          is_prompt_show: false,
          prompt_message: "",
          is_mailbox_check_show: false,
          is_register_code_find_show: false,
          user: {
            account: "",
            password: ""
          },
          option: 0,
          message_register_code: "",
          user_proving: {
            account: "",
            recode: "",
            password: "",
            password_ok: ""
          }
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
        if (this.user.account !== "" && this.user.password !== "") {
          let that = this
            let option = {}
            option.withCredentials = true
            option.url = '/logIn'
            option.data = this.user
            option.method = "put"
            
            that.$http(option)
            .then((response) => {
                if (response.data.id !== -1) {
                    // that.datas.user = response.data
                    that.user_status.is_login = true
                    that.$router.push({name: 'home_page'})
                }
                else {
                    that.prompt_message = response.data.value
                    that.is_prompt_show = true
                }
            },
            (fileData) => { 
                that.prompt_message = '网络请求发送失败'
                that.is_prompt_show = true
            })
        } else {
          this.prompt_message = "请将账户信息填写完整"
          this.is_prompt_show = true
        }
      },
      fun_get_recode() {
        if (this.user_proving.account === "") {
            this.prompt_message = "请输入邮箱"
            this.is_prompt_show = true
        } else {
          let option = {}
          let accounts = {}
          let that = this
          accounts.account = this.user_proving.account
          option.method = 'put'
          option.data = accounts
          option.headers = {"Content-Type": "application/json;charset=utf-8"}
          option.withCredentials = true
          if (this.option === 0) {
              option.url = "/unusedgoods/logIn_account_proving_new"
          }
          else option.url = "/unusedgoods/logIn_account_proving_code"
          this.$http(option).then(function (successData) {
                if (successData.data.id === -1) {
                    that.prompt_message = successData.data.value
                } else {
                    that.prompt_message = "已发送"
                    if (that.option === 0) {
                      that.message_register_code = "用户注册"
                      that.is_register_code_find_show = true
                    } else {
                      that.message_register_code = "重设密码"
                    }
                    that.is_register_code_find_show = true
                    that.is_mailbox_check_show = false
                }  
                that.is_prompt_show = true             
                }
                ,(fileData) => { 
                  that.prompt_message = '网络请求发送失败'
                  that.is_prompt_show = true
                })
        }
      },
      fun_register_code() {
        let that = this
        if (this.user_proving.password === this.user_proving.password_ok && this.user_proving.password !== '') {
          let option = {}
          let data = {}
          data.account = this.user_proving.account
          data.password = this.user_proving.password
          option.data = data
          option.method = 'put'
          if (this.option === 0) {
              option.url = "/unusedgoods/logIn__new"
          }
          else option.url = "/unusedgoods/logIn_code"
          this.$http(option).then(function (successData) {
                  if (successData.data.id === 1) {
                      that.is_register_code_find_show = false
                      if (that.option === 0) {
                          that.prompt_message = "注册成功" 
                      } else {
                          that.prompt_message = "修改成功"
                      }
                  } else {
                      that.prompt_message = successData.data.value
                  }
                  that.is_prompt_show = true },
                  (fileData) => { 
                    that.prompt_message = '网络请求发送失败'
                    that.is_prompt_show = true
                  })
              }
        else {
            if (this.user_proving.password === '' || this.user_proving.password_ok === '') {
              that.prompt_message = "请输入完整信息"
            }
            else if (this.user_proving.password !== this.user_proving.password_ok) {
                that.prompt_message = "密码不一致"
            }
            that.is_prompt_show = true
        }
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
  .mailbox_check{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    &.mailbox_check-enter,&.mailbox_check-leave-to{
      transform: scale(0,0);
    }
    &.mailbox_check-enter-to,&.mailbox_check-leave{
      transform: scale(1,1);
    }
    &.mailbox_check-enter-active,&.mailbox_check-leave-active{
      transition: all 0.28s ease-in-out;
    }
    .wrapper_1{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      .title_1{
        width: 100%;
        background: @main_color;
        text-align: center;
        line-height: 32px;
        font-size: @p2;
        font-weight: 700;
        color: #fff;
        letter-spacing: 2px;
        border-radius: 4px 4px 0 0;
      }
      .mail_content{
        height: 120px;
        background: #fff;
        padding: 10px 8px;
        .wrapper2{
          font-size: 0;
          &:first-child{
            margin-top: 15px;
            margin-bottom: 20px;
          }
          .name{
            display: inline-block;
            font-size: @p3;
            color: #616161;
            width: 50px;
            margin-right: 5px;
            margin-left: 20px;
          }
          input{
              width: 40%;
              outline: none;
              border: 1px solid @main_color;
              height: 20px;  
              border-radius: 2px;
              text-indent: 10px;
              font-size: @p4;
              color:@main_color;
              letter-spacing: 1px;
              &:focus{
              color:@main_color;
              }
              &:last-child{
                width: 63%;
              }
          }
          .message{
            margin-left: 10px;
            a{
              font-size: @min_size;
              color: @main_color;
              &:hover{
                color: @font_hover_color;
              }
            }
          }
        }
        .btn{
          position: absolute;
          bottom: 18px;
          right: 35px;
          font-size: @p4;
          span {
            padding: 2px 6px;
            background: @main_color;
            box-sizing: border-box;
            border-radius: 2px;
            border: 1px solid @main_color;
            a{
              color: #fff;
            }
            &:first-child{
              margin-right: 10px;
              &:hover{
                background: @font_hover_color;
                border: 1px solid @font_hover_color;
              }
            }
            &:last-child{
              background: #fff;
              &:hover{
                a{
                  color: @font_hover_color;
                }
              }
              a{
                color: @main_color;

              }
            }
          }
        }
      }
    }
  }
  .register_code_find{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    .wrapper{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      .title{
        width: 100%;
        background: @main_color;
        text-align: center;
        line-height: 32px;
        font-size: @p2;
        font-weight: 700;
        color: #fff;
        letter-spacing: 2px;
        border-radius: 4px 4px 0 0;
      }
      .register_content{
        height: 150px;
        background: #fff;
        padding: 10px 8px;
        .wrapper_2{
          margin-top: 10px;
          font-size: 0;
          margin-bottom: 15px;
          span{
            display: inline-block;
            font-size: @p3;
            color: #616161;
            width: 70px;
            margin-right: 5px;
            margin-left: 20px;
          }
          input{
              width: 60%;
              outline: none;
              border: 1px solid @main_color;
              height: 20px;  
              border-radius: 2px;
              text-indent: 10px;
              font-size: @p4;
              color:@main_color;
              letter-spacing: 1px;
              &:focus{
              color:@main_color;
              }
          }
        }
        .btn{
          position: absolute;
          bottom: 18px;
          right: 35px;
          font-size: @p4;
          span {
            padding: 2px 6px;
            background: @main_color;
            box-sizing: border-box;
            border-radius: 2px;
            border: 1px solid @main_color;
            a{
              color: #fff;
            }
            &:first-child{
              margin-right: 10px;
              &:hover{
                background: @font_hover_color;
                border: 1px solid @font_hover_color;
              }
            }
            &:last-child{
              background: #fff;
              &:hover{
                a{
                  color: @font_hover_color;
                }
              }
              a{
                color: @main_color;

              }
            }
          }
        }
      }
    }
    &.register_code_find-enter,&.register_code_find-leave-to{
      transform: scale(0,0);
    }
    &.register_code_find-enter-to,&.register_code_find-leave{
      transform: scale(1,1);
    }
    &.register_code_find-enter-active,&.register_code_find-leave-active{
      transition: all 0.28s ease-in-out;
    }
  }
}
</style>