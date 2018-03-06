<template>
  <div id="user_center">
    <div class="big_img"><img src="./2.jpg"/></div>
    <div class="content">
      <div class="left">
        <div class="img_wrapper"><img src="./1.jpg"/></div>
        <div class="name">图样图森破</div>
        <ul class="menu">
          <li class="selected" @click.stop.prevent="fun_my_goods"><a href="#"><i class="el-icon-goods"></i>我的商品</a></li>
          <li @click.stop.prevent="fun_add_goods"><a href="#"><i class="el-icon-edit-outline"></i>发布商品</a></li>
          <li><a href="#"><i class="el-icon-date"></i>个人信息</a></li>
          <li><a href="#"><i class="el-icon-goods"></i>我的留言</a></li>
          <li @click.stop.prevent="fun_my_collection"><a href="#"><i class="el-icon-star-on"></i>我的收藏</a></li>
          <li @click.stop.prevent="fun_user_feedback"><a href="#"><i class="el-icon-document"></i>意见反馈</a></li>
          <li><a href="#"><i class="el-icon-back"></i>退出</a></li>
        </ul>
      </div>
      <div class="right">
        <div class="nav">
          当前位置: <span><a href="#">首页</a></span>  <span><a href="#">个人中心</a></span> <span><a href="#">我的商品</a></span>
        </div>
        <div class="content_1"><router-view></router-view></div>
        
        <div class="title">
          <div class="big">二手交易平台 PERSONAL CENTER</div>
          <div class="small"><i class="el-icon-date"></i>2017.12.32</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   methods: {
     fun_my_goods() {
        this.$router.push({name: 'user_goods'})
      },
      fun_my_collection() {
        this.$router.push({name: 'user_collection'})
      },
      fun_add_goods() {
        this.$router.push({name: 'user_add_goods'})
      },
      fun_user_feedback() {
        this.$router.push({name: 'user_feedback'})
      }
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
          &:hover{
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
        margin-top: 55px;
      }
    }
  }
}
</style>