var lookTerms = [
	"look",
	"inspect",
	"search",
	"glance",
	"view",
	"observe",
	"spy",
	"check out"
];
var useTerms = [
	"use",
	"operate",
	"insert"
];
var openTerms = [
	"open",
	"reveal"
];
var getTerms = [
	"get",
	"pick up",
	"take",
	"grab"
];
var moveTerms = [
	"move",
	"push",
	"pull",
	"lift",
	"shove",
	"nudge"
];

var commandTerms = [
	lookTerms,
	useTerms,
	openTerms,
	getTerms,
	moveTerms
]

searchResponse = function() {
	if(responseCheck != "") {
		for(i=0; i < commandTerms.length; i++) {
			var commandSection = commandTerms[i];
			var command;
			for(a=0; a < commandSection.length; a++) {
				command = commandSection[a];
				console.log("searching for " + command);
				var commandSearch = responseCheck.search(command);
				if(commandSearch != -1) {
					command = commandSection[a];
					break;
				}
			}
			if(commandSearch != -1) {
				console.log('found ' + command + '.');
				for(j=1; j < obj.length; j++) {
					var object = obj[j][0];
					var objSearch = responseCheck.search(object);
					if(objSearch != -1) {
						if(command == 'use') {
							console.log(object + ' found. Searching for an item to manipulate ' + object + '...');
							for(k=0; k < items.length; k++) {
								var item = items[k].name;
								var itemSearch = responseCheck.search(item);
								if(itemSearch != -1 && object != item) {
									console.log(item + ' found. Checking for relevant events...');
									if(object == 'keyhole' && item == 'pin' && currentArea == 'krisRoom') {
										if(!event3) {
											document.getElementById("game-text").innerHTML = gameText + "<li>You insert the pin into the keyhole. After a few minutes of adept maneuvering, you feel the tumblers slide in place. The door has been unlocked!</li>";
											event3 = true;
											update();
											break;
										} else if(!event4) {
											document.getElementById("game-text").innerHTML = gameText + "<li>You masterfully relock the door and then break your pin. Well done.</li>";
											event4 = true;
											update();
											break;
										} else {
											document.getElementById("game-text").innerHTML = gameText + "<li>You no longer have the pin. You broke it. It's dead.</li>";
											update();
											break;
										}
									break;
									}
								break;
								} else {
									console.log('No items found.');
									document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[j][i+1] + "</li>";
								}
							}
						} else {
							console.log(object + " found. Attempting to " + command + " it.");
							document.getElementById("game-text").innerHTML = gameText + "<li>" + obj[j][i+1] + "</li>";
						}
						if(event3 && object == "door" && currentArea == "krisRoom") {
							if(command == openTerms[a] || command == useTerms[a]) {
								advanceStoryline();
								resetEvents();
								update();	
							}
						}
						if(object == "loose board") {
							if(command == moveTerms[a] || command == openTerms[a] || command == getTerms[a]) {
								event1 = true;
								update();
							}
						}
						if(object == "portrait" && command == moveTerms[a]) {
							event2 = true;
							update();
						}
						if(object == "bokken" && command == getTerms[a]) {
							items[0].name = "bokken";
							getBokken = true;
							update();
						}
						if(object == "pin" && command == getTerms[a]) {
							items[1].name = "pin";
							getPin = true;
							update();
						}
						break;
					} else if(objSearch == -1 && j == obj.length - 1) {
						console.log('no objects found. Searching items.');
						for(l=0; l < items.length; l++) {
							var item = items[l].name;
							var itemSearch = responseCheck.search(item);
							if(itemSearch != -1) {
								console.log(command);
								if(command == lookTerms[a]) {
									document.getElementById("game-text").innerHTML = gameText + "<li>" + items[l].description + "</li>";
									break;
								}
								else if(command == useTerms[a]) {
									document.getElementById("game-text").innerHTML = gameText + "<li>" + items[l].use + "</li>";
									break;
								} else {
									document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
								}
							} else if(itemSearch == -1 && l == items.length -1) {
								console.log('no items found either.');
								if(responseCheck == lookTerms[a] || responseCheck == lookTerms[a] + " around" || responseCheck == lookTerms[a] + " the perimeter" ||  responseCheck == lookTerms[a] + " room" || responseCheck == lookTerms[a] + " the area" || responseCheck == lookTerms[a] + " the room" ||  responseCheck == lookTerms[a] + " area" || responseCheck == lookTerms[a] + " perimeter") {
									document.getElementById("game-text").innerHTML = gameText + "<li>" + lookText + "</li>";
								} else {
									miscResponses();
								}
							}
						}
					}
				}
				break;
			} else if(commandSearch == -1 && i == commandTerms[i].length - 1) {
				console.log('unable to find any commands.');
				miscResponses();
			}
		}
	} else {
		document.getElementById("game-text").innerHTML = gameText;
	}
}

miscResponses = function() {
	if(responseCheck == "quit" || responseCheck == "end" || responseCheck == "give up") {
		document.getElementById("game-text").innerHTML = gameText + "<li>Quitting is for babies, little girls, and men who've just had their ears ripped off. Do you fit into one of these categories?</li>";
	} else if(responseCheck == "help") {
		if(!helpSwitch) {
		document.getElementById("game-text").innerHTML = gameText + "<li>You can interact with this world by typing commands such as <span class='commands'>look</span>, <span class='commands'>use</span>, <span class='commands'>open</span>, <span class='commands'>get</span>, or <span class='commands'>move</span>. You can also direct these commands towards <span class='objects'>objects</span> and <span class='items'>items</span>.</li>";
		helpSwitch = true;
		} else { 
		document.getElementById("game-text").innerHTML = gameText + "<li>There is no helping you, you miserable, vomitous mass.</li>";
		helpSwitch = false;
		}
	} else if(responseCheck == "what" || responseCheck == "repeat" || responseCheck == "what did you say" || responseCheck == "what did you say?" || responseCheck == "say again") {
		console.log('repeated');
		repeatText();
	} else {
		document.getElementById("game-text").innerHTML = gameText + "<li>I haven't any idea what you're talking about, " + userName + ". Mayhaps you could try asking for <span class='commands'>help</span> and I could assist you better?</li>";
	}	
}