export default {
  path: '/music',
  name: 'music',
  component: () => import('@/components/music/music.vue'),
  meta: {
    title: '音乐'
  },
  children: [
    {
      path: '/',
      name: 'music',
      component: () => import('@/components/music/welcome.vue'),
      meta: {
        title: ''
      }
    },
    {
      path: 'huayu',
      name: 'huayu',
      component: () => import('@/components/music/detail-category/huayu.vue'),
      meta: {
        title: '环球音乐'
      }
    },
    {
      path: 'gangtai',
      name: 'gangtai',
      component: () => import('@/components/music/detail-category/gangtai.vue'),
      meta: {
        title: '港台音乐'
      }
    }
  ]
}
