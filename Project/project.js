var $ = function (id) { return document.getElementById(id); };

function grabFile(file) {
	var request = new XMLHttpRequest();
	if (request){
		request.onreadystatechange = function() {
			parseResponse(request);
		};
		
		var KEY = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=aa6e580535bdc3d4589179dfdfc6f204";
		request.open("GET", KEY, true);
		request.send(null);
	}
	
	window.onload= function(){

	}
}