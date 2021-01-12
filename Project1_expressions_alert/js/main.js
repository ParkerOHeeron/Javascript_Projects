var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro"; // creating a rough family object
var Family = Family.fontcolor("blue"); // Changing all family font-color to blue
document.write(Dad); // writing to the page the dad variable
window.alert("Hello World");  //alert style hello world
document.write(Dad + " and " + Mom);  // concatenated str output
document.write(3 + 3); // having the page do basic math
function My_First_Function() {  //Defining a function and naming it
    var str = "This text is green!";  //Defining a variable and giving it a string value
    var result = str.fontcolor("green");   //Using the font color method on str variable

    document.getElementById("green_text").innerHTML = result;  //Putting the value of result into HTML element with "Green_Text" id
}