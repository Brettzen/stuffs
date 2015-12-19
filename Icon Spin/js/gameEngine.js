var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var robotMasters1 = new Image();
robotMasters1.src = 'res/robot-masters-1.png';
robotMasters1.robot = ["Cut Man", "Guts Man", "Ice Man", "Bomb Man", "Fire Man", "Elec Man"];
var spinButton = new Image();
spinButton.src = 'res/SpinButton.png';

var spin;
var theFrame; 

function Sprite(url,width,height,x,y,scale,totalFrames,randomSprite,frame) {
	this.url = url;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.scale = scale || 1;
	this.totalFrames = totalFrames;
	this.randomSprite = randomSprite || false;
	this.frame = 0;

	var currentFrame;
		if(this.randomSprite) {
			currentFrame = Math.floor(Math.random() * (0, this.totalFrames));
			theFrame = currentFrame;
			console.log(theFrame);
		} else {
			currentFrame = 0;
			theFrame = currentFrame;
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
	for(var i = 0; i < graphics.length; i++) {
		graphics[i].sprite.render();
		// console.log(graphics[i].name + " loaded.");
	};
	spinButton.render();
}

