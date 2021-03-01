var X = 10;
/*function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
*/
function Add_numbers_1() {
    console.log(15 + X); //console logs 25
}
function Add_numbers_2() {
    console.log(X + 100); //console logs 110
}
Add_numbers_1();
Add_numbers_2();

/* 1 is less than 2*/
if (1<2) {
    document.write("The left number is smaller than the number on the right.")
}
/* get_Date2() is a more polite get_Date()*/
function get_Date2() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting2").innerHTML = "How are you today Sir or Madamn?";
    }
}

/* get_Date() asks you how your day is if it is during the day*/
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

/* Age_Function takes the age the user inputs and compares it to 18, older can vote and younger cannot*/
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        vote = "You are old enough to vote!";
    }
    else{
        vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;   
}

/* Time_function() tells you if its morning afternoon or evening*/
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}