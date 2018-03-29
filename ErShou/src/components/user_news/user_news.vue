<template>
  <div id="user_message">
    <div class="content_wrapper">
      <ul>
        <li v-for="(item,index) in user_message" :key=index>
            <ul>
                <li v-for="(item1,index1) in item.contents" :key=index1>
                    <div class="title3">
                        <span v-if="item1.roleA !== name" class="title4">用户{{item1.roleA}} 留言</span>
                        <span v-else>你的回复: </span>
                        <span class="time">发布于 {{item1.date}}</span>
                    </div>
                    <div class="content4">{{item1.content}}</div>
                </li>
            </ul>
            <div class="btn"><span @click.stop.prevent="reply_show = true; userid = item.id;"><a href="#">回复</a></span><span @click.stop.prevent="delete1(index,item.id)"><a href="#">删除</a></span></div>
        </li>
      </ul>
    </div>
    <transition name="fade"> 
        <div class="reply" v-if="reply_show">
                <span class="wrapper"  v-if="reply_show">
                    <div class="title4">编辑回复</div><div class="content2">
                        <textarea v-model="reply_content"></textarea>
                        <div class="btn4">
                            <span @click.stop.prevent="message_fackback()"><a href="#">确定</a></span><span @click.stop.prevent="reply_show = false;"><a href="#">取消</a></span>
                        </div>
                    </div>
                </span>
        </div>
    </transition>    
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
export default {
   props: ["data"],
   data() {
       return {
        user_message: [],
        now_page: 0,
        all_page: 0,
        pager_show: false,
        reply_show: false,
        reply_content: "",
        name: "",
        userid: 0
       }
   },
   methods: {
       search1(val) {
        let that = this
            let option = {}
            option.method = 'get'
            option.url = '/unusedgoods/user_message?start=' + val
            this.$http(option).then(function (successData) {
            that.$nextTick(() => {
                that.name = successData.data.currentUsernme
                that.user_message = successData.data.list
                that.all_page = successData.data.allPageCount
                that.now_page = successData.data.currentPageCount + 1
                if (successData.data.allPageCount > 1) {
                    that.pager_show = true
                }
                else that.pager_show = false
            })
            },(fileData) => { console.log(fileData)})
       },
       pager_change(val) {
           this.search1(val - 1)
       },
        delete1(index,id) {
            let that = this
            let option = {}
            option.method = 'get'
            option.url = '/unusedgoods/message_delete?id=' + id
            this.$http(option).then(function (successData) {
            that.$nextTick(() => {
                if (successData.data !== -1) {
                    that.data.prompt_message = "操作成功！已删除回话！"
                    that.data.is_prompt_show = true
                    that.user_message.splice(index,1)
                }
                else that.data.prompt_message = "操作失败！"
                that.data.is_prompt_show = true
            })
            },(fileData) => { console.log(fileData)})
        },
        message_fackback(id) {
            if (this.reply_content === "") {
                this.data.prompt_message = "请输入内容！"
                this.data.is_prompt_show = true
            } else {
                let that = this
                let option = {}
                let data = {}
                option.method = 'post'
                option.url = '/unusedgoods/message_fackback'
                data.id = that.userid
                data.content = that.reply_content
                option.data = data
                this.$http(option).then(function (successData) {
                that.$nextTick(() => {
                    if (successData.data !== -1) {
                        that.data.prompt_message = "操作成功！已回复！"
                        that.data.is_prompt_show = true
                    }
                    else that.data.prompt_message = "操作失败！"
                    that.data.is_prompt_show = true
                    that.reply_show = false
                })
                },(fileData) => { console.log(fileData)}) 
            }
        }
   },
   created() {
    this.search1(0)
   }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_message{
  position: relative;
  padding-bottom: 100px;
    .content_wrapper{
        &>ul{
            &>li{
                position: relative;
                border-top: 2px solid @main_color;
                padding-bottom: 40px;
                li{
                    padding-top: 5px;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    height: 30px;
                    font-size: @p4;
                    border-top: 1px solid @main_color;
                    &:first-child{
                        margin-top: 10px;
                        border-top: none;
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }
                    .title3{
                        line-height: 20px;
                        position: relative;
                        margin-left: 20px;
                        .time{
                            position: absolute;
                            right: 10px;
                            top: 0px;
                        }
                    }
                    .content4{
                        font-size: 13px;
                        margin-top: 10px;
                        margin-left: 40px;
                        color:#6d6d6d;
                        line-height: 15px;
                        
                    }
                }
            }
            .btn{
                position: absolute;
                bottom: 10px;
                right: 10px;
                span{
                    margin-right: 20px;
                    &:last-child{
                        margin-right: none;
                    }
                    a{
                        color: @main_color;
                        font-size: 13px;
                    }
                }
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
  }
  .reply{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        &.fade-enter-active,&.fade-leave-active{
            transition: all 0.37s ease-in-out;
        }
        &.fade-enter-to,&.fade-leave{
            transform: scale(1,1)
        }
        &.fade-enter,&.fade-leave-to{
            transform: scale(0,0)
        } 
        .wrapper{  
            width: 300px;
            height: 200px;
            position: absolute;
            top: 30%;
            left: 40%;
            .title4{
                border: none;
                line-height: 38px;
                color: #fff;
                font-size: @p2;
                font-weight: bold;
                letter-spacing: 4px;
                background: @main_color;
                border-radius: 5px 5px 0 0 ;
                text-align: center;
            }
            .content2{
                background: #FFF;
                padding: 10px 5px;
                border: 2px solid @main_color;
                .btn4{
                    margin-bottom: 10px;
                    text-align: right;
                    span{   
                        padding: 5px 10px;
                        display: inline-block;
                        border-radius: 3px;
                        font-size: @p4;
                        box-sizing: border-box;
                        &:first-child{
                            background: @main_color;
                            border: 1px solid @main_color;
                            a{
                                 color: #fff;
                            }
                            &:hover{
                               background:#e13946;
                            }
                        }
                        &:last-child{
                            color: @main_color;
                            border: 1px solid @main_color;
                            margin-left: 15px;
                            margin-right: 28px;
                            a{
                                 color: @main_color;
                                 
                            }
                            &:hover{
                               background:rgba(225,57,70,0.05);
                            }
                            
                        }
                    }
                }
                textarea{
                    min-height: 100px;
                    color: #9E9CA1;
                    display: block;
                    font-size: 18px;
                    letter-spacing: 1px;
                    line-height: 20px;
                    border: none;
                    width: 95%;
                    margin: auto;
                    margin-top: 12px;
                    height: 120px;
                    outline:none;
                    resize:none;
                    overflow:hidden; 
                }
            }
        }
    }
</style>