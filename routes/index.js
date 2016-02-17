var express = require('express');
var router = express.Router();
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://hittup.firebaseio.com/events");


/* GET home page. */
router.get('/', function(req, res, next) {

var myFirebaseRef = new Firebase("https://hittup.firebaseio.com/events");
	var json=[];
	var jsonArray;
	var data;
	var str = "";
	myFirebaseRef.once("value", function(snapshot) {

		//object
	  data = snapshot.val();
	  str = JSON.stringify(data);
	  json = eval('[' + str + ']');	  
	  for (var i = json.length - 1; i >= 0; i--) {
	  	console.log(json[i]);
	  }
	  
	});

	res.send(str);
});


router.get('/insert', function(req, res, next) {
	myFirebaseRef.push({
		"eventTitle": "Kanye T.L.O.P. World Tour",
	    "eventDescription": "Watch Ye jump over Jumpman",
		"date": "2016-02-17",
		"startTime": "2016-02-17T03:26:41.265Z",
		"endTime": "2016-02-17T03:29:41.265Z",
		"location": { 
	      "coordinates": [38.534447547308,-121.74880507201], //[<latitude>, <longitude>]
	      "city": "Davis",
	      "state": "California",
	      "street": "1 Shields Avenue",
	      "zip": "95616",
	      "venueName": "ARC"
	    },
	    "profilePicture": "http://cdn.urbanislandz.com/wp-content/uploads/2016/02/Kanye-The-Life-of-Pablo-cover-art.jpg",
	    "coverPhoto": "https://consequenceofsound.files.wordpress.com/2015/04/screen-shot-2015-04-16-at-8-54-18-am.png?w=807"	
	});
  
  res.send('Event inserted');

});

module.exports = router;
