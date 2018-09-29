export default {
  path: '/photo',
  name: 'photo',
  component: () => import('@/components/photo/photo.vue'),
  meta: {
    title: '照片'
  },
  children: [
    {
      path: '/',
      name: 'photo',
      component: () => import('@/components/photo/welcome.vue'),
      meta: {
        title: ''
      }
    },
    {
      path: 'renwu',
      name: 'renwu',
      component: () => import('@/components/photo/detail-category/renwu.vue'),
      meta: {
        title: '人物'
      }
    },
    {
      path: 'fengjing',
      name: 'fengjing',
      component: () => import('@/components/photo/detail-category/fengjing.vue'),
      meta: {
        title: '风景'
      }
    },
    {
      path: 'logo',
      name: 'logo',
      component: () => import('@/components/photo/detail-category/logo.vue'),
      meta: {
        title: 'LOGO'
      }
    }
  ]
}
