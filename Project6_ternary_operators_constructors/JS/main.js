



/* The ride function uses the variables Height and Can_ride to demonstrate the '?' operator*/
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

/* class Customer
    {
    string Fullname;
    Boolean Active;
    Customer(string name) {
        Fullname = name;
        Active = true;
    }
}

Customer cust = new Customer("Brenda Smith");
Fullname = "Brenda Smith";
Active = true;
*/

/* the Vehicle function uses aspects of a vehicle to demonstrate the 'this' keyword*/
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

/* The variables Jack, Emily, and Erik and the function myFunction demonstrate the new variable*/
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

/* the Nested_Function sends the output of the Count function to the nested_function html dom element*/
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}