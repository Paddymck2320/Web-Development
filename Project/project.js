var $ = function (id) { return document.getElementById(id); };

function grabFile(file) {
	var request = new XMLHttpRequest();
	if (request){
		request.onreadystatechange = function() {
			parseResponse(request);
		};
		
		request.open("GET", file, true);
		request.send(null);
	}
}