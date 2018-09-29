export default{
  path: '/movie',
  name: 'movie',
  component: () => import('@/components/movie/movie.vue'),
  meta: {
    title: '电影'
  },
  children: [
    {
      path: '',
      name: 'movie',
      component: () => import('@/components/movie/welcome.vue'),
      meta: {
        title: ''
      }
    },
    {
      path: 'comedy/:name/:id',
      name: 'comedy',
      component: () => import('@/components/movie/detail-category/comedy.vue'),
      meta: {
        title: '喜剧电影'
      }
    },
    {
      path: 'suspense/:name/:id',
      name: 'suspense',
      component: () => import('@/components/movie/detail-category/suspense.vue'),
      meta: {
        title: '悬疑电影'
      }
    },
    {
      path: 'action/:name/:id',
      name: 'action',
      component: () => import('@/components/movie/detail-category/action.vue'),
      meta: {
        title: '动作电影'
      }
    },
    {
      path: '',
      name: '404',
      component: () => import('@/components/default/default.vue'),
      meta: {
        title: '404'
      }
    }
  ]
}
