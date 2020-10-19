import Vue from 'vue';

import '../imports/ui/plugins';

import App from '../imports/ui/App.vue';

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL',
});

import router from './routes';
Meteor.startup(() => {
	new Vue({
		el: '#app',
		...App,
		router,
	});
});
