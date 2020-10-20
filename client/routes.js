import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from '../imports/ui/pages/About.vue';
import Home from '../imports/ui/pages/Home.vue';
import Signin from '../imports/ui/pages/Login.vue';

const routes = [
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/signin',
		name: 'Signin',
		component: Signin,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
