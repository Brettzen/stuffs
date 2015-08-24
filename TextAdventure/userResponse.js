var lookTerms = [
	"look ",
	"look at ",
];

lookResponse = function() {
	for(i=1; i < obj.length; i++) {
		console.log('searching for ' + obj[i][0] + '...');
		if(userResponse == "look " + obj[i][0] || userResponse == "look at " + obj[i][0] || userResponse == "look at the " + obj[i][0]) {
			console.log(obj[i][0] + ' found. Printing description.');
			document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[i][1] + "</li>";
			break;
		}
	}
}