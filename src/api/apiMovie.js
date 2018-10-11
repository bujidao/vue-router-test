import { request } from '@/utils/request'

// 获取电影列表
export function getMovieList (params) {
  return request({
    url: '/v2/movie/top250',
    method: 'get',
    params: params
  })
}
