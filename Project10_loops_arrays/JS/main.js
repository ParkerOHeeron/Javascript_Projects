function Call_Loop() {
  var x = 10;
  while (x<20) {
    x++;
    console.log(x);
  }
}

function for_Loop() {
  var x = 10;
  for(var i = 0;i<20; i++){
    x++;
    console.log(x);
  }
}

function cat_pics() {
  var Cat_Picture = ["sleeping", "playing", "eating", "purring"];
  document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
      Cat_Picture[2] + ".";
}

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