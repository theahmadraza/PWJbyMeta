const purchase1 = {
    price: 100,
    unit: 1.5,

    priceCalculate: function(){
        var calculate = this.price * this.unit
        console.log(calculate)
    }
}

purchase1.priceCalculate()

const purchase2 = {
    price: 60,
    unit: 1.5,

    priceCalculate: function(){
        var calculate = this.price * this.unit
        console.log(calculate)
    }
}

purchase2.priceCalculate()

