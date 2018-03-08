<template>
  <div id="user_message">
    <div class="content_wrapper">
      <ul>
        <li v-for="{item,index} in 8" :key=index>
          <span class="title">用户6763 回复</span>
          <span class="time">发布于 2017-11-17 11:30:05</span>
        </li>
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
  </div>
</template>
<script>
export default {
   
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_message{
  position: relative;
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
  }
</style>