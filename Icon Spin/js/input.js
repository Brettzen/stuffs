canvas.addEventListener('click', function(e) {
	var mouseX = e.offsetX, mouseY = e.offsetY;
	console.log('clicked at x: ' + mouseX + ', y: ' + mouseY);

	// if(mouseX >= spinButton.x && mouseX <= (spinButton.x + spinButton.width) &&
	// 	mouseY >= spinButton.y && mouseY <= (spinButton.y + (spinButton.height * spinButton.scale))) {
	// 	console.log('clicked ' + graphics[5].sprite.url.robot[5] + "!");
	// 	spin();
	// }

	for(i=0;i<graphics.length;i++) {
		if(mouseX >= graphics[i].sprite.x && mouseX <= (graphics[i].sprite.x + graphics[i].sprite.width / graphics[i].sprite.totalFrames * graphics[i].sprite.scale) && mouseY >= graphics[i].sprite.y && mouseY <= (graphics[i].sprite.y + (graphics[i].sprite.height * graphics[i].sprite.scale))) {
			// console.log("Current Logistics: " + graphics[i].sprite.x + "," + graphics[i].sprite.y + "," + graphics[i].sprite.width + "," + graphics[i].sprite.height + "," + graphics[i].sprite.scale);
			if(graphics[i].sprite.url.robot) {
				for(j=0;j<graphics[i].sprite.totalFrames;j++) {
					if(j === graphics[i].sprite.currentFrame) {
						console.log("You clicked " + graphics[i].sprite.url.robot[j] + "!");
					}
				}
			} else if(graphics[i].name === "Spin Button") {
				spin();
			} else {
				console.log("You clicked " + graphics[i].name + "!")
			}
		}
	}


});