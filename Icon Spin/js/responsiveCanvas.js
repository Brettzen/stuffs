var c = $('#responsiveCanvas');
var ct = c.get(0).getContext('2d');
var container = $(c).parent();

$(window).resize( respondCanvas );

function respondCanvas() {
	c.attr('width', $(container).width());
	c.attr('height', $(container).height());
	//redraw canvas
	var x = c.width();
	var y = c.height();  			
	ct.font = "20px Calibri";
	
	ct.fillStyle = "#DDDDDD"; //black
	ct.fillRect( 0, 0, x, y); //fill the canvas
}

respondCanvas();