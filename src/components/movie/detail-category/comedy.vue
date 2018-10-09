<template>
  <div class="comedy-wrapper">
    <div class="movieList-wrapper">
      <ul>
        <li v-for="(movie,index) in movieList" :key="index" class="movie-wrapper">
          <el-card shadow="hover">
            <el-row>
              <el-col :span="2">
                <div class="img-wrapper">
                  <img :src="`${movie.images.small}`" alt="">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="detail-info">
                  <div class="title-wrapper">
                    <a :href="`${movie.alt}`" target="_blank" class="title-link">
                      <span class="movie-title">{{movie.title}}</span>
                      <span class="movie-original_title">{{movie.original_title}}</span>
                      <span class="movie-year">({{movie.year}})</span>
                      <span class="play-status">[可播放]</span>
                    </a>
                  </div>
                  <div class="movie-info-wrapper">
                    <!--类型-->
                    <div class="genres-wrapper">
                      <span class="cast">{{movie.year}}</span>
                      <span v-for="(genre,index) in movie.genres" :key="index" class="cast">
                        {{genre}}
                      </span>
                    </div>
                    <!--演员表-->
                    <div class="casts-wrapper">
                      <span v-for="(cast,index) in movie.casts" :key="index" class="cast" :value="cast.id">
                        {{cast.name}}
                      </span>
                    </div>
                  </div>
                  <div class="rate-wrapper">
                    <el-rate
                      v-model="movie.rating.stars"
                      :max="5"
                      disabled
                      allow-half
                      show-score
                      class="rate-stars"
                      text-color="#ff9900"
                      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                      :score-template="`${movie.rating.average}`">
                    </el-rate>
                    <span class="count-rate-num">({{movie.collect_count}}人评价)</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </li>
      </ul>
    </div>
    <div class="page-wrapper">
      <el-pagination
        :page-size.sync="page.count"
        :current-page.sync="page.currentPage"
        :total="totalNum"
        layout="prev, pager, next"
        @current-change="handleChangePage">
      </el-pagination>
    </div>
    <Dialog :dialog="dialog"></Dialog>
  </div>
</template>

<script>
import { getMovieList } from '@/api/apiMovie'

export default {
  data () {
    return {
      msg: '我是喜剧电影',
      dialog: {
        visible: false,
        data: ''
      },
      movieList: [],
      // movieList1: [
      //   {
      //     name: '大话西游',
      //     time: '120',
      //     director: '周星驰',
      //     description: '大话西游好看'
      //   },
      //   {
      //     name: '鬼子来了',
      //     time: '120',
      //     director: '姜文',
      //     description: '柜子来了好看'
      //   },
      //   {
      //     name: '战狼',
      //     time: '120',
      //     director: '吴京',
      //     description: '战狼好看'
      //   },
      //   {
      //     name: '黑客帝国',
      //     time: '120',
      //     director: '不知道',
      //     description: '帝国好看'
      //   },
      //   {
      //     name: '美国队长',
      //     time: '120',
      //     director: '大导演',
      //     description: 'haokan '
      //   },
      //   {
      //     name: '英国队长',
      //     time: '120',
      //     director: 'tom',
      //     description: 'haokaaaan '
      //   },
      //   {
      //     name: '猫和老鼠',
      //     time: '1200',
      //     director: '大导演',
      //     description: '超级喜欢猫和老鼠 '
      //   },
      //   {
      //     name: '中国队长',
      //     time: '120',
      //     director: '大导演',
      //     description: 'hao打发kan '
      //   },
      //   {
      //     name: '中国队长',
      //     time: '120',
      //     director: '大导演',
      //     description: 'hao打发kan '
      //   }
      // ],
      totalNum: 0,
      page: {
        currentPage: 1, // 当前页数
        count: 3, // 每页显示条数
        city: '北京', // 地点
        q: '', // 电影关键字 战狼
        tag: '' // 电影类别
      }
    }
  },
  created () {
    this.loadingData()
  },
  methods: {
    showDetail (movie) {
      this.dialog = {
        visible: true,
        data: movie
      }
    },
    showTimeSome () {
      console.log('ahahhahaa')
    },
    // 加载数据
    loadingData () {
      console.log(getMovieList)
      var params = {
        'start': (this.page.currentPage - 1) * this.page.count,
        'count': this.page.count
      }
      /**/
      getMovieList(params).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.totalNum = res.data.total
          var movieData = res.data.subjects
          this.movieList = this.formatData(movieData)
        }
        console.log('i am in getMovieList')
      })
      /*
      this.$axios.post('/api/v2/movie/top250', params).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.totalNum = res.data.total
          var movieData = res.data.subjects
          this.movieList = this.formatData(movieData)
        }
      }).catch(err => {
        console.log(err)
      })*/
    },
    // 转换数据
    formatData (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].rating.stars = data[i].rating.stars / 10
      }
      return data
    },
    // 页码管理
    handleChangePage (a) {
      console.log("page manager")
      console.log(a)
      console.log(this.page.currentPage)
      this.loadingData()
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .comedy-wrapper
    .movieList-wrapper
      .movie-wrapper
        margin: 10px 0
        .img-wrapper
          img
            width: 75px
        .detail-info
          margin-left: 20px
          .title-wrapper
            .title-link
              display: inline
              vertical-align: middle
              line-height: 1.5
              text-decoration: none
              font-size: 14px
              font-weight: 500
              &:visited
                color: #669
              &:link
                color: #37a
              &:hover
                background: #37a
                color: #fff
              .play-status
                color: rgb(0, 173, 63)
          .movie-info-wrapper
            margin: 10px 0
            .casts-wrapper,.genres-wrapper
              .cast
                font-size: 13px
                color: #666
                line-height: 150%
                &:after
                  display: inline-block
                  content: '/'
                &:last-child:after
                  content: ''
          .rate-wrapper
            .rate-stars
              display: inline-block
              height: 13px
            .count-rate-num
              font-size: 13px
              color: #666
    .page-wrapper
      text-align: center
  /*格式校正*/
</style>
