<template>
  <div id="user_goods">
    <div class="btn_wrapper"><span @click.stop.prevent="fun_btn(0)" :class="{'selected': btn_index === 0}"><a href="#">在热卖的</a></span ><span @click.stop.prevent="fun_btn(1)" :class="{'selected': btn_index === 1}"><a href="#">以下架的</a></span></div>
    <ul class="content_2">
      <li v-for="(item,index) in user_goods" :key="index"><user-goods-item v-on:delete="delete1" :good_item="good_item" :data_1="data" :is_on_sell="btn_index" :data="item"></user-goods-item></li>
      </ul>
    <div v-if="pager_show" class="pager">
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
  </div>
</template>
<script>
import user_goods_item from '../user_goods_item/user_goods_item'
export default {
  props: ["data"],
  data() {
    return {
      pager_show: false,
      user_goods: [],
      good_item: {
        id: 0
      },
      now_page: 0,
      all_page: 0,
      btn_index: 0,
      url: ["/unusedgoods/user_onsell_goods?start=","/unusedgoods/user_upsell_goods?start="]
    }
  },
   components: {
     userGoodsItem: user_goods_item
   },
   created() {
      this.search1(0)
   },
   methods: {
    search1(val) {
        let that = this
        let option = {}
        option.method = 'get'
        option.headers = {"Content-Type": "application/json;charset=utf-8"}    
        option.url = this.url[this.btn_index] + val
        option.withCredentials = true
        this.$http(option).then(function (successData) {
        that.$nextTick(() => {
            that.user_goods = successData.data.list
            that.all_page = successData.data.allPageCount
            that.now_page = successData.data.currentPageCount + 1
            if (successData.data.allPageCount > 1) {
                that.pager_show = true
            }
        })
      },(fileData) => { console.log(fileData)})
     },
    pager_change(val) {
      this.search1(val - 1)
    },
    fun_btn(index) {
        if (index === this.btn_index) {
          return 0
        } else {
          this.btn_index = index
          this.search1(0)
        }
    },
    delete1() {
      for (var i = 0; i < user_goods.length; i++) {
        if (user_goods[i].id === goods_item.id) {
          user_goods.splice(i,1)
          break
        }
      }
    }
   }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_goods{
  position: relative;
  padding-bottom: 80px;
  .btn_wrapper{
    font-size: 0;
    margin-bottom: 20px;
    span{
      display: inline-block;
      a{
        display: inline-block;
        padding: 7px 15px;
        color: @main_color;
        font-size: @p4;
      }
      &.selected{
        background: @main_color;
        a{
          color: #fff;
        }
      }
    }
  }
  .content_2{
    width: 620px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li{
      flex: 1;
      padding-bottom: 30px;
    }
  }
  .pager{
        position: absolute;
        right: -40px;
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
}
</style>