<template>
  <div class="photo-wrapper">
    <!--<div>-->
      <!--{{msg}}-->
    <!--</div>-->
    <!--<img src="@/assets/logo.png" alt="">-->
    <div class="menu">
      <router-link :to="{name: 'renwu'}">人物</router-link>
      <router-link :to="{name: 'fengjing'}">风景</router-link>
      <router-link :to="{name: 'logo'}">LOGO</router-link>
      <router-link to="/">ERR</router-link>
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
  /*.photo-wrapper {*/
    /*background: #bbb;*/
    /*text-align: center;*/
  /*}*/
  /*.photo-wrapper img {*/
    /*width: 100px;*/
  /*}*/
  .menu {
    background: #aaa;
    padding: 20px;
  }
  .router-wrapper {
    padding: 20px;
    background: #fff;
  }
</style>
