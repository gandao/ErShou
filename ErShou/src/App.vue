<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import footer from './components/footer/footer'
export default {
  name: 'App',
  data() {
    return {
      is_login: false
    }
  },
  components: {
    footer: footer
  }
}
</script>
<style lang="less"  type="text/less">
#app{
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
  }
}
</style>
