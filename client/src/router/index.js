import Vue from 'vue'
import Router from 'vue-router'
import CabinetIndex from '@/components/Cabinet/Index'
import CabinetCreate from '@/components/Cabinet/CreateCabinet'
import CabinetEdit from '@/components/Cabinet/EditCabinet'
import CabinetShow from '@/components/Cabinet/ShowCabinet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cabinets',
      component: CabinetIndex
    },
    {
      path: '/cabinet/create',
      name: '/cabinet-create',
      component: CabinetCreate
    },
    {
      path: '/cabinet/edit/:cabinetId',
      name: '/cabinet-edit',
      component: CabinetEdit
    },
    {
      path: '/cabinet/:cabinetId',
      name: '/cabinet',
      component: CabinetShow
    }
  ]
})
