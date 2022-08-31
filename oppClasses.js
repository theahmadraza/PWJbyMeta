class Car{
    constructor(price, hp){
        this.price = price
        this.hp = hp


    }

    turboON() {
        var calculate = this.price * this.hp
        console.log(calculate)
    }


}


var car1 = new Car(10, 20)
car1.turboON()