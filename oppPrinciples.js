////////////////////INHERITANCE////////////////////////////

// class Animal{}

// class Bird extends Animal{}

// class Eagel extends Bird{}

// //////////////////////////// example /////////////////

class Bird{
    useWings(){
        console.log("Flying!")
    }
}

class Eagle extends Bird{
    useWings(){
        super.useWings()
            console.log("Also Flying")
        
    }
}

class Penguin extends Bird{
    useWings(){
        console.log("Diving!")
    }
}

var baldEagle = new Eagle();
var angryPenguin = new Penguin();

baldEagle.useWings()
angryPenguin.useWings()