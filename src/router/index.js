import Vue from 'vue'
import Router from 'vue-router'
import ControlIndex from '@/components/FoodSample'
import Index from '@/components/Index'
import KnowledgeIndex from '@/components/FoodKgraph'
import Nav from '@/components/Nav'
import PublicSentiment from '@/components/PublicSent'
import 'mapbox-gl/dist/mapbox-gl.css'
Vue.use(Router)

export default new Router({
  /* mode: 'history', */
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    
    {
      path: '/control',
      name: 'ControlIndex',
      component: ControlIndex
    },
    {
      path: '/knowledge',
      name: 'KnowledgeIndex',
      component: KnowledgeIndex
    },
    {
      path: '/public',
      name: 'Public',
      component: PublicSentiment
    } 
  ]
})
