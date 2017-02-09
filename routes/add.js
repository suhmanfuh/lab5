var data = require("../data.json");

exports.addFriend = function(req, res) {
	console.log("addFriend called");

	// get parameter values
	var thename = req.query.name;
	var thedescription = req.query.description;

	// creating new friend object
	var newFriend = {
		"name": thename,
		"description": thedescription,
		"imageURL": "http://lorempixel.com/400/400/people"
	};


	// adding to friends array
	data.friends.push(newFriend);

	// take you back to the index route
	res.redirect('/');
}