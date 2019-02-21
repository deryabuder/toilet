import Vue from 'vue'
import Router from 'vue-router'
import Toilet from '../components/toilet/Toilet.vue'
import Read from '../components/read/Read.vue'
import Weather from '../components/weather/Weather.vue'
import Setting from '../components/setting/Setting.vue'
import About from '../components/setting/subs/About.vue'
import Detail from '../components/setting/subs/Detail.vue'
import Help from '../components/setting/subs/Help.vue'
import Tips from '../components/setting/subs/Tips'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 设置重定向路由防止出现空白页面
      path: '/',
      redirect: '/toilet',
      component: Toilet
    },
    {
      path: '/toilet',
      name: 'Toilet',
      component: Toilet
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      children: [
        {
          path: 'about',
          component: About
        },
        {
          path: 'detail',
          component: Detail
        },
        {
          path: 'help',
          component: Help
        },
        {
          path: 'tips',
          component: Tips
        }
      ]
    }
  ]
})
