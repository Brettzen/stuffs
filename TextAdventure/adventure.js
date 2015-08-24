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
		document.getElementById("game-text").innerHTML = gameText + "<li>You can interact with this world by typing commands such as <span class='commands'>look</span>, <span class='commands'>use</span>, <span class='commands'>open</span>, <span class='commands'>get</span>, or <span class='commands'>move</span>. You can also direct these commands towards <span class='objects'>objects</span> or <span class='items'>items</span>.</li>";
		helpSwitch = true;
		} else { 
		document.getElementById("game-text").innerHTML = gameText + "<li>There is no helping you, you miserable, vomitous mass.</li>";
		helpSwitch = false;
		}
	} else if(responseCheck == "look") {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + lookText + "</li>";
	} 
	// else if(responseCheck == "look " + obj1[0] || responseCheck == "look at the " + obj1[0] || responseCheck == "look at " + obj1[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj1[1] + "</li>";	
	// } else if(responseCheck == "look " + obj2[0] || responseCheck == "look at the " + obj2[0] || responseCheck == "look at " + obj2[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj2[1] + "</li>";
	// } else if(responseCheck == "look " + obj3[0] || responseCheck == "look at the " + obj3[0] || responseCheck == "look at " + obj3[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[1] + "</li>";
	// } else if(responseCheck == "look " + obj4[0] || responseCheck == "look at the " + obj4[0] || responseCheck == "look at " + obj4[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj4[1] + "</li>";
	// } else if(responseCheck == "look " + obj5[0] || responseCheck == "look at the " + obj5[0] || responseCheck == "look at " + obj5[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj5[1] + "</li>";
	// } else if(responseCheck == "look " + obj6[0] || responseCheck == "look at the " + obj6[0] || responseCheck == "look at " + obj6[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj6[1] + "</li>";
	// } else if(responseCheck == "look " + obj7[0] || responseCheck == "look at the " + obj7[0] || responseCheck == "look at " + obj7[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj7[1] + "</li>";
	// } else if(responseCheck == "look " + obj8[0] || responseCheck == "look at the " + obj8[0] || responseCheck == "look at " + obj8[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj8[1] + "</li>";
	// } else if(responseCheck == "look " + obj9[0] || responseCheck == "look at the " + obj9[0] || responseCheck == "look at " + obj9[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj9[1] + "</li>";
	// } else if(responseCheck == "look " + obj10[0] || responseCheck == "look at the " + obj10[0] || responseCheck == "look at " + obj10[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj10[1] + "</li>";
	// } else if(responseCheck == "look " + obj11[0] || responseCheck == "look at the " + obj11[0] || responseCheck == "look at " + obj11[0]) {
	// 	document.getElementById("game-text").innerHTML = gameText + "<li>" + obj11[1] + "</li>";




	// } 
	else if(responseCheck == "use " + obj1[0] || responseCheck == "use the " + obj1[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj1[2] + "</li>";
	} else if(responseCheck == "use " + obj2[0] || responseCheck == "use the " + obj2[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj2[2] + "</li>";
	} else if(responseCheck == "use " + obj3[0] || responseCheck == "use the " + obj3[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[2] + "</li>";
		if(event3 && obj3[0] == "door") {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[2] + "</li>";
			advanceStoryline();
			resetEvents();
			update();	
		}
	} else if(responseCheck == "use " + obj4[0] || responseCheck == "use the " + obj4[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj4[2] + "</li>";
	} else if(responseCheck == "use " + obj5[0] || responseCheck == "use the " + obj5[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj5[2] + "</li>";
	} else if(responseCheck == "use " + obj6[0] || responseCheck == "use the " + obj6[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj6[2] + "</li>";
	} else if(responseCheck == "use " + obj7[0] || responseCheck == "use the " + obj7[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj7[2] + "</li>";
	} else if(responseCheck == "use " + obj8[0] || responseCheck == "use the " + obj8[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj8[2] + "</li>";
	} else if(responseCheck == "use " + obj9[0] || responseCheck == "use the " + obj9[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj9[2] + "</li>"; 
	} else if(responseCheck == "use " + obj10[0] || responseCheck == "use the " + obj10[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj10[2] + "</li>"; 
	} else if(responseCheck == "use " + obj11[0] || responseCheck == "use the " + obj11[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj11[2] + "</li>"; 




	} else if(responseCheck == "open " + obj1[0] || responseCheck == "open the " + obj1[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj1[3] + "</li>";
	} else if(responseCheck == "open " + obj2[0] || responseCheck == "open the " + obj2[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj2[3] + "</li>";
	} else if(responseCheck == "open " + obj3[0] || responseCheck == "open the " + obj3[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[3] + "</li>";
		if(event3 && obj3[0] == "door") {
			document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[2] + "</li>";
			advanceStoryline();
			resetEvents();
			update();	
		}
	} else if(responseCheck == "open " + obj4[0] || responseCheck == "open the " + obj4[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj4[3] + "</li>";
	} else if(responseCheck == "open " + obj5[0] || responseCheck == "open the " + obj5[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj5[3] + "</li>";
	} else if(responseCheck == "open " + obj6[0] || responseCheck == "open the " + obj6[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj6[3] + "</li>";
	} else if(responseCheck == "open " + obj7[0] || responseCheck == "open the " + obj7[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj7[3] + "</li>";
		if(obj7[0] == "loose board") {
			event1 = true;
			update();
		}
	} else if(responseCheck == "open " + obj8[0] || responseCheck == "open the " + obj8[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj8[3] + "</li>";
	} else if(responseCheck == "open " + obj9[0] || responseCheck == "open the " + obj9[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj9[3] + "</li>";
	} else if(responseCheck == "open " + obj10[0] || responseCheck == "open the " + obj10[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj10[3] + "</li>";
	} else if(responseCheck == "open " + obj11[0] || responseCheck == "open the " + obj11[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj11[3] + "</li>";




	} else if(responseCheck == "get " + obj1[0] || responseCheck == "get the " + obj1[0] || responseCheck == "grab " + obj1[0] || responseCheck == "grab the " + obj1[0] || responseCheck == "pick up " + obj1[0] || responseCheck == "pick up the " + obj1[0] || responseCheck == "take " + obj1[0] || responseCheck == "take the " + obj1[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj1[4] + "</li>";
	} else if(responseCheck == "get " + obj2[0] || responseCheck == "get the " + obj2[0] || responseCheck == "grab " + obj2[0] || responseCheck == "grab the " + obj2[0] || responseCheck == "pick up " + obj2[0] || responseCheck == "pick up the " + obj2[0] || responseCheck == "take " + obj2[0] || responseCheck == "take the " + obj2[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj2[4] + "</li>";
	} else if(responseCheck == "get " + obj3[0] || responseCheck == "get the " + obj3[0] || responseCheck == "grab " + obj3[0] || responseCheck == "grab the " + obj3[0] || responseCheck == "pick up " + obj3[0] || responseCheck == "pick up the " + obj3[0] || responseCheck == "take " + obj3[0] || responseCheck == "take the " + obj3[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[4] + "</li>";
	} else if(responseCheck == "get " + obj4[0] || responseCheck == "get the " + obj4[0] || responseCheck == "grab " + obj4[0] || responseCheck == "grab the " + obj4[0] || responseCheck == "pick up " + obj4[0] || responseCheck == "pick up the " + obj4[0] || responseCheck == "take " + obj4[0] || responseCheck == "take the " + obj4[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj4[4] + "</li>";
	} else if(responseCheck == "get " + obj5[0] || responseCheck == "get the " + obj5[0] || responseCheck == "grab " + obj5[0] || responseCheck == "grab the " + obj5[0] || responseCheck == "pick up " + obj5[0] || responseCheck == "pick up the " + obj5[0] || responseCheck == "take " + obj5[0] || responseCheck == "take the " + obj5[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj5[4] + "</li>";
		if(obj5[0] == "bokken") {
			getBokken = true;
			update();
		}
	} else if(responseCheck == "get " + obj6[0] || responseCheck == "get the " + obj6[0] || responseCheck == "grab " + obj6[0] || responseCheck == "grab the " + obj6[0] || responseCheck == "pick up " + obj6[0] || responseCheck == "pick up the " + obj6[0] || responseCheck == "take " + obj6[0] || responseCheck == "take the " + obj6[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj6[4] + "</li>";
	} else if(responseCheck == "get " + obj7[0] || responseCheck == "get the " + obj7[0] || responseCheck == "grab " + obj7[0] || responseCheck == "grab the " + obj7[0] || responseCheck == "pick up " + obj7[0] || responseCheck == "pick up the " + obj7[0] || responseCheck == "take " + obj7[0] || responseCheck == "take the " + obj7[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj7[4] + "</li>";
		if(obj7[0] == "loose board") {
			event1 = true;
			update();
		}
	} else if(responseCheck == "get " + obj8[0] || responseCheck == "get the " + obj8[0] || responseCheck == "grab " + obj8[0] || responseCheck == "grab the " + obj8[0] || responseCheck == "pick up " + obj8[0] || responseCheck == "pick up the " + obj8[0] || responseCheck == "take " + obj8[0] || responseCheck == "take the " + obj8[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj8[4] + "</li>";
	} else if(responseCheck == "get " + obj9[0] || responseCheck == "get the " + obj9[0] || responseCheck == "grab " + obj9[0] || responseCheck == "grab the " + obj9[0] || responseCheck == "pick up " + obj9[0] || responseCheck == "pick up the " + obj9[0] || responseCheck == "take " + obj9[0] || responseCheck == "take the " + obj9[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj9[4] + "</li>";
	} else if(responseCheck == "get " + obj10[0] || responseCheck == "get the " + obj10[0] || responseCheck == "grab " + obj10[0] || responseCheck == "grab the " + obj10[0] || responseCheck == "pick up " + obj10[0] || responseCheck == "pick up the " + obj10[0] || responseCheck == "take " + obj10[0] || responseCheck == "take the " + obj10[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj10[4] + "</li>";
	} else if(responseCheck == "get " + obj11[0] || responseCheck == "get the " + obj11[0] || responseCheck == "grab " + obj11[0] || responseCheck == "grab the " + obj11[0] || responseCheck == "pick up " + obj11[0] || responseCheck == "pick up the " + obj11[0] || responseCheck == "take " + obj11[0] || responseCheck == "take the " + obj11[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj11[4] + "</li>";
		if(obj11[0] == "pin") {
			getPin = true;
			update();
		}



	} else if(responseCheck == "move " + obj1[0] || responseCheck == "move the " + obj1[0] || responseCheck == "push " + obj1[0] || responseCheck == "push the " + obj1[0] || responseCheck == "pull " + obj1[0] || responseCheck == "pull the " + obj1[0] || responseCheck == "lift " + obj1[0] || responseCheck == "lift the " + obj1[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj1[5] + "</li>";
	} else if(responseCheck == "move " + obj2[0] || responseCheck == "move the " + obj2[0] || responseCheck == "push " + obj2[0] || responseCheck == "push the " + obj2[0] || responseCheck == "pull " + obj2[0] || responseCheck == "pull the " + obj2[0] || responseCheck == "lift " + obj2[0] || responseCheck == "lift the " + obj2[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj2[5] + "</li>";
	} else if(responseCheck == "move " + obj3[0] || responseCheck == "move the " + obj3[0] || responseCheck == "push " + obj3[0] || responseCheck == "push the " + obj3[0] || responseCheck == "pull " + obj3[0] || responseCheck == "pull the " + obj3[0] || responseCheck == "lift " + obj3[0] || responseCheck == "lift the " + obj3[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj3[5] + "</li>";
	} else if(responseCheck == "move " + obj4[0] || responseCheck == "move the " + obj4[0] || responseCheck == "push " + obj4[0] || responseCheck == "push the " + obj4[0] || responseCheck == "pull " + obj4[0] || responseCheck == "pull the " + obj4[0] || responseCheck == "lift " + obj4[0] || responseCheck == "lift the " + obj4[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj4[5] + "</li>";
	} else if(responseCheck == "move " + obj5[0] || responseCheck == "move the " + obj5[0] || responseCheck == "push " + obj5[0] || responseCheck == "push the " + obj5[0] || responseCheck == "pull " + obj5[0] || responseCheck == "pull the " + obj5[0] || responseCheck == "lift " + obj5[0] || responseCheck == "lift the " + obj5[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj5[5] + "</li>";
	} else if(responseCheck == "move " + obj6[0] || responseCheck == "move the " + obj6[0] || responseCheck == "push " + obj6[0] || responseCheck == "push the " + obj6[0] || responseCheck == "pull " + obj6[0] || responseCheck == "pull the " + obj6[0] || responseCheck == "lift " + obj6[0] || responseCheck == "lift the " + obj6[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj6[5] + "</li>";
	} else if(responseCheck == "move " + obj7[0] || responseCheck == "move the " + obj7[0] || responseCheck == "push " + obj7[0] || responseCheck == "push the " + obj7[0] || responseCheck == "pull " + obj7[0] || responseCheck == "pull the " + obj7[0] || responseCheck == "lift " + obj7[0] || responseCheck == "lift the " + obj7[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj7[5] + "</li>";
		if(obj7[0] == "loose board") {
			event1 = true;
			update();
		}
	} else if(responseCheck == "move " + obj8[0] || responseCheck == "move the " + obj8[0] || responseCheck == "push " + obj8[0] || responseCheck == "push the " + obj8[0] || responseCheck == "pull " + obj8[0] || responseCheck == "pull the " + obj8[0] || responseCheck == "lift " + obj8[0] || responseCheck == "lift the " + obj8[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj8[5] + "</li>";
	} else if(responseCheck == "move " + obj9[0] || responseCheck == "move the " + obj9[0] || responseCheck == "push " + obj9[0] || responseCheck == "push the " + obj9[0] || responseCheck == "pull " + obj9[0] || responseCheck == "pull the " + obj9[0] || responseCheck == "lift " + obj9[0] || responseCheck == "lift the " + obj9[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj9[5] + "</li>";
	} else if(responseCheck == "move " + obj10[0] || responseCheck == "move the " + obj10[0] || responseCheck == "push " + obj10[0] || responseCheck == "push the " + obj10[0] || responseCheck == "pull " + obj10[0] || responseCheck == "pull the " + obj10[0] || responseCheck == "lift " + obj10[0] || responseCheck == "lift the " + obj10[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj10[5] + "</li>";
		if(obj10[0] == "portrait") {
			event2 = true;
			update();
		}
	} else if(responseCheck == "move " + obj11[0] || responseCheck == "move the " + obj11[0] || responseCheck == "push " + obj11[0] || responseCheck == "push the " + obj11[0] || responseCheck == "pull " + obj11[0] || responseCheck == "pull the " + obj11[0] || responseCheck == "lift " + obj11[0] || responseCheck == "lift the " + obj11[0]) {
		document.getElementById("game-text").innerHTML = gameText + "<li>" + obj11[5] + "</li>";




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
	} else if(responseCheck == "use pin in keyhole" || responseCheck == "use the pin in keyhole" || responseCheck == "use pin in the keyhole" || responseCheck == "use the pin in the keyhole" || responseCheck == "use pin on keyhole" || responseCheck == "use the pin on keyhole" || responseCheck == "use pin on the keyhole" || responseCheck == "use the pin on the keyhole") {
		if(!event3) {
			document.getElementById("game-text").innerHTML = gameText + "<li>You insert the pin into the keyhole. After a few minutes of adpet maneuvering, you feel the tumblers slide in place. The door has been unlocked!</li>";
			event3 = true;
			update();
		} else if(!event4) {
			document.getElementById("game-text").innerHTML = gameText + "<li>You masterfully relock the door and then break your pin. Well done.</li>";
			event4 = true;
			update();
		} else {
			document.getElementById("game-text").innerHTML = gameText + "<li>You no longer have the pin. You broke it. It's dead.</li>";
			update();
		}
	}else {
		document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
	}		
	lookResponse();
	
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
}
	event10 = false;