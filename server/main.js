import '../imports/api/fixtures';
import '../imports/api/methods';
import '../imports/api/publications';
Meteor.startup(() => {
	process.env.ROOT_URL = 'http://www.doggoappreciation.com';
	// smtp = {
	// 	username: 'yourmail@gmail.com',
	// 	password: 'secretpassword',
	// 	server: 'smtp.gmail.com',
	// 	port: 587,
	// };
	// process.env.MAIL_URL =
	// 	'smtp://' +
	// 	encodeURI(smtp.username) +
	// 	':' +
	// 	encodeURIComponent(smtp.password) +
	// 	'@' +
	// 	encodeURIComponent(smtp.server) +
	// 	':' +
	// 	smtp.port;
});

Accounts.onCreateUser(function(options, user) {
	if (options.profile) {
		user.profile = options.profile;
	} else {
		user.profile = {};
	}
	user.profile.rank = 'doggo appreciation +1';
	if (options.email) {
		Meteor.setTimeout(function() {
			Accounts.sendVerificationEmail(user._id);
		}, 2 * 1000);
	}
	return user;
});
