import Landing from '@/views/landing'
import allMenus from '@/views/menus/allMenus.vue'
import newMenu from '@/views/menus/newMenu.vue'
import showMenu from '@/views/menus/showMenu.vue'
import editMenu from '@/views/menus/editMenu.vue'
import editSubMenu from '@/views/menus/editSubMenu.vue'
import addSubMenu from '@/views/menus/addSubMenu.vue'

const routes = [

  {
    path: '/all-menus',
    name: 'all-menus',
    component: allMenus
   },
  {
    path: '/menus/new',
    name: 'newMenu',
    component: newMenu
  },
  {
    path: '/menu/:id',
    name: 'showMenu',
    component: showMenu
  },
  {
    path: '/menu/edit-menu/:id',
    name: 'editMenu',
    component: editMenu
  },
  {
    path: '/menu/add-submenu/:id',
    props(route) {
      return route.query || {}
    },
    name: 'addSubMenu',
    component: addSubMenu
  },
  {
    path: '/menu/edit-submenu/:id',
    props(route) {
      return route.query || {}
    },
    name: 'editSubMenu',
    component: editSubMenu
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  }
]

export default routes