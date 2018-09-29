<template>
  <div class="comedy-wrapper">
    <el-table
      :data="movies">
      <el-table-column
        label="名称"
        prop="name">
        <template slot-scope="scope">
          <router-link
           :to="{name: 'comedy'}">
            {{scope.row.name}}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        label="时长"
        prop="time" @click="showTimeSome()">
      </el-table-column>
      <el-table-column
        label="导演"
        prop="director">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="props">
          <el-button @click.native="showDetail(props.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog :dialog="dialog"></Dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是喜剧电影',
      dialog: {
        visible: false,
        data: ''
      },
      movies: [
        {
          name: '大话西游',
          time: '120',
          director: '周星驰',
          description: '大话西游好看'
        },
        {
          name: '鬼子来了',
          time: '120',
          director: '姜文',
          description: '柜子来了好看'
        },
        {
          name: '战狼',
          time: '120',
          director: '吴京',
          description: '战狼好看'
        },
        {
          name: '黑客帝国',
          time: '120',
          director: '不知道',
          description: '帝国好看'
        },
        {
          name: '美国队长',
          time: '120',
          director: '大导演',
          description: 'haokan '
        },
        {
          name: '英国队长',
          time: '120',
          director: 'tom',
          description: 'haokaaaan '
        },
        {
          name: '猫和老鼠',
          time: '1200',
          director: '大导演',
          description: '超级喜欢猫和老鼠 '
        },
        {
          name: '中国队长',
          time: '120',
          director: '大导演',
          description: 'hao打发kan '
        },
        {
          name: '中国队长',
          time: '120',
          director: '大导演',
          description: 'hao打发kan '
        }
      ]
    }
  },
  methods: {
    showDetail (movie) {
      this.dialog = {
        visible: true,
        data: movie
      }
    },
    showTimeSome () {
      console.log("ahahhahaa")
    }
  }
}
</script>
