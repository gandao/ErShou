<template>
  <div id="goods_detail">
      <div class="border"></div>
      <div class="title">
          <div class="big">小二详情</div>
          <div class="small">PRODUCT</div>
      </div>
      <div class="detail">
          <div class="wrapper">
              <div class="left">
                  <div class="big"><img :src="goods.imageUrls[img_index]"/></div>
                  <div class='small'>
                      <ul>
                          <li @mouseover="img_index = index" v-for="(item,index) in goods.imageUrls" :key="index"><img :src="item"/></li>
                      </ul>
                  </div>
                  <div class="date_desc">
                      <span>发布于: {{goods.uploadTime}}</span>
                      <span>{{goods.collecterCount}} 次收藏</span>
                  </div>
              </div>
              <div class="right">
                  <div class="title1">{{goods.name}}</div>
                  <div class="some_message">
                      <span>价格</span>
                      <span>$ {{goods.price}}</span>
                  </div>
                  <div class="some_message">
                      <span>原价</span>
                      <span>$ {{goods.originalPrice}}</span>
                  </div>
                  <div class="some_message">
                      <span>买家</span>
                      <span>{{goods.ownerName}}</span>
                  </div>
                  <div class="some_message">
                      <span>交易地点</span>
                      <span>{{goods.address}}</span>
                  </div>
                  <div class="some_message">
                      <span>交易方式</span>
                      <span>在线交易/线下交易</span>
                  </div>
                  <div class="detail_desc">
                      描述: <span>{{goods.introduction}}</span>
                  </div>
                  <div class="btn">
                      <span @click.stop.prevent="is_contact_show = true"><a href="#">联系方式</a></span>
                      <span @click.stop.prevent="fun_collection"><a href="#"><i class="el-icon-star-off"></i>想要</a></span>
                  </div>
              </div>
          </div>
      </div>
      <div class="title">
          <div class="big">买家留言</div>
          <div class="small">MESSAGE</div>
      </div>
      <div class="message">
          <textarea v-model="user_message"></textarea>
          <span @click.stop.prevent="fun_submit"><a href="#">提交</a></span>
      </div>
      <div class="section_two">
        <div class="wrapper">
            <div class="title">
                其他推荐
                <span class="btn">
                    <a @click.stop.prevent="is_section_two_show = false ; section_two_selected = 0;" :class="{'selected': section_two_selected === 0}" href="#"><i class="el-icon-arrow-left"></i></a>
                    <a href="#" @click.stop.prevent="is_section_two_show = true; section_two_selected = 1;" :class="{'selected': section_two_selected === 1}"><i class="el-icon-arrow-right"></i></a>
                </span>
            </div>
            <div class="content">
                <transition name = 'section_two'>
                    <ul v-show="!is_section_two_show">
                        <li v-for='(item,index) in other_recommend' :key="index"><good-item :data="item"></good-item></li>
                    </ul>
                </transition>
                <transition name = 'section_two'>
                    <ul v-show="is_section_two_show" class="second">
                        <li v-for='(item,index) in other_recommend' :key="index"><good-item :data="item"></good-item></li>
                    </ul>
                </transition>
            </div>
        </div>
      </div>
        <transition name="toggle">
        <div v-if="is_prompt_show" class="prompt_wrapper" ><prompt :message="prompt_message" v-on:toggle_prompt="fun_prompt"></prompt></div>    
      </transition>
      <transition name="fade">
        <div class="contact_wrapper" v-if="is_contact_show">
            <div class="title2">联系方式<span @click.stop.prevent="is_contact_show= false" class="colse"><a  href="#"><i class="el-icon-close"></i></a></span></div>
            <div class="detail">
            <div><span class="first">手机号:</span><span class="second">{{goods.contacts[2].contact}}</span></div>
            <div><span class="first">QQ号:</span><span class="second">{{goods.contacts[1].contact}}</span></div>
            <div><span class="first">微信号:</span><span class="second">{{goods.contacts[0].contact}}</span></div>
            </div>
        </div> 
    </transition>
  </div>
