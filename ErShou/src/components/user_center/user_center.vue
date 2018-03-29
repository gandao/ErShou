<template>
  <div id="user_center">
    <div class="big_img"><img src="./2.jpg"/></div>
    <div class="content">
      <div class="left">
        <div class="img_wrapper"><img src="./1.jpg"/></div>
        <div class="name">图样图森破</div>
        <ul class="menu">
          <li :class="{'select':menu_selected[0]}" @click.stop.prevent="fun_menu_item(0)"><a href="#"><i class="el-icon-goods"></i>我的商品</a></li>
          <li :class="{'select':menu_selected[1]}" @click.stop.prevent="fun_menu_item(1)"><a href="#"><i class="el-icon-edit-outline"></i>发布商品</a></li>
          <li :class="{'select':menu_selected[2]}" @click.stop.prevent="fun_menu_item(2)"><a href="#"><i class="el-icon-date"></i>个人信息</a></li>
          <li :class="{'select':menu_selected[3]}" @click.stop.prevent="fun_menu_item(3)"><a href="#"><i class="el-icon-goods"></i>我的留言</a></li>
          <li :class="{'select':menu_selected[4]}" @click.stop.prevent="fun_menu_item(4)"><a href="#"><i class="el-icon-star-on"></i>我的收藏</a></li>
          <li :class="{'select':menu_selected[5]}" @click.stop.prevent="fun_menu_item(5)"><a href="#"><i class="el-icon-document"></i>意见反馈</a></li>
          <li><a href="#"><i class="el-icon-back"></i>退出</a></li>
        </ul>
      </div>
      <div class="right">
        <div class="nav">
          当前位置: <span><a href="#">首页</a></span>  <span><a href="#">个人中心</a></span> <span><a href="#">我的商品</a></span>
        </div>
        <div class="content_1"><router-view v-on:tip_show="tip_show" v-on:prompt_show="prompt_show" :data='data'></router-view></div>
        
        <div class="title">
          <div class="big">二手交易平台 PERSONAL CENTER</div>
          <div class="small"><i class="el-icon-date"></i>2017.12.32</div>
        </div>
      </div>
    </div>
    <transition name="toggle">
      <div v-if="data.is_tip_show" class="tip_wrapper" ><tip :data = "data" v-on:toggle="fun_tip"></tip></div>    
    </transition>
    <transition name="toggle">
      <div v-if="data.is_prompt_show" class="prompt_wrapper" ><prompt :message="data.prompt_message" v-on:toggle_prompt="fun_prompt"></prompt></div>    
    </transition>
  </div>
</template>
<script>
import tip from "../tip/tip.vue"
import prompt from "../prompt/prompt.vue"
export default {
  data() {
    return {
      data: {
        tip_message: "",
        prompt_message: "",
        tip: false,
        is_tip_show: false,
        is_prompt_show: false
      },
      menu_selected: [false,false,false,false,false,false],
      menu_item: ["user_goods","user_add_goods","user_information","user_message","user_collection","user_feedback"]
    }
  },
   methods: {
      fun_menu_item(index) {
        this.$router.push({name: this.menu_item[index]})
      },
      fun_tip() {
        this.data.is_tip_show = !this.data.is_tip_show
      },
      fun_prompt() {
        this.data.is_prompt_show = false
      },
      tip_show() {
        this.data.is_tip_show = true
      },
      prompt_show() {
        this.data.is_prompt_show = true
      }
   },
   watch: {
     '$route'() {
       var path = this.$route.path
       for (var i = 0; i < this.menu_item.length; i++) {
         if (path.indexOf(this.menu_item[i]) !== -1) {
           for (var j = 0; j < this.menu_selected.length; j++) {
             this.menu_selected[j] = false
           }
           this.menu_selected[i] = true
           break
         }
       }
     }
   },
   components: {
     tip: tip,
     prompt: prompt
   }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_center{
  background: #fff;
  height: 100%;
  .big_img{
    height: 280px;
    img{
      display: block;
      width: 100%;
      height: 280px;
    }
  }
  .content{
    width: 70%;
    margin: 0 auto;
    font-size: 0;
    .left{
      position: relative;
      top: -57px;
      display: inline-block;
      width: 125px;
      text-align: center;
      .img_wrapper{
         width: 125px;
         height: 85px;
         background: rgba(255, 245, 245, 0.35);
         img{
           margin-top: 17px;
           display: inline-block;
           border-radius: 30px;
           width: 60px;
           height: 60px;
         }
      }
      .name{
        font-size: @p2;
        margin-bottom: 12px;
      }
      ul{
        background: @main_color;
        li{
          height: 27px;
          line-height:27px;
          text-align: left;
          padding-left: 25px;
          a{
            font-size: @p4;
            color: #fff;
            letter-spacing: 1px;
            i{
              margin-right: 5px;
            }
            
          }
          &:hover,&.select{
            background: @font_hover_color;
          }
        }
      }
    }
    .right{
      position: relative;
      vertical-align: top;
      display: inline-block;
      width: 600px;
      margin-left: 40px;
      .nav{
        margin-top: 8px;
        padding: 4px 0;
        font-size: @min_size;
        border-bottom: 1px solid #000;
        letter-spacing: 1px;
        a{
          color: #000;
          &:hover{
            color: @main_color;
          }
        }
      }
      .title{
        position: absolute;
        top: -50px;
        left: -20px;
        color: #fff;
        .big{
          font-size: @p2;
        }
        .small{
          margin-top: 15px;
          font-size: @min_size;
          letter-spacing: 1px;
          i{
            margin-right: 10px;
          }
        }
      }
      .content_1{
        margin-top: 30px;
      }
    }
  }
  .tip_wrapper,.prompt_wrapper{
    .tip_prompt_wrapper_style();
  }
}
</style>