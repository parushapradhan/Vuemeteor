import '../imports/api/fixtures';
import '../imports/api/methods';
import '../imports/api/publications';

Meteor.startup(() => {
	smtp = {
		username: ' postmaster@sandbox1d60ae47013b48bf891046e247dd0887.mailgun.org',
		password: 'd3cf3edc384eb665d0e0b6576560c67f-53c13666-44355a7c',
		server: 'smtp.mailgun.org',
		port: 587,
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
