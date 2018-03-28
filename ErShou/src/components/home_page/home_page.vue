<template>
  <div id="home_page">
      <div class="section_one">
          <div class="content_wrapper">
            <div class="left">
                <div class="wrapper">
                    <img src="./img1.jpg">
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
                    <img src="./img3.jpg">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="content">
                        <div class="title">ACCESSORIES</div>
                        <div class="desc">Shoes Collection 2017</div>
                    </div>
                </div>
                <div class=" second">
                    <img src="./img2.jpg">
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
                <a @click.stop.prevent="fun_section_content(0)" :class="{'selected': section_two_index === 0}" href="#">最想要的</a> / <a href="#" @click.stop.prevent="fun_section_content(1)" :class="{'selected': section_two_index === 1}">新品上市</a> / <a href="#" :class="{'selected': section_two_index === 2}" @click.stop.prevent="fun_section_content(2)">畅销品</a>
                <span class="btn">
                    <a @click.stop.prevent="is_section_two_show = false ; section_two_selected = 0;" :class="{'selected': section_two_selected === 0}" href="#"><i class="el-icon-arrow-left"></i></a>
                    <a href="#" @click.stop.prevent="is_section_two_show = true; section_two_selected = 1;" :class="{'selected': section_two_selected === 1}"><i class="el-icon-arrow-right"></i></a>
                </span>
            </div>
            <div class="content">
                <transition name = 'section_two'>
                    <ul v-show="!is_section_two_show" class='main_content'>
                        <li v-for='(item,index) in section_two_content' :key="index"><good-item :data="item"></good-item></li>
                    </ul>
                </transition>
                <transition name = 'section_two'>
                    <ul v-show="is_section_two_show" class="second main_content">
                        <li v-for='(item,index) in section_two_content_1' :key="index"><good-item :data="item"></good-item></li>
                    </ul>
                </transition>
            </div>
        </div>
      </div>
      <div class="big_img"><img src="./banner2.png"></div>
      <div class="section_three">
          <div class="wrapper">
            <div class="title">
                <a :class="{'selected': section_three_index === 0}" href="#" @click.stop.prevent="fun_section_content(3)">最想要的</a> / <a  :class="{'selected': section_three_index === 1}" href="#" @click.stop.prevent="fun_section_content(4)">新品上市</a> / <a :class="{'selected': section_three_index === 2}"  href="#" @click.stop.prevent="fun_section_content(5)">畅销品</a>
                <span class="btn" @click.stop.prevent="fun_more">
                    <a class="more" href="#">更多<i class="el-icon-d-arrow-right"></i></a>
                </span>
            </div>
            <div class="content">
                <ul class="main_content">
                    <li v-for='(item,index) in section_three_content' :key="index"><good-item :data="item"></good-item></li>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import goods_item from "../goods_item/goods_item"
export default {
    props: ["prompt_content"],
    data() {
        return {
            is_section_two_show: false,
            section_two_selected: 0,
            user: {
                account: "123",
                password: "123"
            },
            all_data: [],
            section_two_content: [],
            section_two_content_1: [],
            section_three_content: [],
            section_two_index: 0,
            section_three_index: 0
        }
    },
    components: {
        goodItem: goods_item
    },
    methods: {
        fun_more() {
            this.$router.push({name: "goods_list"})
        },
        fun_section_content(index) {
            var i
            if (index < 3) {
                for (i = 0; i < 4; i++) {
                    this.section_two_content[i] = this.all_data[index].views[i]
                    this.section_two_content_1[i] = this.all_data[index].views[i + 4]
                    this.section_two_index = index
                }
            } else {
                for (i = 0; i < 8; i++) {
                    this.section_three_content[i] = this.all_data[index].views[i]
                    this.section_three_index = index - 3
                }
            }
        }
    },
    created() {
        let that = this
        this.$http.get("http://localhost:8080/unusedgoods/home_recommend").then(function (successData) {
        that.$nextTick(() => {
                that.all_data = successData.data
                that.section_three_content = that.all_data[3].views
                that.fun_section_content(0)
                that.fun_section_content(3)
            })
        },
        (fileData) => { 
            that.prompt_content.message = '网络请求发送失败'
            that.$emit("prompt_content_1")
        })
    }

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
            .content{
                position: relative;
                margin-top: 30px;
                margin-bottom: 20px;
                ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    li{
                        flex: 1;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    .big_img{
        width: 100%;
        img{
            width: 100%;
            height: 300px;
        }
    }
    .main_content{
        margin-left: 17px;
    }
}
</style>