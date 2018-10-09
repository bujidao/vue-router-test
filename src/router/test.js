export default {
  path: '/test',
  name: 'test',
  component: () => import('@/components/test/test.vue'),
  meta: {
    title: '测试'
  },
  children: [
    {
      path: '*',
      name: 'test1',
      component: () => import('@/components/test/detail-test/filter.vue')
    },
    {
      path: '/filter',
      name: 'test1',
      component: () => import('@/components/test/detail-test/filter.vue')
    },
    {
      path: '/pin',
      name: 'test2',
      component: () => import('@/components/test/detail-test/pin.vue')
    }
  ]
}
