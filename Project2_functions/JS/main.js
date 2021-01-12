function My_Second_Function() {  //Defining a function and naming it
    var str = "This text is green!";  //Defining a variable and giving it a string value
    var result = str.fontcolor("green");   //Using the font color method on str variable
    console.log("In the function");
    document.getElementById("Green_Text").innerHTML = result;  //Putting the value of result into HTML element with "Green_Text" id
}

function myCon() { // My concatenate function
    var sentence = "I am learning";     // a variable named sentence
    sentence += " a lot from this book!";  // sentence = sentence + " a lot from this book!"
    document.getElementById("Concatenate").innerHTML = sentence;  // sending sentence to the concatenate id
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}