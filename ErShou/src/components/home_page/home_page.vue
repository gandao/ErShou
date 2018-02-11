<template>
  <div id="home_page">
      <div class="section_one">
          <div class="content_wrapper">
            <div class="left">
                <div class="wrapper">
                    <img />
                    <div class="one"></div>
                    <div class="two">
                    </div>
                     <div class="content">
                        <div class="title">COLLECTION</div>
                        <div class="desc">Save up to 35% off</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class=" first">
                    <img />
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="content">
                        <div class="title">ACCESSORIES</div>
                        <div class="desc">Shoes Collection 2017</div>
                    </div>
                </div>
                <div class=" second">
                    <img />
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="content">
                        <div class="title">WOMEN</div>
                        <div class="desc">2017 SUMMER CIRLS</div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="section_two">
        <div class="wrapper">
            <div class="title">
                <a class="selected" href="#">最想要的</a> / <a href="#">新品上市</a> / <a href="#">畅销品</a>
                <span class="btn">
                    <a class="selected" href="#"><i class="el-icon-arrow-left"></i></a>
                    <a href="#"><i class="el-icon-arrow-right"></i></a>
                </span>
            </div>
        </div>
      </div>
      <div class="section_three">
          <div class="wrapper">
            <div class="title">
                <a href="#">最想要的</a> / <a href="#">新品上市</a> / <a href="#">畅销品</a>
                <span class="btn">
                    <a class="more" href="#">更多<i class="el-icon-d-arrow-right"></i></a>
                </span>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less"  type="text/less">
@import '../../common/less/index.less';
#home_page{
    .section_one{
        height: 400px;
        padding-bottom: 20px;
        text-align: center;
        background-color: #F5F5F5;
        .content_wrapper{
            width: 75%;
            margin: 0 auto;
            margin-top: 5px;
        }
        .left{
            display: inline-block;
            margin-top: 50px;
            position: relative;
            img{
                display: block;
                width: 310px;
                height: 310px;
            }
            .content{z-index: 999;
                left: 10px;
                bottom: 40px;
                .title{
                    font-size: @max_size;
                    font-weight: bold;
                    letter-spacing: 2px;
                    margin-bottom: 20px;
                }
                .desc{
                    text-align: left;
                    font-size: @p3;
                }
            }
        }
        .right{
            display: inline-block;
            margin-left: 30px;
            margin-top: 50px;
            .first{
                position: relative;
                margin-bottom: 20px;
                width: 140px;
                height: 140px;
                img{
                    display: block;
                    width: 140px;
                    height: 140px;
                }
                .content{
                    bottom: 20px;
                    right: 10px;
                    text-align: right;
                    .title{
                        font-size: @p3;
                        font-weight: 700;
                    }
                    .desc{
                        margin-top: 8px;
                        font-size: @min_size;
                    }
                }
            }
            .second{
                position: relative;
                img{
                    display: block;
                    width: 270px;
                    height: 140px;
                }
                .content{
                    top: 20px;
                    left: 20px;
                    text-align: left;
                    .title{
                        font-size: @h2;
                        font-weight: 700;
                        letter-spacing: 1px;
                    }
                    .desc{
                        margin-top: 15px;
                        font-size: @min_size;
                        letter-spacing: 1px;
                    }
                }
            }

        }
        .one{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 3px;
            left: 3px;
            border: 1px solid rgb(192, 191, 191);
        }
        .two{
            width: 100%;
            height: 100%;
            position: absolute;
            top: -6px;
            left: -6px;
            border: 1px solid rgb(192, 191, 191);
        }
        .content{ 
            position: absolute;
            z-index: 999;
            color: #fff;
        }

    }
    .section_two{
        padding: 40px 0;
        background-color: #fff;
        .wrapper{
            width: 70%;
            margin: 0 auto;
            .title{
                position: relative;
                color: @main_color;
                font-size: @p3;
                a{
                    color: @main_color;
                    font-weight: 700;
                    &:hover,&.selected{
                        color: @font_hover_color;
                    }
                }
                .btn{
                    position: absolute;
                    right: 10px;
                    top: 0;
                    a{
                        display: inline-block;
                        padding: 3px 5px;
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
        }
    }
    .section_three{
        padding: 40px 0;
        background-color: #F5F5F5;
        .wrapper{
            width: 70%;
            margin: 0 auto;
            .title{
                position: relative;
                color: @main_color;
                font-size: @p3;
                a{
                    border-radius: 1px;
                    color: @main_color;
                    font-weight: 700;
                    &:hover,&.selected{
                        color: @font_hover_color;
                    }
                }
                .btn{
                    position: absolute;
                    right: 10px;
                    top: 0;
                    
                    a{
                        display: inline-block;
                        background-color: @main_color;
                        padding: 4px 5px;
                        font-size: @p4;
                        color: #fff;
                        i{
                            font-size: @p4;
                            color: #fff;
                        }
                        &:hover{
                            background: @font_hover_color;
                        }
                    }
                }
            }
        }
    }
}
</style>