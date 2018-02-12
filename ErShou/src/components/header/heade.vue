<template>
  <div id="header">
      <div class="wrapper">
          <div class="logo_wrapper"><img src="./logo.png"/>ERSHOU</div>
          <div class="title"><span>首页</span></div>
          <div class="search_wrapper">
              <span class="title">SEARCH</span><input type="text"/><a href="#"><span @click.stop.prevent="search"><i class="el-icon-search
"></i></span></a>
          </div>
          <div class="user_wrapper">
              <div v-if="true" class="user_img_wrapper" @click.stop.prevent="is_menu_show=!is_menu_show"><span class="img_wrapper"><img src="./user_head.jpg"/></span><span class="name">科里斯塔</span></div>
              <div v-else class="login_wrapper" @click.stop.prevent="is_menu_show=!is_menu_show"><a href="#">登录/注册</a></div>
              <el-collapse-transition>
                <div v-show="is_menu_show" class="menu_wrapper">
                    <ul>
                        <li class="selected"><a @click.stop.prevent="is_menu_show=false" href="#">我的商品</a></li>
                        <li><a href="#">发布商品</a></li>
                        <li><a href="#">个人信息</a></li>
                        <li><a href="#">我的留言</a></li>
                        <li><a href="#">我的收藏</a></li>
                        <li><a href="#">意见反馈</a></li>
                        <li><a href="#">退出</a></li>
                    </ul>
                </div>
              </el-collapse-transition>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            is_menu_show: true
        }
    }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#header{
    background: #fff;
    height: 53px;
    .wrapper{
        width: 75%;
        margin: 0 auto;
        display: flex;
        .logo_wrapper{
            flex: 0 0 120px;
            line-height: 53px;
            font-size: @p4;
            font-weight: 700;
            color: @main_color;
            img{
                vertical-align: middle;
                width: 39px;
                height: 39px;
                margin-right: 10px;
            }
        }
        .title{
            flex: 0 0 70px;
            position: relative;
            font-size: @p2;
            font-weight: 700;
            color: @main_color;
            span{
                position: absolute;
                bottom: 0;
                left: 20%;
                line-height: 50px;
                border-bottom: 2px solid @main_color;
            }
        }
        .search_wrapper{
            flex: 1;
            color: @main_color;
            text-align: right;
            .title{
                line-height: 53px;
                font-size: @min_size;
            }
            input{
                display: inline-block;
                width: 65%;
                height: 22px;  
                margin-left: 10px;
                border: 1px solid @main_color;
                outline: none;
                font-size: @p4;
                vertical-align: middle;
                text-indent: 15px;
                color:@main_color;
                &:focus{
                color:@main_color;
                }
            }
             a{
                margin-left: 10px;
                display: inline-block; 
                vertical-align: middle;
                span{
                    display: block;
                    font-size: 18px;
                    background: @main_color;
                    text-align: center;
                    padding: 4px 9px;
                    border-radius: 1px;
                    &:active{
                        background: #EF9191;
                    }
                    i{
                        color: #fff;
                    }
                }
            }
        }
        .user_wrapper{
            flex: 0.7;
            position: relative;
            .menu_wrapper{
                 z-index: 999;
                position: absolute;
                top: 100%;
                left: 45%;
                background: @main_color;
                ul{
                    .shadow_base();
                    li{
                        display: block;
                        a{
                            display: block;
                            line-height: 24px;
                            font-size: @p4;
                            color: #fff;
                            padding: 0 27px;
                            letter-spacing: 1px;
                        }
                        &:hover,&.selected{
                            background-color: @font_hover_color;
                        }
                    }
                }
            }
            .user_img_wrapper{
                text-align: center;
                .img_wrapper{
                    display: inline-block;
                    border: 1px solid @main_color;
                    width: 44px;
                    height: 44px;
                    border-radius: 22px;
                    margin-top: 4px;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin-top: 2px;
                    }
                }
                .name{
                    margin-left: 20px;
                    font-size: @p2;
                    color: @main_color;
                    font-weight: 700;
                    vertical-align: top;
                    line-height: 53px;
                }
            }
            .login_wrapper{
                    text-align: center;
                    line-height: 53px;
                    font-size: @p2;
                    
                    a{
                        color: @main_color;
                        font-weight: 700;
                        &:hover{
                          color: @font_hover_color;  
                        }
                    }
            }
        }
    }
}
</style>