<template>
  <div id="goods_item">
      <div class="wrapper1">
          <a @click.stop.prevent="fun_goods_item" href="#">
            <div class="img_wrapper">
                <img :src=data.imageUrl />
            </div>
            <div class="detail_wrapper">
                <div class="name">{{data.name}}</div>
                <div class="price">
                    <span class="new">$ {{data.price}}</span>
                    <span class="old">$ {{data.originalPrice}}</span>
                </div>
            </div>
          </a>
      </div>
  </div>
</template>
<script>
export default {
    props: ["data"],
    methods: {
        fun_goods_item() {
            this.$router.push({name: "goods_detail", query: { 'id': this.data.id }})
        }
    }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#goods_item{
    width: 160px;
    .wrapper1{
        a{
            display: block;
            .img_wrapper{
                width: 160px;
                height: 200px;
                overflow: hidden;
                img{
                    width: 160px;
                    height: 200px;
                    transition: all 0.9s ease-in-out;
                    &:hover{
                        transform: scale(1.4);
                        transition: all 0.9s ease-in-out;
                    }
                }
            }
            .detail_wrapper{
                text-align: center;
                .name{
                    font-size: @p3;
                    line-height: 40px;
                    font-weight: 700;
                    color: #000;
                    letter-spacing: 1px;
                }
                .price{
                    .new{
                        margin-right: 5px;
                        font-size: @p3;
                        color: #000;
                    }
                    .old{
                        font-size: @p4;
                        color: #B5B5B5;
                        text-decoration:line-through;
                    }
                }
            }
        }
    }
}
</style>