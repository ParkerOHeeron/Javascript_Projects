
function writeDoc() {
    document.write(typeof "Word"); //type of string
    document.write("  ");
    document.write(typeof 3); // type of number
    document.write("  ");
    document.write(3E310); // Infinity
    document.write("  ");
    document.write(-3E310); // -Infinity
    document.write("  ");
    document.write(10>2); //true
    document.write("  ");
    document.write(10<2); //false
    document.write("  ");
    document.write("10" + 5); //105
    document.write("  ");
    document.write(10 == 10); //true
    document.write("  ");
    document.write(3 == 11); //false
    document.write("  ");
    x = 10;
    y = 10;
    document.write(x === y); //true
    document.write("  ");
    x = 82;
    y = "82";
    document.write(x === y); // false
    document.write("  ");
    a = "Magnus";
    b = "Magnus";
    document.write(a === b); // true
    document.write("  ");
    document.write(5 > 2 && 10 > 4); // true
    document.write("  ");
    document.write(5 > 10 && 10 > 4); //false
    document.write("  ");
    document.write(5 > 10 || 10 > 4); // true
    document.write("  ");
    document.write(5 > 10 || 10 > 20); // false
    document.write("  ");
}

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    //document.getElementById("Test").innerHTML = isNaN('This is a string');
    //document.getElementById("Test").innerHTML = isNaN(0/0);
    console.log(2+2);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // false
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10); // true
}