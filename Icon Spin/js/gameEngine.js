var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var robotMasters1 = new Image();
robotMasters1.src = 'res/robot-masters-1.png';
var spinButton = new Image();
spinButton.src = 'res/SpinButton.png';

var spin;

function Sprite(url,width,height,x,y,scale,totalFrames, randomSprite) {
	this.url = url;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.scale = scale || 1;
	this.totalFrames = totalFrames;
	this.randomSprite = randomSprite || false;

	var currentFrame;
		if(this.randomSprite) {
			currentFrame = Math.ceil(Math.random() * (0, this.totalFrames) - 1);
			// console.log(currentFrame);
		} else {
			currentFrame = 0;
		}
	
	this.render = function() {

		//Clear le Canvas
		// this.context.clearRect(0, 0, this.width, this.height);

		context.drawImage(
			this.url,
			currentFrame * this.width / this.totalFrames,
			0,
			this.width / this.totalFrames,
			this.height,
			this.x,
			this.y,
			this.width / this.totalFrames * this.scale,
			this.height * this.scale
		);
	};

}

function spin() {
	
}


function init() {
	window.requestAnimationFrame(init);

	renderGraphics();
};

function renderGraphics() {
	for(var i = 0; i < icons.length; i++) {
		icons[i].sprite.render();
		// console.log(icons[i].name + " loaded.");
	};
	spinButton.render();
}

