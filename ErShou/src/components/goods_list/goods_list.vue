<template>
  <div id="goods_list">
      <div class="border"></div>
      <div class="btn">
          <div class="wrapper">
              <span class="border_right"><a href="#">综合</a></span>
              <span class="border_right"><a href="#">收藏数</a></span>
              <span class="border_right"><a href="#">评论</a></span>
              <span class="selected"><a href="#">价格</a></span>
          </div>
      </div>
      <div class="content">
          <ul>
              <li v-for="(item,index) in 16" :key="index"><good-item></good-item></li>
          </ul>
      </div>
      <div class="pager">
          <el-pagination
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :current-page="0"
                :page-count="4"
                >
            </el-pagination>
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
import goods_item from "../goods_item/goods_item"
import tip from "../tip/tip.vue"
import prompt from "../prompt/prompt.vue"
export default {
    data() {
        return {
            is_tip_show: false,
            is_prompt_show: false
        }
    },
    components: {
        goodItem: goods_item,
        tip: tip,
        prompt: prompt
    },
    methods: {
      fun_tip() {
        this.is_tip_show = false
      },
      fun_prompt() {
        this.is_prompt_show = false
      }
    }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#goods_list{
    position: relative;
    background: #fff;
    .border{
        height: 40px;
        background: @main_color;
    }
    .btn{
        .wrapper{
            width: 70%;
            margin: 40px auto;
            margin-bottom: 20px;
            font-size: 0;
            span{
                display: inline-block;
                padding: 6px 8px;
                border: 1px solid @main_color;
                &:first-child{
                    border-radius: 2px 0 0 2px;
                }
                &:last-child{
                    border-radius: 0 2px 2px 0;
                }
                a{
                    font-size: @p4;
                    font-weight: 700;
                    color: @main_color;
                }
                &:hover,&.selected{
                    background: @main_color;
                    a{
                        color: #fff;
                    }
                }
                &.border_right{
                    border-right: none;
                }
            }
        }
    }
    .content{
        padding-bottom: 120px;
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 70%;
            margin: 0 auto;
            li{
                flex: 1;
                margin-top: 20px;
            }
        }
    }
    .pager{
        position: absolute;
        right: 100px;
        bottom: 35px;
        .el-pagination{
            .btn-prev:hover,.btn-next:hover{
                span{
                    color: @main_color;
                }
            }
            .number:hover,.active{
                color: @main_color;
            }
        }
    }
    .tip_wrapper,.prompt_wrapper{
        .tip_prompt_wrapper_style();
    }
}
</style>