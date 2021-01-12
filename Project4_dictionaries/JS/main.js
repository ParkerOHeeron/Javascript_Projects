function my_Dictionary() {
    var Animal = {   // animal object
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; // delete the sound of the animal object
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //try to output the previously deleted sound of the animal object
    
}