// var icon1 = new icon(14,15,'res/robot-masters1.png', 'iconGroup1');
// var icon2 = new icon(200,15,'res/CouponCol2-borders.png', 'iconGroup1');
// var icon3 = new icon(800,15,'res/CouponCol3-borders.png', 'iconGroup1');
// function createIcon(width,height,x,y,scale,image,numberOfFrames,ticksPerFrame) {
// 	sprite = ({
// 		context: canvas.getContext('2d'),
// 		this.width: width,
// 		this.height: height,
// 		this.x: x,
// 		this.y: y,
// 		this.scale: scale,
// 		this.image: image,
// 		this.numberOfFrames: numberOfFrames,
// 		this.ticksPerFrame: ticksPerFrame
// 	});
// }

// icon1 = new createIcon(810,135,10,10,1.5,robotMasters1,6,4);
var icons = [];
var icon1 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 0,
	y: 0,
	scale: 2,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

var icon2 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 270,
	y: 0,
	scale: 2,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

var icon3 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 540,
	y: 0,
	scale: 2,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

var icon4 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 0,
	y: 270,
	scale: 2,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

var icon5 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 270,
	y: 270,
	scale: 2,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

var icon6 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 540,
	y: 270,
	scale: 2,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

function gameLoop() {
	window.requestAnimationFrame(gameLoop);

	// icon1.update();
	icon1.render();
	icon2.render();
	icon3.render();
	icon4.render();
	icon5.render();
	icon6.render();
};

robotMasters1.addEventListener("load", gameLoop);