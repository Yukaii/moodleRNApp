var config = require('./config');
var moodle_client = require('moodle-client');

moodle_client.init({
	wwwroot: 'http://moodle.ntust.edu.tw',
	username: config.username,
	password: config.password}
).then(client => {
	console.log(client.token);
	client.call({
		wsfunction: 'core_webservice_get_site_info'
	}).then(r => {
		client.call({
			wsfunction: 'core_enrol_get_users_courses',
			args: {
				userid: r.userid
			}
		}).then(r => {
			console.log(r);
		});
	});
});
