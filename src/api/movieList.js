import request from '@/utils/request'

export function getMovieListPage(params) {
  return request({
    url: '/movie/listpage',
    method: 'get',
    params: params
  })
}
export function editMovie(params) {
  return request({
    url: '/movie/updatemovie',
    method: 'get',
    params: params
  })
}
export function removeMovie(params) {
  return request({
    url: '/movie/removemovie',
    method: 'get',
    params: params
  })
}
export function addMovie (params) {
  return request({
    url: '/movie/addmovie',
    method: 'get',
    params: params
  })
}
export function batchRemoveMovie (params) {
  return request({
    url: '/movie/batchremovemovie',
    method: 'get',
    params: params
  })
}
