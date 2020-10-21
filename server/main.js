import '../imports/api/fixtures';
import '../imports/api/methods';
import '../imports/api/publications';

Meteor.startup(() => {
	smtp = {
		username: Meteor.setting.username,
		password: Meteor.setting.password,
		server: Meteor.setting.server,
		port: Meteor.setting.port,
	};
	process.env.MAIL_URL =
		'smtp://' +
		encodeURI(smtp.username) +
		':' +
		encodeURIComponent(smtp.password) +
		'@' +
		encodeURIComponent(smtp.server) +
		':' +
		smtp.port;
});

Accounts.onCreateUser(function(options, user) {
	Meteor.setTimeout(function() {
		Accounts.sendVerificationEmail(user._id);
	}, 1000);

	return user;
});