</template>
<script>
import goods_item from "../goods_item/goods_item"
import prompt from "../prompt/prompt.vue"
export default {
    props: ["user_status"], 
    data() {
        return {
            is_section_two_show: false,
            section_two_selected: 0,
            is_prompt_show: false,
            is_contact_show: false,
            prompt_message: "",
            user_message: "",
            goods: {},
            other_recommend: [],
            img_index: 0
        }
    }, 
    components: {
        goodItem: goods_item,
        prompt: prompt
    },
    methods: {
      fun_submit() {
        if (this.user_status.is_login) {
        if (this.user_message !== '') {
            let option = {}
            let data = {}
            let that = this
            data.id = this.goods.ownerId
            data.content = this.user_message
            option.data = data
            option.method = "put"
            option.url = '/unusedgoods/add_userdlg'
            that.$http(option).then(function (successData) {
              if (successData.data.id === 1) {
                that.prompt_message = '提交成功'
              }
              else {
                that.prompt_message = '后台可能出现了错误'
              }
              that.is_prompt_show = true
            },(fileData) => { console.log(fileData)})
        }
        else {
          this.prompt_message = '请先输入留言信息'
          this.is_prompt_show = true
        }
        }
        else {
            this.prompt_message = '请您先登录'
            this.is_prompt_show = true
        }
      },
      fun_collection() {
        if (this.user_status.is_login) {
            if (this.goods.isCollecte) {
                this.prompt_message = '已经收藏'
                this.is_prompt_show = true
                return 
            }
            let option = {}
            let that = this
            option.method = 'get'
            option.url = '/unusedgoods/add_save?id=' + that.$route.query.id
            that.$http(option).then(function (successData) {
                if (successData.data.id === 1) {
                    that.goods.isCollecte = true
                    that.prompt_message = '收藏成功'
                }
                else {
                    that.prompt_message = '后台可能出现了错误'
                }
                that.is_prompt_show = true
        },(fileData) => { console.log(fileData)})
      }
      else {
        this.prompt_message = '请您先登录'
        this.is_prompt_show = true
      }
      },
      fun_prompt() {
        this.is_prompt_show = false
      }
    },
    created() {
        let that = this
        that.$http.get("http://localhost:8080/unusedgoods/goods_detail?id=" + that.$route.query.id).then(function (successData) {
            that.$nextTick(() => {
                that.goods = successData.data
                console.log(that.goods)
            })
        },(fileData) => { console.log(fileData)})
        that.$http.get("http://localhost:8080/unusedgoods/goods_recommend?id=" + that.$route.query.id).then(function (successData) {
            that.$nextTick(() => {
                that.other_recommend = successData.data
            })
        },(fileData) => { console.log(fileData)})
        }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#goods_detail{
    position: relative;
    background: #fff;
    .border{
        height: 40px;
        background: @main_color;
    }
    .title{
        margin-top: 50px;
        text-align: center;
        .big{
            font-size: @h2;
            line-height: 50px;
            letter-spacing: 2px;
        }
        .small{
            font-size: @p4;
            letter-spacing: 1px;
        }
    }
    .detail{
        margin-top: 40px;
        .wrapper{
            display: flex;
            width: 70%;
            margin: 0 auto;
            position: relative;
        
            .left{
                position: relative;
                flex: 1;
                .big{
                    display: inline-block;
                    img{
                        width: 270px;
                        height: 330px;
                    }
                }
                .small{
                    position: absolute;
                    top: 0;
                    right: 50px;
                    li{
                        margin-bottom: 2px;
                        display: block;
                        img{
                            display: inline-block;
                            width: 60px;
                            height: 80px;
                        }
                        &:last-child{
                            margin-bottom: 0;
                        }
                        &:hover,&.selected{
                            border: 1px solid @main_color;
                        }
                    }
                }
                .date_desc{
                    position: absolute;
                    top: -20px;
                    left: 0;
                    font-size: @p4;
                    span:last-child{
                        margin-left: 10px;
                    }
                }
            }
            .right{
                flex: 1;
                .title1{
                    margin-bottom: 35px;
                    font-size: @p1;
                    color: @main_color;
                    text-align: center;
                }
                .some_message{
                    margin-bottom: 20px;
                    span{
                        display: inline-block;
                        &:first-child{
                            margin-left: 30px;
                            width: 120px;
                            font-size: @p3;
                        }
                        &:last-child{
                            margin-left: 50px;
                            font-size: @p3;
                            color: @main_color;
                        }
                    }
                }
                .detail_desc{
                    margin-left: 30px;
                    font-size: @p3;
                    span{
                        font-size: @p4;
                        line-height: 20px;
                    }
                }
                .btn{
                    position: absolute;
                    bottom: 0;
                    right: 80px;
                    span{
                        display: inline-block;
                        font-size: @p4;
                        background: @main_color;
                        padding: 5px 7px;
                        border-radius: 2px;
                        &:last-child{
                            margin-left: 10px;
                        }
                        a{
                            display: inline-block;
                            color: #fff;
                            i{
                                font-size: @p3;
                                margin-right: 3px;
                            }    
                        }
                        &:hover{
                            background: @font_hover_color;
                        }
                    }

                }
            }
            
        }
    }
    .message{
        position: relative;
        width: 70%;
        margin: 0 auto;
        border: 2px solid @main_color;
        margin-top: 20px;
        margin-bottom: 80px;
        padding-bottom: 20px;
        textarea{
            color: #9E9CA1;
            display: block;
            font-size: 18px;
            letter-spacing: 1px;
            line-height: 20px;
            border: none;
            width: 90%;
            margin: auto;
            margin-top: 12px;
            height: 120px;
            outline:none;
            resize:none;
            overflow:hidden; 
        }
        span{
            position: absolute;
            bottom: 5px;
            right: 20px;
            padding: 5px 7px;
            background: @main_color;
            font-size: @p4;
            border-radius: 2px;
            a{
                color: #fff;
            }
            &:hover{
                background: @font_hover_color;
            }
        }
    }
    .section_two{
        padding-bottom: 80px;
        background-color: #fff;
        .wrapper{
            width: 70%;
            margin: 0 auto;
            .title{
                position: relative;
                font-size: @p3;
                text-align: left;
                .btn{
                    position: absolute;
                    right: 10px;
                    top: 0;
                    a{
                        display: inline-block;
                        padding: 3px 4px;
                        border-radius: 1px;
                        color: #fff;
                        background-color: @main_color;
                        i{
                            font-size: @p3;
                            font-weight: 700;
                        }
                        &:hover,&.selected{
                            background-color:@font_hover_color; 
                        }
                    }
                }
            }
            .content{
                position: relative;
                margin-top: 40px;
                ul{
                    display: flex;
                    flex-direction: row;
                    margin-left: 17px;
                    li{
                        flex: 1;
                        text-align: center;
                    }
                    &.section_two-enter-active,&.section_two-leave-active{
                        transition: all 0.7s ease-in-out;
                        // position: absolute;
                    }
                    &.section_two-enter-to,&.section_two-leave{
                        transform: scale(1,1);
                        opacity: 1;
                    }
                    &.section_two-enter,&.section_two-leave-to{
                        transform: scale(0,0);
                        opacity: 0;
                    }
                    &.section_two-leave,&.section_two-leave-active{
                        position: absolute;
                         top: 0;
                        left: 0;
                        width: 100%;
                    }
                }
            }
        }
    }
    .tip_wrapper,.prompt_wrapper{
        .tip_prompt_wrapper_style();
    }
    .contact_wrapper{
        position: fixed;
        z-index: 999;
        width: 260px;
        border-radius: 2px;
        top: 39%;
        left:43%;
        border: 2px solid @main_color;
        background: #FFF;
        box-shadow: 1px 1px 50px rgba(0,0,0,.1);
        &.fade-enter-active,&.fade-leave-active{
        transition: all 0.28s ease-in-out;
        }
        &.fade-enter-to,&.fade-leave{
        transform: scale(1,1)
        }
            &.fade-enter,&.fade-leave-to{
        transform: scale(0,0)
        }
        .title2{
        padding: 10px 0;
        text-align: center;
        background: @main_color;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        .colse{
            position: absolute;
            background: #fff;
            top: -12px;
            right: -12px;
            display: inline-block;
            width: 26px;
            height: 26px;
            border: 2px solid @main_color;
            border-radius: 14px;
            &:hover{
            border: 2px solid #EE8484;
            i{
                color: #EE8484;
            }
            }
            i{
            color: @main_color;
            text-align: center;
            line-height: 28px;
            font-size: 15px;
            font-weight: bold;
            }
        }
        }
        .detail{
        position: relative;
        padding: 30px 0;
        width: 70%;
        margin: 0 auto;
        div{
            margin-bottom: 18px;
            &:last-child{
            margin-bottom: 0px;
            }
            .first{
            display: inline-block;
            font-size: 14px;
            color: #B6B5B5;
            width: 60px;
            }
            .second{
            font-size: 16px;
            color: @main_color;
            }
            // text-align: center;
        }
        }
  }
}
</style>