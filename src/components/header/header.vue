<template>
  <div class="header-wrapper">
    <div>
      <div class="logo">
        <img src="@/assets/logo2.svg">
      </div>
      <div class="iamheader">
        <div class="">{{msg}}</div>
        <div>
          <router-link to="/movie">电影</router-link>
          <router-link to="/music">音乐</router-link>
          <router-link to="/photo">照片</router-link>
        </div>
        <div id="addEventListener"></div>
      </div>
    </div>
  </div>
</template>

<script>
window.addEventListener('hashchange', () => {
  var text = '';
  switch (location.hash) {
    case '#/music':
      text = '音乐';
      break;
    case '#/movie':
      text = '电影';
      break;
    case '#/photo':
      text = '照片';
      break;
  };
  document.getElementById('addEventListener').innerHTML = text
})
export default {
  data () {
    return {
      msg: '我是header啊'
    }
  }
}
</script>

<style scoped>
  .header-wrapper {
    padding: 10px;
    background: burlywood;
  }
  .header-wrapper .logo {
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: inline-block;
  }
  .header-wrapper .logo img {
    max-width: 100%;
    max-height: 100%;
  }
  .iamheader {
    display: inline-block;
    padding: 10px;
  }
  #addEventListener {
    float: right
  }
</style>
