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

useResponse = function() {
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
	for(i=1; i < obj.length; i++) {
		console.log('searching for ' + obj[i][0] + '...');
		if(userResponse == "open " + obj[i][0] || userResponse == "open the " + obj[i][0]) {
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

getResponse = function() {
	for(i=1; i < obj.length; i++) {
		console.log('searching for ' + obj[i][0] + '...');
		if(responseCheck == "get " + obj[i][0] || responseCheck == "get the " + obj[i][0] || responseCheck == "grab " + obj[i][0] || responseCheck == "grab the " + obj[i][0] || responseCheck == "pick up " + obj[i][0] || responseCheck == "pick up the " + obj[i][0] || responseCheck == "take " + obj[i][0] || responseCheck == "take the " + obj[i][0]) {
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