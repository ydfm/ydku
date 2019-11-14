/*
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-13 19:03:52
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
import searchRes from '@/pages/searchRes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChapterList',
      component: ChapterList
    },
    {
      path:'/playPage/:id',
      name:'playPage',
      component: playPage,
      props:true
    },
    {
      path:'/searchPage',
      name:'searchPage',
      component: searchPage
    },
    {
      path:'/searchRes',
      name:'searchRes',
      component: searchRes
    }
  ]
})
