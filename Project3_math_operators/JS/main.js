/* The following main.js file shows some of the uses of the operators +,-.*,%,++,-- */

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48/6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function inc_dec() {
    var x = 5;
    x++;
    document.getElementById("Math9").innerHTML = x;
    var y = 5.25;
    y--;
    document.getElementById("Math8").innerHTML = y;
}

function rng() {
    window.alert(Math.random());
    window.alert(Math.random() * 100);
}
