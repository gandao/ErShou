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
              <li v-for="(item,index) in list_data" :key="index"><good-item :data="item"></good-item></li>
          </ul>
      </div>
      <div v-if="is_pager_show" class="pager">
          <el-pagination
                @current-change="pager_change"
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :current-page="now_page"
                :page-count="all_page"
                >
            </el-pagination>
      </div>
      <transition name="toggle">
        <div v-if="is_tip_show" class="tip_wrapper" ><tip v-on:toggle="fun_tip"></tip></div>    
        </transition>
        <transition name="toggle">
        <div v-if="is_prompt_show" class="prompt_wrapper" ><prompt :message="prompt_message" v-on:toggle_prompt="fun_prompt"></prompt></div>    
      </transition>
  </div>
</template>
<script>
import goods_item from "../goods_item/goods_item"
import tip from "../tip/tip.vue"
import prompt from "../prompt/prompt.vue"
import event_transfer from "../../common/js/event_transfer.js"
export default {
    props: ["search"],
    data() {
        return {
            is_tip_show: false,
            is_prompt_show: false,
            prompt_message: "",
            is_pager_show: false,
            list_data: [],
            now_page: 0,
            all_page: 0
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
      },
      search1(val) {
        let option = {}
        let put_data = {}
        let url = '/search'
        let that = this
        put_data.classification = ""

        put_data.keyWords = this.search.message   
        put_data.min = ''
        put_data.max = ''
        if (val) {
            put_data.start = val
        } else {
            put_data.start = 1
        }

        option.url = url
        option.data = put_data
        option.method = "POST"
        that.$http(option)
        .then((response) => {
             that.$nextTick(() => {
                that.list_data = response.data.list
                that.all_page = response.data.allPageCount
                that.now_page = response.data.currentPageCount
                if (that.all_page > 1) {
                    that.is_pager_show = true
                }
			})
        },
        (fileData) => { 
            that.prompt_message = '网络请求发送失败'
            that.is_prompt_show = true
        })
      },
      pager_change(val) {
        this.search1(val)
      }
    },
    created() {
         event_transfer.$on('search1',this.search)
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