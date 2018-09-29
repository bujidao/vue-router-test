<template>
  <div class="movie-wrapper">
    <div>
      <div class="menu">
        <router-link :to="{name: 'comedy',params:{name:'comedyMovie',id:2}}">喜剧电影</router-link>
        <router-link :to="{name: 'suspense',params:{name:'suspenseMovie',id:3}}">悬疑电影</router-link>
        <router-link :to="{name: 'action',params:{name:'actionMovie',id:4}}">动作电影</router-link>
      </div>
    </div>
    <div class="router-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { getMovieListPage } from '@/api/movieList.js'
export default {
  data () {
    return {
      msg: '我是电影啊'
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
