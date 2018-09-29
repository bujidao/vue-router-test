import Mock from 'mockjs'
// const Random = Mock.Random;
import { param2Obj } from '@/utils'

const List = []
const count = 1000

for (let i = 1; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname()
  }))
}

export default {
  // 获取列表
  getMovieList: config => {
    const { name, page = 1, limit } = param2Obj(config.url)

    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1) return false
      return true
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    const totalPage = Math.ceil(mockList.length / limit)

    return {
      code: 20000,
      data: {
        total: mockList.length,
        users: pageList
      }
    }
  }
}
