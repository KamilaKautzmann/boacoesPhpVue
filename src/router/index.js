import Vue from 'vue'
import Router from 'vue-router'
import InstituicaoLista from '@/components/InstituicaoLista'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InstituicaoLista',
      component: InstituicaoLista
    }
  ]
})
