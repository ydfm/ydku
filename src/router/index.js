/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-09 09:45:55
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index';
import News from '@/pages/News';
import Novel from '@/pages/Novel';
import Music from '@/pages/Music';
import History from '@/pages/History';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Novel',
      name: 'Novel',
      component: Novel
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
    // {
    //   path: '/History/:name',
    //   name: 'History',
    //   component: History,
    //   props:true
      
    // }
  ]
})
