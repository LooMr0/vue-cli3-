export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "news" */'@/views/news/index.vue')
  },
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "news" */'@/views/news/index.vue')
  }
]
