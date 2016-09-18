// var Firebase = require("firebase");
// var myFirebaseRef = new Firebase("https://hackmit-802f6.firebaseio.com/");

var numEntries = 0;
var totalScore = 0;
var avg = 0;

update = function(req, res) {
	numEntries++;
	totalScore += res;
	avg = totalScore / numEntries;
	avg = +avg.toFixed(2);
	return avg;
}