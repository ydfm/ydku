/*
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-15 23:24:44
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
import Index from '@/pages/Index'
import Person from '@/pages/Person'
import ListenPage from '@/pages/ListenPage'
import RegisterPage from '@/pages/RegisterPage'
import LoginPage from '@/pages/LoginPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/ListenPage',
      name: 'ListenPage',
      component: ListenPage
    },
    {
      path: '/ChapterList/:aid',                //需要改
      name: 'ChapterList',
      component: ChapterList,
      props:true
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
      path:'/searchRes/:value',
      name:'searchRes',
      component: searchRes,
      props:true
    }
  ]
})
