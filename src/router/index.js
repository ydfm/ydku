/*
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-12 09:39:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ChapterList from '@/pages/ChapterList'
import playPage from '@/pages/playPage'
import searchPage from '@/pages/searchPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChapterList',
      component: ChapterList
    },
    {
      path:'/playPage',
      name:'playPage',
      component: playPage
    },
    {
      path:'/searchPage',
      name:'searchPage',
      component: searchPage
    }
  ]
})
