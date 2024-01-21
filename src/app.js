import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = [
  {
		path: '/',
		component: () => import('./views/Home.vue')
	},
  {
		path: '/category/:id',
		component: () => import('./views/Category.vue')
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