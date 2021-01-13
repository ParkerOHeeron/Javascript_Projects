function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        vote = "You are old enough to vote!";
    }
    else{
        vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;   // I do not know  why this doesn't work
}