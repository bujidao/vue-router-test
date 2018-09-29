<template>
  <div class="slide-wrapper">
    我是目录啊
    <ul>
      <li>
        <router-link :to="{name: 'movie'}">电影</router-link>
      </li>
      <li>
        <router-link :to="{name: 'music'}">音乐</router-link>
      </li>
      <li>
        <router-link :to="{name: 'photo'}">照片</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-wrapper
    padding: 10px
    text-align: center
    li
      display: block
      height: 40px
      line-height: 40px
      border: 1px solid #ddd
      margin: 5px 0
  /*格式纠正*/
</style>
