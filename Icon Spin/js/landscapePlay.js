// var icon1 = new icon(14,15,'res/robot-masters1.png', 'iconGroup1');
// var icon2 = new icon(200,15,'res/CouponCol2-borders.png', 'iconGroup1');
// var icon3 = new icon(800,15,'res/CouponCol3-borders.png', 'iconGroup1');
var icon1 = sprite({
	context: canvas.getContext('2d'),
	width: 810,
	height: 135,
	x: 10,
	y: 10,
	scale: 1.5,
	image: robotMasters1,
	numberOfFrames: 6,
	ticksPerFrame: 4
});

function gameLoop() {
	window.requestAnimationFrame(gameLoop);

	// icon1.update();
	icon1.render();
};

robotMasters1.addEventListener("load", gameLoop);