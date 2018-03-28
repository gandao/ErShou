<template>
  <div id="app">
    <div class="content">
      <router-view :user_status=user_status></router-view>
    </div>
    <vfooter></vfooter>
  </div>
</template>
<script>
import footer from './components/footer/footer'
export default {
  name: 'App',
  data() {
    return {
      user: {
      },
      user_status: {
        is_login: false
      }
    }
  },
  components: {
    vfooter: footer
  }
}
</script>
<style lang="less"  type="text/less">
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
  .content{
    flex: 1;

  }
}
</style>
