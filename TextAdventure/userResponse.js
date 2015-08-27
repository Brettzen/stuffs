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
		var commandSearch = responseCheck.search(command);
		// console.log('searching for ' + command + '...');
		if(commandSearch != -1) {
			console.log('found ' + command + '.');
			for(j=1; j < obj.length; j++) {
				var object = obj[j][0];
				var objSearch = responseCheck.search(object);
				// console.log("Searching for " + object + "...");
				if(objSearch != -1) {
					if(command == 'use') {
						console.log(object + ' found. Searching for an item to manipulate ' + object + '...');
						for(k=0; k < items.length; k++) {
							var item = items[k].name;
							var itemSearch = responseCheck.search(item);
							if(itemSearch != -1 && object != item) {
								console.log(item + ' found. Checking for relevant events...');
								if(getPin && object == 'keyhole' && item == 'pin' && currentArea == 'krisRoom') {
									if(!event3) {
										console.log('pre unlock text');
										document.getElementById("game-text").innerHTML = gameText + "<li>You insert the pin into the keyhole. After a few minutes of adept maneuvering, you feel the tumblers slide in place. The door has been unlocked!</li>";
										event3 = true;
										console.log('post unlock text');
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
					if(event3 && object == "door" && command == "open" || event3 && object == "door" && command == "use") {
						advanceStoryline();
						resetEvents();
						update();	
					}
					if(object == "loose board" && command == "move" || object == "loose board" && command == "open" || object == "loose board" && command == "get") {
						event1 = true;
						update();
					}
					if(object == "portrait" && command == "move") {
						event2 = true;
						update();
					}
					if(object == "bokken" && command == "get") {
						getBokken = true;
						update();
					}
					if(object == "pin" && command == "get") {
						getPin = true;
						update();
					}
					break;
				} 
			}
			break;
		} else {
			console.log('unable to find ' + command + '.');
		}
	}
}