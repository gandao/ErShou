<template>
  <div id="header">
      <div class="wrapper">
          <div class="logo_wrapper"><img src="./logo.png"/>ERSHOU</div>
          <div class="title"><span @click.stop.prevent="fun_home_page"><a href="#">首页</a></span></div>
          <div class="search_wrapper">
              <span class="title">SEARCH</span><input type="text"/><a href="#"><span @click.stop.prevent="fun_search"><i class="el-icon-search
"></i></span></a>
          </div>
          <div class="user_wrapper">
              <div v-if="is_log_in" class="user_img_wrapper" @click.stop.prevent="is_menu_show=!is_menu_show"><span class="img_wrapper"><img src="./user_head.jpg"/></span><span class="name">科里斯塔</span></div>
              <div v-else class="login_wrapper" @click.stop.prevent="fun_log_in"><a href="#">登录/注册</a></div>
              <el-collapse-transition>
                <div v-if="is_log_in" v-show="is_menu_show" class="menu_wrapper">
                    <ul>
                        <li class="selected"><a @click.stop.prevent="fun_my_goods" href="#">我的商品</a></li>
                        <li><a href="#" @click.stop.prevent="fun_add_goods">发布商品</a></li>
                        <li><a href="#">个人信息</a></li>
                        <li><a href="#">我的留言</a></li>
                        <li  @click.stop.prevent="fun_my_collection"><a href="#">我的收藏</a></li>
                        <li @click.stop.prevent="fun_user_feedback"><a href="#">意见反馈</a></li>
                        <li @click.stop.prevent="fun_log_out"><a href="#">退出</a></li>
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
            is_menu_show: false,
            is_log_in: true
        }
    },
    methods: {
        fun_search() {
            this.$router.push({name: 'goods_list'})
        },
        fun_home_page() {
            this.$router.push({name: 'home_page'})
        },
        fun_log_out() {
            this.$router.push({name: 'home_page'})
            this.is_menu_show = false
            this.is_log_in = false
        },
        fun_log_in() {
            this.$router.push({name: 'log_in'})
        },
        fun_my_goods() {
            this.$router.push({name: 'user_goods'})
            this.is_menu_show = false
        },
        fun_my_collection() {
            this.$router.push({name: 'user_collection'})
            this.is_menu_show = false
        },
        fun_add_goods() {
            this.$router.push({name: 'user_add_goods'})
            this.is_menu_show = false
        },
        fun_user_feedback() {
            this.$router.push({name: 'user_feedback'})
            this.is_menu_show = false
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
                a{
                    color: @main_color;  
                }
                &:hover{
                    border-bottom: 2px solid @font_hover_color;
                    a{
                        color: @font_hover_color;
                    }
                }
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
                    &:hover{
                        background: @font_hover_color;
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