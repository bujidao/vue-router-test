<template>
  <div class="suspense-wrapper">
    悬疑电影很吓人啊
    <button @click="toComedy()">去喜剧</button>
    <button @click="toAction()">去动作</button>
    <router-link :to="{name:'comedy',params:{name: 'ccc',id: '99'}}">去喜剧</router-link>
    <router-link :to="{name:'action',params: {name: 'params',id: '777777777777'},query:{name: '张三',id: '99'}}">去动作</router-link>
  </div>
</template>

<script>
// import { getMovieListPage } from '@/api/movieList.js'

export default {
  data () {
    return {
      aa: ''
    }
  },
  methods: {
    toComedy () {
      this.$router.push({
        name: 'comedy',
        params: {
          name: 'iamparams',
          id: '666'
        }
      })
    },
    toAction () {
      this.$router.push({
        path: '#/action',
        query: {
          name: 'iamquery',
          id: '777'
        }
      })
    }
  }
}
</script>
