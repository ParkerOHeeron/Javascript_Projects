
/* Call_Loop() shows how a while loop is implemented*/
function Call_Loop() {
  var x = 10;
  while (x<20) {
    x++;
    document.getElementById("Loop").innerHTML = "While loop index: " + x;
  }
}

/* for_Loop() shows how a for loop is implemented*/
function for_Loop() {
  var x = 10;
  for(var i = 0;i<20; i++){
    x++;
    document.getElementById("forLoop").innerHTML = "For loop index: " + x;
  }
}

/* cat_pics() shows how to create and utilize the index of an array*/
function cat_pics() {
  var Cat_Picture = ["sleeping", "playing", "eating", "purring"];
  document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
      Cat_Picture[2] + ".";
}


/* constant_function() shows how to add attributes to a variable and output them in html*/
function constant_function() {
  const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}
  Musical_Instrument.color = "blue";
  Musical_Instrument.price = "$1000";
  Musical_Instrument.history = "Brand New";
  document.getElementById("Constant").innerHTML = "The cost of the " + 
      Musical_Instrument.type + " was " + Musical_Instrument.price;

  let abc = "abc";
  console.log(abc);
}


/* let car uses the let keyword to make an object (car)*/
function myCar() {
  let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
      return "The car is a " + this.year + this.color + this.make + this.model;
    }
  };
  document.getElementById("Car_Object").innerHTML = car.description();// outputs 
}  