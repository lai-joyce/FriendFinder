// this page will determine what data the user sees
// as well as what data the user will be able to post to our server. 
// to store. 

var friendsList = require('../data/friends.js');


module.exports = function (app) {

	// whenever you go to this url, display friendsList in json format. 
	app.get('/api/friends', function(req, res) {
		res.json(friendsList);
	}); 


	// this is to allow user to post data to our api
	// this says, when the app tries to post to this route then run this function
	// the response 'res' will be read at the reserve.html script and used accordingly. 
	app.post('/api/friends', function(req, res) {
		if(tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else {
			waitListData.push(req.body);
			res.json(false);
		}
	});


	// this will clear the table
	// as always here is the first step, creating a route in our routes.js file
	// here says, when you see this url, then clear all the arrays. 
	// after that we have to create our matching ajax in this case for the tables.html page
	app.post('/api/clear', function(){
		// tableData = [];
		waitListData = [];

		// console.log(tableData);
		console.log(waitListData);
	})




}