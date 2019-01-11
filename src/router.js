import Vue from 'vue'
import Router from 'vue-router'
import App from './components/my-app/app'
import Demo from './components/demo/demo'
import Weixinapp from './components/weixinapp/weixinapp'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'App',
      component: App 
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo 
    },
    {
      path: '/weixinapp',
      name: 'Weixinapp',
      component: Weixinapp 
    }
  ]
})
