<template>
  <div id="main">
    <router-view :datas= "datas" class="main_content"></router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less"  type="text/less">
@import "./common/less/index";
#app{
 display: flex;
 height: 100%;
 flex-direction: column;
 .main_content{
   flex: 1;
   height: 100%;
 }
}
</style>