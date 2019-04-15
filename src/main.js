import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Add from './add.vue'
import VueRouter from 'vue-router'
import Test from './test.vue'


Vue.component('test', Test);

Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
  { path: '/add', component: Add },
  // { path: '/', component: App }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
