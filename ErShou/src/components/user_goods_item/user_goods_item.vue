<template>
  <div id="user_goods_item">
    <div class="wrapper">
      <div class="img_wrapper">
        <a href="#" @click.stop.prevent="fun_goto_detail"><img :src=data.imageUrl /></a>
        <div v-if="is_on_sell" class="cover">
          <span>已下架</span>
        </div>
      </div>
      <div class="content_wrapper">
        <div class="message">
          <div class="name">{{data.name}}</div>
          <div class="price">
            <span class="new">$ {{data.price}}</span>
            <span class="old">$ {{data.originalPrice}}</span>
          </div>
        </div>
        <div v-if="!is_on_sell" class="btn">
          <span><a href="#">修改</a></span>
          <span @click.stop.prevent="up_goods(0)"><a href="#">下架</a></span>
          <span @click.stop.prevent="up_goods(1)"><a href="#">出售</a></span>
        </div>
        <div @click.stop.prevent="delete1" v-else class="btn delete"><a href=""><i class="el-icon-delete"></i>删除</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data","is_on_sell","data_1","good_item"],
  created() {
    this.good_item.id = this.data.id
  },
  methods: {
     fun_goto_detail() {
       this.$router.push({name: 'goods_detail'}, {query: { 'id': this.data.id }})
     },
     delete1() {
        let that = this
        let option = {}
        option.method = 'get'
        option.headers = {"Content-Type": "application/json;charset=utf-8"}    
        option.url = '/unusedgoods/user_goods_delete?id=' + this.data.id
        option.withCredentials = true
        this.$http(option).then(function (successData) {
            if (successData.data.id !== -1) {
                that.data_1.prompt_message = '删除成功'
                that.$emit('delete')
            }
            else that.data_1.prompt_message = '服务器君不玩了！'
            that.data_1.is_prompt_show = true
        },(fileData) => {
          that.data_1.prompt_message = '网络请求发送失败'
          that.data_1.is_prompt_show = true
        })
     },
     up_goods(index) {
      let that = this
      let option = {}
      option.method = 'get'
      option.headers = {"Content-Type": "application/json;charset=utf-8"}    
      option.url = '/unusedgoods/user_goods_up?id=' + this.data.id
      option.withCredentials = true
      this.$http(option).then(function (successData) {
          if (successData.data.id !== -1) {
              if (index === 1) {
                  that.data_1.prompt_message = '售出成功'
              }
              else that.data_1.prompt_message = '下架成功'
              that.data_1.is_prompt_show = true
              that.is_on_sell = 1
          }
          else {
              that.data_1.prompt_message = successData.data.value
              that.data_1.is_prompt_show = true
          }
      },(fileData) => {
          that.data_1.prompt_message = '网络请求发送失败'
          that.data_1.is_prompt_show = true
        })
     }
   }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_goods_item{
  width: 140px;
  .wrapper{
    .img_wrapper{
      position: relative;
      img{
        width: 140px;
        height: 160px;
      }
      .cover{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          font-size: @h3;
          color: @main_color;
          background: rgba(245, 245, 245, 0.4);
          span{
            margin-top: 35px;
            display: inline-block;
            width: 90px;
            height: 90px;
            box-sizing: border-box;
            border: 3px solid @main_color;
            border-radius: 45px;
            line-height: 80px;
            letter-spacing: 1px;
          }
          
      }
    }
    .content_wrapper{
      margin-top: 2px;
      border: 1px solid @main_color;
      .message{
        .name{
          text-align: center;
          font-size: @p4;
          line-height: 20px;
        }
        .price{
          text-align: center;
          .new{
            font-size: @p4;
            font-weight: 700;
            color: @main_color;
          }
          .old{
            font-size: @p4;
            color: #B5B5B5;
            text-decoration:line-through;
            margin-left: 5px;
          }
        }
        
      }
      .btn{
        display: flex;
        font-size: @p4;
        background: @main_color;
        text-align: center;
        line-height: 20px;
        span{
          flex: 1;
          border-right: 1px solid #fff;
          &:last-child{
            border-right: none;
          }
        }
        a{
          letter-spacing: 1px;
          color: #fff;
          &:hover{
            color: @font_hover_color;
          }
        }
        &.delete{
         a{
            font-size: @p4;
            display: block;
            width: 100%;
            text-align: center;
            i{
              margin-right: 5px;
            }
         }
        }
      }
    }

  }
}
</style>