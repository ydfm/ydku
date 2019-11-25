import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Person from '@/pages/Person'
import RegisterPage from '@/pages/RegisterPage'
import LoginPage from '@/pages/LoginPage'
import ListenPage from '@/pages/ListenPage'
import CollectPage from '@/pages/CollectPage'

Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  name: 'Person',
		  component: Person
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
		  path: '/LoginPage',
		  name: 'LoginPage',
		  component: LoginPage
		},
		{
		  path: '/ListenPage',
		  name: 'ListenPage',
		  component: ListenPage
		},
		{
		  path: '/CollectPage',
		  name: 'CollectPage',
		  component: CollectPage
		}
  	]
})
