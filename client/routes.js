import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from '../imports/ui/pages/About.vue';
import Home from '../imports/ui/pages/Home.vue';
import Contact from '../imports/ui/pages/Contact.vue';

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
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
