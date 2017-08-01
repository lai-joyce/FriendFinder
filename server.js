// //require and store each of the node modules in variables	

// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// //configure express server

// var app = express(); //informs node that express server is created

// var PORT = process.env.PORT || 3000;

// //standard code for Body-Parser for the server to more easily interpret data sent to it
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));
// // app.use(bodyParser.text());
// // app.use(bodyParser.json({type: "application/vnd.api+json"}));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.text());
// // app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// // app.use(express.static(path.join(__dirname, './app/public')));
// //point server to routing files
// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);

// //start server
// app.listen(PORT, function() {
// 	console.log("App listening on PORT: " + PORT);
// });

// data and the logic to manipulate that data lives on a node server. 
// we have routes that make that data and logic accessible
// we use ajax to access the data and push changes to the client's side

// fist thing we do is to set up our server. 

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

// as a last step, we need to include route paths in this file. 
// this means, include the routes.js file and the 'app' means
// we want to use express. 


// include api routes first. bcoz that's where we are pulling the data from
// to display it in html
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});