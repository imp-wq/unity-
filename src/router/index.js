import { createRouter, createWebHashHistory } from "vue-router"
import Introduce from '@/views/Introduce.vue'
import Guide from '@/views/Guide.vue'
import Video from '@/views/Video.vue'

const routes = [{ path: '/', redirect: '/introduce' }, {
  path: '/introduce',
  component: Introduce
}, {
  path: '/guide',
  component: Guide
}, {
  path: '/video',
  component: Video
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
