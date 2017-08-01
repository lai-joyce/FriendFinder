// // this page will determine what data the user sees
// // as well as what data the user will be able to post to our server. 
// // to store. 

// var friendsList = require('../data/friends.js');


// module.exports = function (app) {

// 	// whenever you go to this url, display friendsList in json format. 
// 	app.get('/api/friends', function(req, res) {
// 		res.json(friendsList);
// 	}); 


// 	// this is to allow user to post data to our api
// 	// this says, when the app tries to post to this route then run this function
// 	// the response 'res' will be read at the reserve.html script and used accordingly. 
// 	app.post('/api/friends', function(req, res) {
// 		if(tableData.length < 5) {
// 			tableData.push(req.body);
// 			res.json(true);
// 		} else {
// 			waitListData.push(req.body);
// 			res.json(false);
// 		}
// 	});


// 	// this will clear the table
// 	// as always here is the first step, creating a route in our routes.js file
// 	// here says, when you see this url, then clear all the arrays. 
// 	// after that we have to create our matching ajax in this case for the tables.html page
// 	app.post('/api/clear', function(){
// 		// tableData = [];
// 		waitListData = [];

// 		// console.log(tableData);
// 		console.log(waitListData);
// 	})




// }


// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array


	// user submits a form and it submits data to the server.
  app.post('/api/friends', function(req, res){

  // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user's numbers.
    // It will then choose the user with the least differences as the "best friend match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between the user"s scores and the scores of
    // each user in the database
    var totalDifference = 0;

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i].name);
      totalDifference = 0;

      // We then loop through all the scores of each friend
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

  });

};


