var plotVar = 0;

advanceStoryline = function() {
	if(plotVar == 0) {
		currentArea = "krisRoom";
		document.getElementById("game-text").innerHTML = gameText + "<li>" + userName + " , eh.... Very well, " + userName + "!</li>";
		document.getElementById("game-text").innerHTML = gameText + "<li>" + userName + " , eh.... Very well, " + userName + "!</li><li>~</li><li>~</li><li>~</li><li>You wake up to rays of light shining upon your face, peeking at you through the tattered curtains of your bedroom window. You slowly sit up and attempt the rub the sleep from your eyes. With a stretch and a yawn, you get out of your bed and lightly step on the cold, wooden floor. The floor lightly creaks underneath your weight.</li>";
		plotVar++;
		update();
		console.log('Current Area: ' + currentArea + ". Plot Variable: " + plotVar + ".");
	} else if(plotVar == 1) {
		currentArea = "hallway";
		//document.getElementById("game-text").innerHTML = gameText + "<li>You enter the hallway. All is quiet throughout the orphanage.</li>";	
		document.getElementById("game-text").innerHTML = gameText + "<li>You open the door and cautiously step out into the hallway...</li><li>~</li><li>~</li><li>~</li><li>Thanks for playing the demo! Stay tuned for more.</li>";
		// plotVar++;	
		update();
		console.log('Current Area: ' + currentArea + ". Plot Variable: " + plotVar + ".");	
	} else {
		document.getElementById("game-text").innerHTML = gameText + "<li>Well, I don't know what you did, but you broke the game. Congratulations.</li>";
	}
}