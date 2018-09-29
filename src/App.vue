<template>
  <div id="app">
    <!--<div class="img-wrapper">-->
      <!--<img src="./assets/logo2.svg">-->
    <!--</div>-->
    <Header></Header>
    <div class="noname">
      <div class="app-slide">
        <Slide></Slide>
      </div>
      <div class="app-router">
        <div class="mybreadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in breadlist" :key='index' :to="{path: item.path}">{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view class="border-left-1px"/>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      breadlist: ''
    }
  },
  created () {
    this.getBread()
  },
  methods: {
    getBread () {
      this.breadlist = this.$route.matched
      this.$route.matched.forEach((item, index) => {
      //   item.meta.name === '首页' ? item.path = '/' : this.$route.path === item.path
      //   console.log(item)
      })
    }
  },
  watch: {
    $route () {
      this.getBread();
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  body,html {
    width: 100%;
    height: 100%;
  }
  .noname {
    overflow: hidden;
  }
  .app-router {
    width: 85%;
    float: left;
  }
  .border-left-1px {
    border-left: 1px solid #aaa;
  }
  .img-wrapper img {
    width: 50px;
  }
  .app-slide {
    width: 15%;
    min-height: 600px;
    float: left;
    background: skyblue;
  }
  .mybreadcrumb {
    /*height: 30px;*/
    /*line-height: 30px;*/
    background: #aaa;
    padding-top: 10px;
  }
</style>
