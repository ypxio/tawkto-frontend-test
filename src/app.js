import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'

import HomeView from '../src/views/Home.vue'
import CategoryView from '../src/views/Category.vue'

Vue.use(VueRouter)

var routes = [
  {
		path: '/',
		component: HomeView
	},
  {
		path: '/category/:id',
		component: CategoryView
	}
]

var router = new VueRouter({
  routes,
	mode: 'history'
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
});