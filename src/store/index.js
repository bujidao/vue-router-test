import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getter: {
  },
  mutations: {
    currentPage: function (state, page) {
      console.log('current movie list page')
      console.log(state)
      console.log(state.movie.page)
      state.movie.currentPage = page
    },
    perPage: function (state, count) {
      state.movie.count = count
    }
  }
})

export default store
