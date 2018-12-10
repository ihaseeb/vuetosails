import Vue from 'vue'
import Router from 'vue-router'
// import Chat from '@/components/chat/index.vue'
import HelloWorld from '../components/HelloWorld.vue'
import { store } from '../store'
// import SignUp from '@/components/Authentication/signup.vue'
// import SignIn from '@/components/Authentication/signin.vue'
// import authCheck from '../middleware/authCheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/signup',
    //   name: 'SignUp',
    //   component: SignUp
    // },
    // {
    //   path: '/signin',
    //   name: 'SignIn',
    //   component: SignIn
    // }
  ]
})
