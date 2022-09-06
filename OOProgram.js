class Animal{
    constructor(color = "yellow", energy = 100 ){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        if(this.energy > 0){
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } 
        else if (this.energy == 0){
            this.sleep()
        }
    }

    sleep(){
        this.energy += 20;
        console.log(this.energy)
    }

    getColor(){
        console.log(color)
    }

}

class Cat extends Animal{
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy ){
        super(color, energy)
        this.sound = sound
        this.canClimbTrees = canClimbTrees
        this.canJumpHigh = canJumpHigh
    }

    makeSound(){
        console.log(this.sound)
    }

}


class Bird extends Animal{
    constructor(sound = "Chirp", canFly = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canFly = canFly

    }

    makeSound(){
        console.log(this.sound)

    }

}

class HouseCat extends Cat{
    constructor(houseCatSound = "meow", sound, canClimbTrees, canJumpHigh, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }

        console.log(this.houseCatSound)
    }
}

class Tiger extends Cat{
    constructor(tigerSound = "Roar!", sound, canClimbTrees, canJumpHigh, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound

    }

    makeSound(option){
        if(option){
            super.makeSound()
        }
        console.log(this.tigerSound)
    }
}

class Parrot extends Bird{
    constructor(canTalk = false, sound, canFly, color, energy){
        super(sound, canFly, color, energy, )
        this.canTalk = canTalk

    }

    makeSound(option){
        if(option){
            super.makeSound();

        }
        if(this.canTalk){
            console.log("I am talking parrot")
        }

    }
}

var polly = new Parrot(true)
var fiji = new Parrot(false)

polly.makeSound();
fiji.makeSound();

console.log(polly.color);
console.log(polly.energy)

polly.isActive()

var penguin = new Bird("Shreik", false, "black and white", 200)
console.log(penguin)
penguin.isActive()


var leo = new HouseCat()
leo.makeSound(false)
leo.makeSound(true)

var cuddle = new Tiger()
cuddle.makeSound(false)
cuddle.makeSound(true)