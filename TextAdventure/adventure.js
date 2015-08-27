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
	newResponse();
}

newResponse = function() {
	if(responseCheck == "quit" || responseCheck == "end") {
		document.getElementById("game-text").innerHTML = gameText + "<li>Quitting is for babies, little girls, and men who've just had their ears ripped off. Do you fit into one of these categories?</li>";
	} else if(responseCheck == "help") {
		if(!helpSwitch) {
		document.getElementById("game-text").innerHTML = gameText + "<li>You can interact with this world by typing commands such as <span class='commands'>look</span>, <span class='commands'>use</span>, <span class='commands'>open</span>, <span class='commands'>get</span>, or <span class='commands'>move</span>. You can also direct these commands towards <span class='objects'>objects</span> and <span class='items'>items</span>.</li>";
		helpSwitch = true;
		} else { 
		document.getElementById("game-text").innerHTML = gameText + "<li>There is no helping you, you miserable, vomitous mass.</li>";
		helpSwitch = false;
		}
	} else if(responseCheck == "look") {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + lookText + "</li>";
	} else if(responseCheck == "what" || responseCheck == "repeat" || responseCheck == "what did you say" || responseCheck == "what did you say?" || responseCheck == "say again") {
		console.log('repeated');
		repeatText();
	} else if(responseCheck == "") {
	
	} else if(responseCheck == "look bokken") {
		if(getBokken) {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + bokken["description"] + "</li>";
		} else {
			document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
		}
	} else if(responseCheck == "use bokken") {
		if(getBokken) {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + bokken["use"] + "</li>";
		} else {
			document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
		}
	} else if(responseCheck == "look pin") {
		if(getPin) {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + pin["description"] + "</li>";
		} else {
			document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
		}
	} else if(responseCheck == "use pin") {
		if(getPin) {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + pin["use"] + "</li>";
		} else {
			document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
		}
	} 
	else {
		document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
	}		
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
	