<template>
  <div id="goods_list">
    <el-form ref="form" :model="form" label-width="80px" size='small'>
        <el-form-item label="商品名称">
            <el-input  v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item class="small" label="商品价格">
            <el-input  v-model="form.price"></el-input>
        </el-form-item>
         <el-form-item class="small" label="商品原价">
            <el-input  v-model="form.oldprice"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
            <el-select v-model="form.classification" placeholder="请选择商品类型">
                <el-option label="数码" value="数码"></el-option>
                <el-option label="家电" value="家电"></el-option>
                <el-option label="衣物" value="衣物"></el-option>
                <el-option label="书籍" value="书籍"></el-option>
                <el-option label="生活用品" value="生活用品"></el-option>
                <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="交易方式">
            <el-checkbox-group v-model="form.trade_method">
                <el-checkbox label="线上交易"></el-checkbox>
                <el-checkbox label="线下交易"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="交易地点">
            <el-input v-model="form.place"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
            <el-input v-model="form.QQ"></el-input>
        </el-form-item>
        <el-form-item label="TEL">
            <el-input v-model="form.TEL"></el-input>
        </el-form-item>
        <el-form-item label="微信">
            <el-input v-model="form.weixin"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
            <el-input type="textarea" v-model="form.describle"></el-input>
        </el-form-item>
        <!-- <el-form-item label="商品图片">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                file-list="fileList2"
                auto-upload = 'false'
                limit = "4"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg文件，且保证至少有一张最多4张</div>
            </el-upload>
        </el-form-item> -->
         <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form> 
  </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
            name: '',
            price: '',
            oldprice: '',
            classification: '',
            trade_method: [],
            place: '',
            QQ: '',
            TLE: '',
            weixin: '',
            describle: ''
            }
        }
    }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#goods_list{
    width: 77.5%;
    margin-top: 50px;
    margin-bottom: 30px;
    input,textarea,{
        &:focus{
            border: 1px solid #EF9291;
            color: @main_color;
        }
    }
    .small{
        display: inline-block;
        width: 220px;
    }
    
    .el-checkbox{
        &.is-checked{
            input,.el-checkbox__inner{
                border: 1px solid @main_color;
                background: @main_color !important;
                &:hover{
                    border: 1px solid @main_color;
                }
            }
            .el-checkbox__label{
                color: @main_color !important;
            }
        }
        .el-checkbox__inner{
            border:1px solid @main_color !important;
        }
    }
    .el-button--primary{
        background: @main_color;
        border: 1px solid @main_color;
        &:hover{
             background: #de2f2f;
             border: 1px solid #de2f2f;
        }
    }
    .el-button--default{
        color: @main_color;
        border: 1px solid @main_color;
        background: rgba(236,92,92,0.05);
        &:hover,&:visited,&:active,&:link{
            background:#fff;
        }
    }
    .el-upload-list__item-status-label{
        background: @main_color;
    }
    .el-upload-list__item-name:hover{
        color: @main_color;
    }
}
</style>