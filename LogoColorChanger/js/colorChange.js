var colorClass = ["red", "green", "blue", "grey"];
var i = 0;
var e = 360;


// -------------------------Logo Animation-------------------------
function rotationChange() {
	if(e === 90) {
		e = 360;
	} else {
		e -= 90;
	}
}

function logoRotate() {
	rotationChange();
	$("img").animate({
		'width': '26%'
	}, {
		duration: 500,
		step: function(now, fx) {
			$('img').css({
				'-webkit-transform': 'rotate(' + e + 'deg)',  //Safari 3.1+, Chrome  
		        '-moz-transform': 'rotate(' + e + 'deg)',     //Firefox 3.5-15  
		        '-ms-transform': 'rotate(' + e + 'deg)',      //IE9+  
		        '-o-transform': 'rotate(' + e + 'deg)',       //Opera 10.5-12.00  
		        'transform': 'rotate(' + e + 'deg)',          //Firefox 16+, Opera 12.50+  
			})
		}
	});
}



//------------------- Color Change--------------------------------
function classChange() {
	if(i > 2) { 
		i = 0;
	} else {
		i++;
	}
}

function colorChange() {
	$('body').removeClass(colorClass[i]);
	classChange();
	$('body').animate({
		backgroundColor: colorClass[i]
	});
	
}

$('img').click(function() {
	logoRotate();
	console.log(e + 'degrees');
	colorChange();
	console.log('color is now ' + colorClass[i]);
});