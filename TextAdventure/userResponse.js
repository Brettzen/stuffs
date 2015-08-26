var lookTerms = [
	"look ",
	"inspect",
	"search"
];
var commandTerms = [
	"look",
	"use",
	"open",
	"get",
	"move"
]

searchResponse = function() {
	for(i=0; i < commandTerms.length; i++) {
		var command = commandTerms[i];
		var commandSearch = userResponse.search(command);
		console.log('searching for ' + command + '...');
		if(commandSearch != -1) {
			for(j=1; j < obj.length; j++) {
				var object = obj[j][0];
				var objSearch = userResponse.search(object);
				console.log("Searching for " + object + "...");
				if(objSearch != -1) {
					console.log(object + " found. Attempting to " + command + " it.")
					document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[j][i+1] + "</li>";
					break;
				} else {
					console.log('unable to find ' + object + ' to ' + command + '.');
				}
			}
			break;
		} else {
			console.log('unable to find ' + command + '.');
		}
	}
}

lookResponse = function() {
	var commandSearch = userResponse.search('look');
	if(commandSearch != -1) {
		for(i=1; i < obj.length; i++) {
			var objSearch = userResponse.search(obj[i][0]);
			console.log('searching for ' + obj[i][0] + '...');
			if(objSearch != -1) {
				console.log(obj[i][0] + ' found. Printing description.');
				document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[i][1] + "</li>";
				break;
			}
		}
	}
}

useResponse = function() {
	var commandSearch = userResponse.search('use');
	for(i=1; i < obj.length; i++) {
		console.log('searching for ' + obj[i][0] + '...');
		if(userResponse == "use " + obj[i][0] || userResponse == "use the " + obj[i][0]) {
			console.log(obj[i][0] + ' found. Printing description.');
			document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[i][2] + "</li>";
			if(event3 && obj3[0] == "door") {
				advanceStoryline();
				resetEvents();
				update();	
			}
			break;
		}
	}
}

openResponse = function() {
	var commandSearch = userResponse.search('open');
	if(commandSearch != -1) {
		for(i=1; i < obj.length; i++) {
			var objSearch = userResponse.search(obj[i][0])
			console.log('searching for ' + obj[i][0] + '...');
			if(objSearch != -1) {
				console.log(obj[i][0] + ' found. Printing description.');
				document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[i][3] + "</li>";
				if(event3 && obj3[0] == "door") {
					advanceStoryline();
					resetEvents();
					update();	
				}
				if(obj7[0] == "loose board") {
					event1 = true;
					update();
				}
				break;
			}
		}
	}
}

getResponse = function() {
	var commandSearch = userResponse.search('get');
	if(commandSearch != -1) {
		for(i=1; i < obj.length; i++) {
			var objSearch = userResponse.search(obj[i][0])
			console.log('searching for ' + obj[i][0] + '...');
			if(objSearch != -1) {
				console.log(obj[i][0] + ' found. Printing description.');
				document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[i][4] + "</li>";
				if(obj5[0] == "bokken") {
					getBokken = true;
					update();
				}
				if(obj7[0] == "loose board") {
					event1 = true;
					update();
				}
				if(obj11[0] == "pin") {
					getPin = true;
					update();
				}
				break;
			}
		}
	}
}

moveResponse = function() {
	for(i=1; i < obj.length; i++) {
		console.log('searching for ' + obj[i][0] + '...');
		if(responseCheck == "move " + obj[i][0] || responseCheck == "move the " + obj[i][0] || responseCheck == "push " + obj[i][0] || responseCheck == "push the " + obj[i][0] || responseCheck == "pull " + obj[i][0] || responseCheck == "pull the " + obj[i][0] || responseCheck == "lift " + obj[i][0] || responseCheck == "lift the " + obj[i][0]) {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[i][5] + "</li>";
			if(obj7[0] == "loose board") {
				event1 = true;
				update();
			}
			if(obj10[0] == "portrait") {
				event2 = true;
				update();
			}
			break;
		}
	}
}