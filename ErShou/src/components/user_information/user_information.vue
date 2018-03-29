<template>
  <div id="user_information">
      <div class="title1">用户详情</div>
     <div class="user_img">
         <span class="title3">头像</span>
         <img :src="user.headImageUrl"/>
         <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
     </div>
     <div class="name">
         <span class="title3">昵称</span>
         <input v-model="user.nickname" type="text" />
     </div>
     <div class="qq">
         <span class="title3">QQ</span>
         <input v-model="user.qq" type="number" />
     </div>
     <div class="tel">
         <span class="title3">TEL</span>
         <input v-model="user.phone" type="number" />
     </div>
     <div class="wechart">
         <span class="title3">微信</span>
         <input v-model="user.weixin" type="text" />
     </div>
     <div class="btn" @click.stop.prevent="Submit">
         <span><a href="#">保存修改</a></span>
     </div>
  </div>
</template>
<script>
export default {
    props: ["data"],
    data() {
        return {
            user: {}
        }
    },
    methods: {
        Submit() {
            var that = this
            var fd = new FormData()
            fd.append('nickname',that.user.nickname)
            fd.append('qq',that.user.qq)
            fd.append('phone',that.user.phone)
            fd.append('weixin',that.user.weixin)
            // fd.append('nickname',that.user.nickname)
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            that.$http.post('/unusedgoods/user_feedback', fd,config).then(res => {
                console.log(res)
            }).catch(res => {
                console.log(res)
            })
        },
        confirm_fun() {
            this.confirm_show = false
        }
    },
    created() {
        let that = this
        let option = {}
        option.method = 'get'
        option.headers = {"Content-Type": "application/json;charset=utf-8"}    
        option.url = '/unusedgoods/user_detail'
        option.withCredentials = true
        this.$http(option).then(function (successData) {
        that.$nextTick(() => {
            if (successData.data.id === -1) {
                that.data.prompt_message = successData.data.value
                that.data.is_prompt_show = true
            }
            else that.user = successData.data
        })
      },
      (fileData) => {
          that.data.prompt_message = '网络请求发送失败'
          that.data.is_prompt_show = true
        })
    }
}
</script>

<style lang="less"  type="text/less">
@import "../../common/less/index";
#user_information{
    margin-top: 80px;
    position: relative;
    width: 80%;
    border: 2px solid @main_color;
    box-sizing: border-box;
    padding: 30px 25px;
    font-size: @p2;
    margin-bottom: 30px;
    padding-left: 50px;
    .title1{
        position: absolute;
        top: -35px;
        line-height: 35px;
        background: @main_color;
        border: 1px solid @main_color;
        left: -2px;
        right: -2px;
        text-indent: 10px;
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        border-radius: 2px 2px 0 0 ;
    }
    .title3{
        display: inline-block;
        width: 80px;
        color: #605f61;
    }
    .user_img{
        margin-bottom: 10px;
        .title3{
            line-height: 60px;
            vertical-align: top;
        }
        img{
            padding: 2px;
            border: 1px solid @main_color;
            display: inline-block;
            width: 60px;
            height: 60px;
            box-sizing: border-box;
        }
        .img_btn{
            margin-left: 20px;
            a{
                color: @main_color; 
                font-size: 0.8em;
                padding: 3px 6px;
                border: 1px solid @main_color;
                border-radius: 3px;
                vertical-align: top;
                line-height: 60px;
                i{
                    vertical-align: top;
                    line-height: 60px;
                }
            }
            
        }
        .avatar-uploader{
            display: inline-block;
            margin-left: 20px;
        }
        .avatar-uploader .el-upload {
            width:57px;
            height: 57px;
            border: 1px dashed @main_color;
            border-radius: 2px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: @main_color;
        }
        .avatar-uploader-icon {
            font-size: 15px;
            color:  @main_color;
            width:57px;
            height: 57px;
            line-height: 57px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
    }
    .name,.qq,.tel,.wechart{
        margin-bottom: 15px;
    }
    input{
        width: 52%;
        outline: none;
        height: 20px;  
        width: 45%;
        border-radius: 2px;
        vertical-align: middle;
        text-indent: 10px;
        font-size: 0.9em;
        color:@main_color;
        letter-spacing: 1px;
        border: 1px solid @main_color;
        &:focus{
        color:@main_color;
        }
        &::-webkit-outer-spin-button,  
        &::-webkit-inner-spin-button{  
        -webkit-appearance: none !important;  
        margin: 0;  
        }  
    }
    .btn{
        margin-top: 20px;
        span{
            margin-left: 85px;
            background: @main_color;
            padding: 3px 7px;
            border-radius: 2px;
            a{
                font-size: 0.8em;
                color: #FFF;
            }

        }
        
    }
}
</style>