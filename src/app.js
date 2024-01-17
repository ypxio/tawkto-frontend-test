import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		component: () => import('./pages/Home.vue')
	},
  {
		path: '/category/:id',
		component: () => import('./pages/Category.vue')
	}
]

const router = new VueRouter({
  routes,
	mode: 'history'
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
});