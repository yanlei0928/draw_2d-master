import Vue from 'vue'
import Router from 'vue-router'
import draw_2d from '@/view/draw_2d.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'draw_2d',
      component: draw_2d
    }
  ]
})
