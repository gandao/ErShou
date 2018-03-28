<template>
  <div id="main">
    <!-- <carouselfigure v-show="true" :img-data=img_data></carouselfigure> -->
    <vheader :search="search" :prompt_content="prompt_content" v-on:prompt_show="prompt_show" :user_status="user_status"></vheader>
    <div class="main_content">
      <router-view :search="search" :prompt_content_1="prompt_content" :user_status="user_status"></router-view>
    </div>
      <transition name="toggle">
        <div v-if="is_prompt_show" class="prompt_wrapper" ><prompt :message="prompt_content.message" v-on:toggle_prompt="fun_prompt"></prompt></div>    
      </transition>
  </div>
</template>
<script>
import carousel_figure from "../carousel_figure/carousel_figure"
import header from "../header/heade"
import prompt from "../prompt/prompt.vue"
export default {
  props: ["user_status"],
  data() {
    return {
      img_data: [".Image/banner2.png",".Image/banner3.png"],
      is_prompt_show: false,
      prompt_content: {
        message: ""
      },
      search: {
        message: ""
      }
    }
  },
  components: {
    carouselfigure: carousel_figure,
    vheader: header,
    prompt: prompt
  },
  methods: {
    prompt_show() {
      this.is_prompt_show = true
    },
    fun_prompt() {
        this.is_prompt_show = false
      }
  }
}
</script>
<style lang="less"  type="text/less">
@import '../../common/less/index.less';
#main{
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_content{
    flex: 1;
  }
  .prompt_wrapper{
        .tip_prompt_wrapper_style();
    }
}
</style>
