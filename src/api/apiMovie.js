import { request } from '@/utils/request'
import api from '@/api/index'
const baseUrl = api.Hallowmas

// 获取电影列表
export function getMovieList (params) {
  return request({
    // url: baseUrl+'v2/movie/top250',
    url: '/v2/movie/top250',
    method: 'post',
    params: params
  })
}
