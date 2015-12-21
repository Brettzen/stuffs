canvas.addEventListener('click', function(e) {
	var mouseX = e.offsetX, mouseY = e.offsetY;
	console.log('clicked at x: ' + mouseX + ', y: ' + mouseY);

	if(mouseX >= spinButton.x && mouseX <= (spinButton.x + spinButton.width / spinButton.totalFrames * spinButton.scale) &&
		mouseY >= spinButton.y && mouseY <= (spinButton.y + (spinButton.height * spinButton.scale))) {
		console.log('clicked ' + icons[6].name);
		spin();
	}
});

$(spinButton).click(function() {
	console.log('button clicked!');
});