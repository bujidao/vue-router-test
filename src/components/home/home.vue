<template>
  <div class="home-wrapper">
    {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '欢迎来到我的世界'
    }
  }
}
</script>

<style scoped>
  .home-wrapper {
    padding: 20px;
    /*background: deepskyblue;*/
  }
  .home-wrapper li {
    list-style: none;
    display: inline-block;
    padding: 0 10px;
    color: #000;
  }
  .home-wrapper .children-router {
    /*background: skyblue;*/
  }
</style>
