import Mock from 'mockjs'
import movieApi from './movies'

Mock.setup({
  timeout: 1000 - 3000
})

Mock.mock(/\/movie\/listpage/, 'get', movieApi.getMovieList)
// Mock.mock(/\/movie\/updatemovie/, 'get', movieApi.updateMovie)
// Mock.mock(/\/movie\/removemovie/, 'get', movieApi.removeMovie)
// Mock.mock(/\/movie\/addmovie/, 'get', movieApi.addMovie)
// Mock.mock(/\/movie\/batchremovemovie/, 'get', movieApi.batchRemoveMovie)

export default Mock
