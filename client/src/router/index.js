import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Usercream from '@/components/Users/cream'

import UserEdittest1 from '@/components/Users/EditUsertest1'

import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cream',
      name: 'cream',
      component: Usercream
    },
   
    {
      path: '/test1',
      name: 'test1',
      component: UserEdittest1
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'users-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ]
})
