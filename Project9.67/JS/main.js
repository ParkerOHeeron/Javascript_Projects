function count_To_Ten() {
    var dig = "";
    var x = 1;
    while (x < 11) {
        dig += "<br>" + x;
        x++;
    }
    dig = dig.toString();
    document.getElementById("Counting_to_Ten").innerHTML = dig;
}

function myScript() {
    
            A = "Always ";
            B = "remember: ";
            document.write(A + B);

            X = "you ";
            Y = "are ";
            document.write(X + Y);

            M = "unique, ";
            N = "just like everyone else.";
            document.write(M + N);
        

}