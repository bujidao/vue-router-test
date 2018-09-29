<template>
  <div class="music-wrapper">
    <div>
      <div class="menu">
        <router-link :to="{name: 'huayu'}">华语音乐</router-link>
        <router-link :to="{name: 'gangtai'}">港台音乐</router-link>
      </div>
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
      msg: '我是音乐啊'
    }
  }
}
</script>

<style scoped>
  /*.music-wrapper {*/
    /*padding: 20px 50px;*/
    /*background: #ccc;*/
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
