// this is all to direct the user and display the page
// depending on what they choose. 

var path = require('path');

module.exports = function (app) {


	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});


	// another way, if we are using the app, and if no other url
	// then send them to the home page. 
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

}