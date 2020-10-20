import Vue from 'vue';
import '../imports/ui/plugins';
import App from '../imports/ui/App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL',
});

import router from './routes';
Meteor.startup(() => {
	Vue.use(Vuetify, {
		iconfont: 'mdi',
	});
	const vuetify = new Vuetify({
		theme: { light: true },
	});
	new Vue({
		el: '#app',
		...App,
		router,
		vuetify,
	});
});
