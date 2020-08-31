import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base/BaseComponent.vue'
import TasksList from '../views/Tasks/TasksList.vue'

//import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '',
        //name: 'taskslist',
        component: TasksList
      },

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
