var $ = function(id) {
    return document.getElementById(id);
}

var town ="";
var cnt = "";

function grabFile(town) {
	var request = new XMLHttpRequest();
	if (request){
		request.onreadystatechange = function() {
			parseResponse(request);
		};
		
		var KEY = "http://api.openweathermap.org/data/2.5/weather?q=" + town + "&cnt= " + cnt + "&units=metric&appid=aa6e580535bdc3d4589179dfdfc6f204";
		request.open("GET", KEY, true);
		request.send(null);
		console.log();
	}
}
function parseResponse(request) {
	if (request.readyState == 4) {
		if (request.status == 200 || request.status == 304) {
			var data = JSON.parse(request.responseText);
			
			console.log(data);

            console.log(data.cod);
            var low_temp = data.main.temp_min;
            console.log(low_temp);
            var details = $("details");
            details.innerHTML = low_temp;
            var high_temp = data.main.temp_max;
            console.log(high_temp);
            var details = $("details");
            details.innerHTML = high_temp;
            var temp = data.main.temp;
            console.log(temp);
            var details = $("details");
            details.innerHTML = temp;
            var humidity = data.main.humidity;
            console.log(humidity);
            var details = $("details");
            details.innerHTML = humidity;
            var pressure = data.main.pressure;
            console.log(pressure);
            var details = $("details");
            details.innerHTML = pressure;
            var weather = data.weather[0].description;
            console.log(weather);
            var details = $("details");
            details.innerHTML = weather;
            var windspd = data.wind.speed;
            console.log(windspd);
            var details = $("details");
            details.innerHTML = windspd;
            var icon = "<img src = 'https://openweathermap.org/img/wn/"+ data.weather[0].icon +".png'></img>";
            $("icon").innerHTML = icon;
            
            var forecast = "<b><i>Forecast for<i><b> "+ town +
			"<h3>" +"</h3>"
			for(var i=0; i<3; i++){
                forecast +="<tr>"+"<h3>" + "Temp : "+ temp + " °C "+"</h3>"+
                "<h3>"+ "Lowest Temp : "+ low_temp +" °C "+ "</h3>"+
                "<h3> "+ "Highest Temp : "+ high_temp +" °C "+ "</h3>"+
                "<h3> "+ "Wind Speed :"+ windspd +"m/s"+ "</h3>"+
                "<h3> "+ "Humidity : "+ humidity +" %"+ "</h3>"+
				"<h3> "+ "Atmospheric pressure : "+ pressure +"hPa"+ "</h3>"+
				"<h3>"+"Description : "+ weather + "</h3>"+ "</tr>";
                $("details").innerHTML = forecast; 
            }
        }
    }
}
window.onload = function(){
	
    results.onclick = function(){
        town = $("town").value;
        grabFile(town);
    }
}