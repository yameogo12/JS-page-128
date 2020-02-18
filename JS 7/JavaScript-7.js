function Ride_Function(){
     var Height, Can_ride;
	 Height = document.getElementById("Height").value;
	 Can_ride = (Height < 52) ? "You are too short": " You are tall enough";
	 document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
};
	 
	 // Election Challenge

function election_Function() {
	var ELECTABILITE, You_must_participated;
	ELECTABILITE = document.getElementById("ELECTABILITE").value;
	you_must_participated = (ELECTABILITE >= 18) ? "You can to Voice your vote" : "Sorry you can't participated yet!";
	document.getElementById("ELECT").innerHTML= you_must_participated + "To this election";
};



// Constructors
function Vehicle(Make, Model, Year, Color){
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
};

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("keywords_and_Constructors").innerHTML =
	"Erick drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
	"manufactured in " + Erik.Vehicle_year;
};

// HIDE AN IMAGE OR A PROGRAM
function myFunction() {
  var x = document.getElementById("myHIDE");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// NESTED FUNCTION 
function count_Function() {
	document.getElementById("Counting").innerHTML = Count();
	function Count() {
		var Starting_point = 900;
		function Plus_one() {Starting_point += 100;}
		Plus_one();
		return Starting_point;
	}
};