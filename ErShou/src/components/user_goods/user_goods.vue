<template>
  <div id="user_goods">
    <ul class="content_2">
      <li v-for="(item,index) in 8" :key="index"><user-goods-item></user-goods-item></li>
      </ul>
    
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
  </div>
</template>
<script>
import user_goods_item from '../user_goods_item/user_goods_item'
export default {
   components: {
     userGoodsItem: user_goods_item
   }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_goods{
  position: relative;
  padding-bottom: 80px;
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