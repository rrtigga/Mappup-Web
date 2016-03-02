var express = require('express');
var router = express.Router();
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://hittup.firebaseio.com/events");


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


router.get('/kanye', function(req, res, next) {
	myFirebaseRef.push({
		"eventTitle": "Kanye T.L.O.P. World Tour",
	    "eventDescription": "Watch Ye jump over Jumpman",
		"date": "February 18th",
		"eventURL": "https://www.facebook.com/events/535151279996049/",
		"startTime": "7:30pm",
		"endTime": "9:30pm",
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

router.get('/beyonce', function(req, res, next) {
	myFirebaseRef.push({
		"eventTitle": "Beyonce Formation Tour",
	    "eventDescription": "It's about to get stingy in the Bey Hive",
		"date": "March 18th",
		"eventURL": "https://www.facebook.com/events/554336751402288/",
		"startTime": "6:00pm",
		"endTime": "9:00pm",
		"location": { 
	      "coordinates": [37.4030,-121.9700], //[<latitude>, <longitude>]
	      "city": "Santa Clara",
	      "state": "California",
	      "street": "1 Santa Clara Avenue",
	      "zip": "95135",
	      "venueName": "Levi's Stadium"
	    },
	    "profilePicture": "http://cosmouk.cdnds.net/15/18/1600x800/landscape_nrm_1430565303-beyonce_at_the_brit_awards.jpg",
	    "coverPhoto": "https://www.thewrap.com/wp-content/uploads/2016/02/Beyonce-Formation.jpg"	
	});
  
  res.send('Event inserted');

});

module.exports = router;
