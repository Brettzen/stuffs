elem = document.getElementById('cat');
catCounter = 0;
elem.addEventListener('click', function(){
	catCounter++;
	document.getElementById('counter').innerHTML = "<p>Cat Clicks: " + catCounter + "</p>";
});