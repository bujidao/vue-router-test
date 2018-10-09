<template>
  <div class="photo-wrapper">
    <div class="menu">
      <router-link :to="{name: 'test1'}">Filter</router-link>
      <router-link :to="{name: 'test2'}">自定义指令</router-link>
      <!--<router-link :to="{name: 'logo'}">LOGO</router-link>-->
      <!--<router-link to="/">ERR</router-link>-->
    </div>
    <div class="router-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '我是图片啊'
      }
    }
  }
</script>

<style scoped>
  .menu {
    background: #aaa;
    padding: 20px;
  }
  .router-wrapper {
    padding: 20px;
    background: #fff;
  }
</style>
