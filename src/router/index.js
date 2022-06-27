import { createRouter, createWebHashHistory } from "vue-router"
import Introduce from '@/views/Introduce.vue'
import Knowledge from '@/views/Knowledge.vue'
import Video from '@/views/Video.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [{ path: '/', redirect: '/introduce' }, {
  path: '/introduce',
  component: Introduce
},
{
  path: '/thesisTeach/knowledge',
  component: Knowledge
},
// {
//   path: '/thesisTeach',
//   children: [{
//     path: 'knowledge',
//     component: Knowledge
//   }]
// },

// 404页面
{
  path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound,
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
