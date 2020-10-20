import Vue from 'vue';
import '../imports/ui/plugins';
import App from '../imports/ui/App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL',
});

import router from './routes';
Meteor.startup(() => {
	Vue.use(Vuetify);
	const vuetify = new Vuetify();
	new Vue({
		el: '#app',
		...App,
		router,
		vuetify,
	});
});
