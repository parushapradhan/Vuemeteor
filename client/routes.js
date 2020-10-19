import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from '../imports/ui/layouts/About.vue';
import Home from '../imports/ui/layouts/Home.vue';

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
];

const router = new VueRouter({
	routes,
});

export default router;
