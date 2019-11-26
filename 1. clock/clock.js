"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = minutes;
    $("seconds").firstChild.nodeValue = seconds;
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

window.onload = function() {
    setInterval(displayCurrentTime, 1000);
    displayCurrentTime();
    
};