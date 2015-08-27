console.log('Loaded!');

var gameText;
var nextResponse;
var userResponse = "";
var responseCheck;
var userName;
var nameCheck = 0;
var unknownResponse;
var helpSwitch;

goToText = function() {
	document.getElementById('user').focus();
}

userInput = function(response) {
	if (event.keyCode == 38)  {
		document.getElementById('user').value = userResponse;
		console.log('up arrow pressed');
	} else if (event.keyCode == 40)  {
		document.getElementById('user').value = "";
		console.log('down arrow pressed');
	} else if (event.keyCode == 13 && nameCheck == 2) {
		inputCode(response.value);
	} else if(event.keyCode == 13){
		getName(response.value);
	}
}

getName = function(resp) {
	userResponse = resp;
	updateText();
	if(userResponse != "") {
		if(nameCheck == 0) {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + userResponse + "? Are you sure? </li>";
			userName = userResponse;
			nameCheck = 1;
		} else if(nameCheck == 1) {
			if(responseCheck == "yes" || responseCheck == "y" || responseCheck == "ya" || responseCheck == "indeed" || responseCheck == "sure" || responseCheck == "yea") {
				nameCheck = 2;
				advanceStoryline();
			} else {
				document.getElementById("game-text").innerHTML = gameText + "<li>Hmmm... Let's try this again.</li><li>What is your name?</li>"
				nameCheck = 0;
			}
		}
	}
}	

inputCode = function(resp) {
	console.log(resp);
	userResponse = resp;
	updateText();
	searchResponse();
}

updateText = function() {
	responseCheck = userResponse.toLowerCase();
	gameText = document.getElementById('game-text').innerHTML + "<li>>: " + userResponse + "</li>";
	document.getElementById("game-text").innerHTML = gameText;
	document.getElementById('user').value = "";
	document.getElementById('bottom').scrollIntoView(true);
}

repeatText = function() {

}

resetEvents = function() {
	event1 = false;
	event2 = false;
	event3 = false;
	event4 = false;
	event5 = false;
	event6 = false;	
	event7 = false;
	event8 = false;
	event9 = false;
	event10 = false;
}
	