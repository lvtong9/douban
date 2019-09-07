import Vue from 'vue'
import Router from 'vue-router'
import DbLogin from '../pages/DbLogin'
import DbIndex from '../pages/DbIndex'
import DbRegister from '../pages/DbRegister'
import DbSearch from '../pages/DbSearch'

import IndexDouBan from '../components/index/IndexDouBan'
import IndexMovie from '../components/index/IndexMovie'
import IndexRadio from '../components/index/IndexRadio'
import IndexBook from '../components/index/IndexBook'
import IndexGroup from '../components/index/IndexGroup'
import IndexDetails from '../components/index/IndexDetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dbindex',
      name: 'DbIndex',
      component: DbIndex,
      // *****二级导航*****
      children:[
        {
          path: 'douban',
          name: 'IndexDouBan',
          component: IndexDouBan
        },
        {
          path: 'movie',
          name: 'IndexMovie',
          component: IndexMovie
        }
        , {
          path: 'book',
          name: 'IndexBook',
          component: IndexBook
        }
        ,
        {
          path: 'radio',
          name: 'IndexRadio',
          component: IndexRadio
        },
        {
          path: 'group',
          name: 'IndexGroup',
          component: IndexGroup
        },
        {
          path: 'details/:id',
          name: 'IndexDetails',
          component: IndexDetails
        }
      ]
      // *****二级导航完*****
    },
    {
      path: '/dblogin',
      name: 'DbLogin',
      component: DbLogin
    },
    {
      path: '/dbregister',
      name: 'DbRegister',
      component: DbRegister
    },
    {
      path: '/dbsearch',
      name: 'DbSearch',
      component: DbSearch
    },
    {
      path:'/*',
      redirect:"/dbindex/douban"
    }
  ]
})
