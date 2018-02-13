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
                  <div class="big"><img src="./a608f8dc739b3343c33660e4f502d281.jpeg"/></div>
                  <div class='small'>
                      <ul>
                          <li v-for="(item,index) in 4" :key="index"><img src="./a608f8dc739b3343c33660e4f502d281.jpeg"/></li>
                      </ul>
                  </div>
                  <div class="date_desc">
                      <span>发布于: 2017-12-32 00:00:00</span>
                      <span>11次浏览</span>
                  </div>
              </div>
              <div class="right">
                  <div class="title1">檀木灯泡</div>
                  <div class="some_message">
                      <span>价格</span>
                      <span>$ 55</span>
                  </div>
                  <div class="some_message">
                      <span>原价</span>
                      <span>$ 115</span>
                  </div>
                  <div class="some_message">
                      <span>买家</span>
                      <span>图样图森破</span>
                  </div>
                  <div class="some_message">
                      <span>交易地点</span>
                      <span>东区小树林</span>
                  </div>
                  <div class="some_message">
                      <span>交易方式</span>
                      <span>在线交易/线下交易</span>
                  </div>
                  <div class="detail_desc">
                      描述: <span>基于灯泡造型设计的檀木摆放物件，基于名家之手，仅此一件，可面交和小刀。</span>
                  </div>
                  <div class="btn">
                      <span><a href="#"><i class="el-icon-phone-outlin"></i>联系方式</a></span>
                      <span><a href="#"><i class="el-icon-star-of"></i>想要</a></span>
                  </div>
              </div>
          </div>
      </div>
      <div class="title">
          <div class="big">买家留言</div>
          <div class="small">MESSAGE</div>
      </div>
      <div class="message">
          <textarea></textarea>
          <span><a href="#">提交</a></span>
      </div>
      <div class="section_two">
        <div class="wrapper">
            <div class="title">
                其他推荐
                <span class="btn">
                    <a @click.stop.prevent="is_section_two_show = !is_section_two_show" class="selected" href="#"><i class="el-icon-arrow-left"></i></a>
                    <a href="#"><i class="el-icon-arrow-right"></i></a>
                </span>
            </div>
            <div class="content">
                <transition name = 'section_two'>
                    <ul v-show="!is_section_two_show">
                        <li v-for='(item,index) in 4' :key="index"><good-item></good-item></li>
                    </ul>
                </transition>
                <transition name = 'section_two'>
                    <ul v-show="is_section_two_show" class="second">
                        <li v-for='(item,index) in 4' :key="index"><good-item></good-item></li>
                    </ul>
                </transition>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import goods_item from "../goods_item/goods_item"
export default { 
    data() {
        return {
            is_section_two_show: false
        }
    }, 
    components: {
        goodItem: goods_item
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
}
</style>