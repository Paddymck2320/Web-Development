var $ = function (id) { return document.getElementById(id); };

var Students =  [];
var personNumber = 2;

var Student = function(firstname, lastname, grade){
    this.firstname = firstname;
    this.lastname = lastname;
    this.grade = grade;
}

var displayScores = function () { 
    $("scores").value = " ";

    if(Students.length === 0){
        Students = localStorage.getItem("Students")|| "";
        Students = JSON.parse(localStorage.Students);
    }
    for(var i = 0; i < Students.length; i++)
    {
        var score = "";
        score += "," + Students[i].lastname;
        score += ":" + Students[i].firstname;
        score += "\n";
        $("scores").value += score;
    } 
    
    var average = 0;
    for(var j = 0; j < Students.length; j++)
    {
        var t =  parseInt(Students[j].grade);
        average += t;
    }
    average = average / Students.length;
    $("average_score").value = average.toFixed(2);
};

var addScore = function () {
    var firstname = $("first_name").value;
    var lastname = $("last_name").value;
    var grade = $("score").value;

    var person = new Student(firstname, lastname, grade);

    Students.push(person);
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
    displayScores();
};

var clearScores = function () {   

    
    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    
    $("first_name").focus();
};

var sortScores = function () {  
    Students = Students.sort(); 
     console.log(Students);
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
    displayScores();
};