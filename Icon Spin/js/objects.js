function icon(x,y,src,parent){
	var newIcon = document.createElement("img");
	newIcon.setAttribute("x", x);
	newIcon.setAttribute("y", y);
	// newIcon.setAttribute("width", '170');
	// newIcon.setAttribute("height", '170');
	newIcon.setAttribute("src", src);
	newIcon.setAttribute("alt", 'whatevs, you know?');
	console.log('new icon created.')
	document.getElementById(parent).appendChild(newIcon);
}