// function icon(x,y,src,parent){
// 	var newIcon = document.createElement("img");
// 	newIcon.setAttribute("x", x);
// 	newIcon.setAttribute("y", y);
// 	// newIcon.setAttribute("width", '170');
// 	// newIcon.setAttribute("height", '170');
// 	newIcon.setAttribute("src", src);
// 	newIcon.width: 135;
// 	newIcon.height: 135;
// 	newIcon.context: canvas.GetContext('2d');
// 	newIcon.setAttribute("alt", 'whatevs, you know?');
// 	console.log('new icon created.')
// 	document.getElementById(parent).appendChild(newIcon);
// }

var canvas = document.getElementById("canvas");

var robotMasters1 = new Image();
robotMasters1.src = "res/robot-masters-1.png";

function sprite(options) {
	var that = {},
		frameIndex = 0,
		tickCount = 0,
		ticksPerFrame = 0;
		numberOfFrames = options.numberOfFrames || 1;

	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;
	that.loop = options.loop;

	that.render = function() {

		// Clear the canvas
		// that.context.clearRect(0, 0, that.width, that.height);

		that.context.drawImage(
			that.image,
			frameIndex * that.width / numberOfFrames,
			0,
			that.width / numberOfFrames,
			that.height,
			0,
			0,
			that.width / numberOfFrames,
			that.height
		);	
	};

	that.update = function() {
		tickCount +=1;

		if(tickCount > ticksPerFrame) {
			tickCount = 0;
			if(frameIndex < numberOfFrames - 1) {
				frameIndex +=1;
			} else {
				frameIndex = 0;
			};
		};
	};

	return that;
}

