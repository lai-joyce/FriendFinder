

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// app.get("/", function(req, res){
// 	res.send("Hello World");
// });



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// app.use(function(req, res) {
// 	res.setHeader("Content-Type", "text/plain")
// 	res.write("you posted:\n")
// 	res.end(JSON.stringify(req.body, null, 2))
// });

// Include route paths in this file. 
// Include the routes.js file and the 'app' means
// we want to use express. 


// Include api routes first. that's where we are pulling the data from
// to display it in html.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});